// Inside webworker.js
let isready = false;
let pydiode = null;
let buffer = new Array();

if ('undefined' === typeof window) {
    importScripts('https://cdn.jsdelivr.net/pyodide/v0.24.0/full/pyodide.js');
}
function stdoutHandler(x) {
    self.postMessage({result: x});
}

let response = async () => {
    let pyodide = await loadPyodide();
    self.pyodide = pyodide;
    self.pyodide.setStdout({batched:(x) => stdoutHandler(x)});
    isready = true;
}

async function codeRunner(code) {
    if (!isready) {
        await response();
    }
    return self.pyodide.runPythonAsync(code);
  }

self.onmessage = async function (event) {
    
    let command = event.data.command;
    if (command === 'run') {
        let code = event.data.code;
        try {
            codeRunner(code);
        } catch (err) {
            console.error('Error running code:', err);
        }
    }
    else if (command === 'start')
    {
        let code = event.data.code;
        try {
            await codeRunner(code);
            self.postMessage({result: 'Python 3.10'});
        } catch (err) {
            console.error('Error running code:', err);
        }
    }
};
