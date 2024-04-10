const copyButton = document.getElementById('copy-button');
const runcodeButton = document.getElementById('run-button');
const codeGenerated = document.getElementById('output');
const terminal = document.getElementById('terminal-output');
let pyodide;

async function runcode() {
    try {
        let code = codeGenerated.innerHTML;
        let output = pyodide.runPython(code);
    } catch (err) {
        console.error('Error running code:', err);
    }
}

async function copyTextToClipboard(textToCopy) {
    try {
        if (navigator?.clipboard?.writeText) {
            await navigator.clipboard.writeText(textToCopy);
        }
    } catch (err) {
        console.error('Error copying text to clipboard:', err);
    }
}

copyButton.addEventListener('click', () => {
    let code = codeGenerated.innerHTML;
    copyTextToClipboard(code);
});

runcodeButton.addEventListener('click', () => {
    runcode();
});

document.addEventListener('DOMContentLoaded', async () => {
    try {
        pyodide = await loadPyodide();
        runcodeButton.className = 'waves-effect white btn'; // Enable run button after Pyodide is loaded
        terminal.innerHTML += 'Python 3.10 \n>>>'
        pyodide.setStdout({ batched: (msg) => terminal.innerHTML += msg + '\n>>>'});
    } catch (err) {
        console.error('Failed to load Pyodide:', err);
    }
});
