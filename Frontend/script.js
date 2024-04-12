const copyButton = document.getElementById('copy-button');
const runcodeButton = document.getElementById('run-button');
const runButtonIcon = document.getElementById('run-icon');
const runButtonText = document.getElementById('run-text');
const codeGenerated = document.getElementById('output');
const terminal = document.getElementById('terminal-output');
var toolbox = document.getElementById("toolbox");
const loadingIcon = document.createElement('i');
loadingIcon.className = 'material-icons left';
loadingIcon.innerHTML = 'cycle';


var options = {
    toolbox: toolbox,
    collapse: true,
    comments: true,
    disable: true,
    maxBlocks: Infinity,
    trashcan: true,
    horizontalLayout: false,
    toolboxPosition: 'start',
    css: true,
    media: 'Media',
    rtl: false,
    scrollbars: true,
    sounds: true,
    oneBasedIndex: true,
    grid: {
        spacing: 20,
        length: 1,
        colour: '#888',
        snap: false
    },
    zoom: {
        controls: true,
        wheel: true,
        startScale: 1,
        maxScale: 1.5,
        minScale: 0.7,
        scaleSpeed: 1.2
    },
    renderer: 'zelos',
};

var workspace = Blockly.inject("editor", options);

var workspaceBlocks = document.getElementById("workspaceBlocks");

class CustomCategory extends Blockly.ToolboxCategory {
    /**
     * Constructor for a custom category.
     * @override
     */
    constructor(categoryDef, toolbox, opt_parent) {
        super(categoryDef, toolbox, opt_parent);
    }
}

Blockly.registry.register(
    Blockly.registry.Type.TOOLBOX_ITEM,
    Blockly.ToolboxCategory.registrationName,
    CustomCategory, true);
Blockly.Xml.domToWorkspace(workspaceBlocks, workspace);

const supportedEvents = new Set([
    Blockly.Events.BLOCK_CHANGE,
    Blockly.Events.BLOCK_CREATE,
    Blockly.Events.BLOCK_DELETE,
    Blockly.Events.BLOCK_MOVE,
]);

function updateCode(event) {
    if (workspace.isDragging()) return;
    if (!supportedEvents.has(event.type)) return;

    const code = python.pythonGenerator.workspaceToCode(workspace);
    codeGenerated.innerHTML = code;
}


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
        pyodide.setStdout({ batched: (msg) => terminal.innerHTML += msg + '\n>>>' });
    } catch (err) {
        console.error('Failed to load Pyodide:', err);
    }
});

workspace.addChangeListener(updateCode);