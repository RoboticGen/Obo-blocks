const copyButton = document.getElementById('copy-button');
const runcodeButton = document.getElementById('run-button');
const runButtonIcon = document.getElementById('run-icon');
const runButtonText = document.getElementById('run-text');
const codeGenerated = document.getElementById('output');
const terminal = document.getElementById('terminal-output');
const loadingIcon  = document.createElement('i');
loadingIcon.className = 'material-icons left';
loadingIcon.innerHTML = 'cycle';


async function runcode() {
    try {
        runcodeButton.className = 'waves-effect white btn disabled';
        runButtonText.innerHTML = 'Running...';
        let code = codeGenerated.innerHTML;
        let output = pyodide.runPython(code);
        runcodeButton.className = 'waves-effect white btn';
        runButtonText.innerHTML = 'Run';
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
        runcodeButton.className = 'waves-effect white btn disabled';
        runButtonIcon.innerText = 'cloud_download';
        runButtonText.innerHTML = 'Loading...';
        runButtonIcon.style.color = 'yellow';
        pyodide = await loadPyodide();
        runcodeButton.className = 'waves-effect white btn'; // Enable run button after Pyodide is loaded
        runButtonIcon.innerText = 'flag';
        runButtonText.innerHTML = 'Run';
        runButtonIcon.style.color = 'green';
        terminal.innerHTML += 'Python 3.10 \n>>>'
        pyodide.setStdout({ batched: (msg) => terminal.innerHTML += msg + '\n>>>'});
    } catch (err) {
        console.error('Failed to load Pyodide:', err);
    }
});
