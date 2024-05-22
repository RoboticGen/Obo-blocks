// Inside webworker.js
let isready = false;
let pyodide = null;
let buffer = new Array();
let shareArray;
let msgRecieved = false;
let waiting = false;
let msg = null;

if ('undefined' === typeof window) {
    importScripts('https://cdn.jsdelivr.net/pyodide/v0.25.0/full/pyodide.js');
}

async function initPyodide() {
    pyodide = await loadPyodide({ indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.25.0/full/' });
    pyodide.setStdout({ batched: (x) => stdoutHandler(x) });
    pyodide.setStderr({ batched: (x) => stderrHandler(x) });
    pyodide.setStdin({ error: true });
}

initPyodide().then(() => {
    isready = true;
    self.postMessage({ responce: "result", result: 'Python 3  .10' });
}
);
function getSyntaxError(message) {
    const syntaxErrorIndex = message.indexOf('Error');
    if (syntaxErrorIndex !== -1) {
      return message.substring(syntaxErrorIndex);
    } else {
      return 'Unknown error occurred. Please check your code and try again.';
    }
  }


function stdoutHandler(x) {
    self.postMessage({ responce: "result", result: x });
}

function stderrHandler(x) {
    self.postMessage({ responce: "error", error: x });
    console.log(x);
}

function stdinHandler() {
    console.log(buffer.length)
    if (buffer.length > 0) {
        let responce = buffer.shift();
        return responce;
    }
    else {
        self.postMessage({ responce: "request" });
        return 0;
    }
}


function codeRunner(code) {
    if (!isready) {
        initPyodide();
        isready = true;
    }
    try 
    {
        pyodide.runPython(code)
    }
    catch (err) {
        console.log(err.message);
        let error = getSyntaxError(err.message);
        console.log(error);
        self.postMessage({ responce: "error", error: error });
    }
    
}



self.onmessage = async function (event) {
    if (!isready) {
        await initPyodide();
        isready = true;
    }
    let command = event.data.command;
    if (command === 'run') {
        let code = event.data.code;
        try {
            codeRunner(code);
            return;
        } catch (err) {
            self.postMessage({ response: "error", error: err.message });
        }
    }
    else if (command === 'input') {
        let code = event.data.code;
        for (let i = 0; i < code.length; i++) {
            buffer.push(code.charCodeAt(i));
        }
    }
    else {
        console.error('Unknown command:', command);
    }
};

self.onerror = function (event) {
    console.error(event.message);
}
