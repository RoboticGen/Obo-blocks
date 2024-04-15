const copyButton = document.getElementById('copy-button');
const runcodeButton = document.getElementById('run-button');
const runButtonIcon = document.getElementById('run-icon');
const runButtonText = document.getElementById('run-text');
const codeGenerated = document.getElementById('output');
const preCode = document.getElementById('pre-code');
const terminal = document.getElementById('terminal-output');
var toolbox = document.getElementById("toolbox");
const loadingIcon = document.createElement('i');
loadingIcon.className = 'material-icons left';
loadingIcon.innerHTML = 'cycle';
let pyodide;



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

class CustomCategory extends Blockly.ToolboxCategory {
    /**
     * Constructor for a custom category.
     * @override
     */
    constructor(categoryDef, toolbox, opt_parent) {
        super(categoryDef, toolbox, opt_parent);
    }
    /** @override */
    addColourBorder_(colour) {
        this.rowDiv_.style.backgroundColor = colour;
    }
    setSelected(isSelected){
        // We do not store the label span on the category, so use getElementsByClassName.
        var labelDom = this.rowDiv_.getElementsByClassName('blocklyTreeLabel')[0];
        if (isSelected) {
          // Change the background color of the div to white.
          this.rowDiv_.style.backgroundColor = 'white';
          // Set the colour of the text to the colour of the category.
          labelDom.style.color = this.colour_;
          this.iconDom_.style.color = this.colour_;
        } else {
          // Set the background back to the original colour.
          this.rowDiv_.style.backgroundColor = this.colour_;
          // Set the text back to white.
          labelDom.style.color = 'white';
          this.iconDom_.style.color = 'white';
        }
        // This is used for accessibility purposes.
        Blockly.utils.aria.setState(/** @type {!Element} */ (this.htmlDiv_),
            Blockly.utils.aria.State.SELECTED, isSelected);
     }
}
Blockly.registry.register(
    Blockly.registry.Type.TOOLBOX_ITEM,
    Blockly.ToolboxCategory.registrationName,
    CustomCategory, true);

var workspace = Blockly.inject("editor", options);

var workspaceBlocks = document.getElementById("workspaceBlocks");
Blockly.utils.colour.setHsvSaturation(0.54);
Blockly.utils.colour.setHsvValue(0.75);

const supportedEvents = new Set([
    Blockly.Events.BLOCK_CHANGE,
    Blockly.Events.BLOCK_CREATE,
    Blockly.Events.BLOCK_DELETE,
    Blockly.Events.BLOCK_MOVE,
]);

function updateCode(event) {
    if (workspace.isDragging()) return;
    if (!supportedEvents.has(event.type)) return;
    if (preCode.hasAttribute("data-highlighted")) {
        preCode.removeAttribute("data-highlighted");
    }
    const code = python.pythonGenerator.workspaceToCode(workspace);
    codeGenerated.innerHTML = code;
    preCode.innerHTML = codeGenerated.innerHTML;
    console.log(code);
    hljs.highlightAll();
}


async function runcode() {
    try {
        runcodeButton.setAttribute('disabled', true);
        runButtonText.innerHTML = 'Running';
        let code = codeGenerated.innerHTML;
        let output = pyodide.runPython(code);
        runcodeButton.removeAttribute('disabled');
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
    let code = preCode.innerText;
    copyTextToClipboard(code);
});

runcodeButton.addEventListener('click', () => {
    runcode();
});

document.addEventListener('DOMContentLoaded', async () => {
    try {
        runcodeButton.setAttribute('disabled', true);
        runcodeButton.style.width = '6rem';
        runcodeButton.isdisabled = true;
        runButtonText.innerHTML = 'Loading...';
        runButtonIcon.className = 'fa fa-spinner';
        pyodide = await loadPyodide();
        runcodeButton.removeAttribute('disabled');
        runcodeButton.style.width = '4rem';
        runButtonText.innerHTML = 'Run';
        runButtonIcon.className = 'fa fa-play';
        terminal.innerHTML += 'Python 3.10 \n>>> '
        pyodide.setStdout({ batched: (msg) => terminal.innerHTML += msg + '\n>>> ' });
    } catch (err) {
        console.error('Failed to load Pyodide:', err);
    }
});

workspace.addChangeListener(updateCode);