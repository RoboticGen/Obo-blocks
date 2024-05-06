import './styles/index.css'

import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

import oboBlocksLogo from './assets/obo_blocks.png'
import academyLogo from './assets/academyLogo.png'


import { editor, insertPythonSnippet, makeUneditable, saveAsPythonFile } from './editor/editor'


import * as Blockly from 'blockly'
import { toolbox } from './blocky/toolbox';
import { pythonGenerator } from 'blockly/python';
import { forBlock } from './blocky/generator';
import { blocks } from './blocky/blocks';
import { OboCategory } from './blocky/categories';
import { theme } from './blocky/themes';
import { save, load } from './blocky/serialization'

import { worker, terminal, stopWorker } from './pyodide/loader'



let editable = false;

// ------------------ Elements -------------------------

const obo_blocks_logo = document.getElementById("obo-blocks-logo")
const academy_logo = document.getElementById("roboticgen-academy-logo")
const editbutton = document.getElementById("edit-button")
// const codeDiv = document.getElementById('generatedCode').firstChild;
const blocklyDiv = document.getElementById('editor');
const copyButton = document.getElementById('copy-button');
const runcodeButton = document.getElementById('run-button');
const clearButton = document.getElementById('clear-button');
const stopButton = document.getElementById('stop-button');
const exportButton = document.getElementById('export-button');
const notification = document.getElementById("notification");
const notificationText = document.getElementById("notificationText");
const runButtonText = document.getElementById('run-text');
const editbuttonText = document.getElementById('edit-text');



// ------------------- Event Listners -----------------------------
obo_blocks_logo.src = oboBlocksLogo
academy_logo.src = academyLogo
// ------------------- Blockly Configuration -------------------------

Blockly.common.defineBlocks(blocks);
Object.assign(pythonGenerator.forBlock, forBlock);

Blockly.registry.register(
    Blockly.registry.Type.TOOLBOX_ITEM,
    Blockly.ToolboxCategory.registrationName,
    OboCategory, true);


const options = {
    'toolbox': toolbox,
    'theme': theme,
    media: 'media',
    grid: {
        spacing: 20,
        length: 1,
        colour: '#888',
        snap: false
    },
    zoom: {
        controls: true,
        startScale: 1,
        maxScale: 1.5,
        minScale: 0.7,
        scaleSpeed: 1.2
    },
    'renderer': 'zelos',
}

let ws = Blockly.inject(blocklyDiv, options);

// ----------------------- Function defintions --------------------------------
async function runcode() {
    try {
        runcodeButton.setAttribute('disabled', true);
        runButtonText.innerHTML = 'Running';
        let code = editor.state.doc.toString();
        worker.postMessage({ code: code, command: 'run' });
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

function showNotification(message) {
    notificationText.innerText = message;

    // Show the notification
    notification.classList.add("show");

    // Hide the notification after 2 seconds
    setTimeout(function () {
        notification.classList.remove("show");
    }, 1500);
}


// ------------------------ Event Listners -----------------------------------------------------------

editbutton.addEventListener('click', function () {
    editable = !editable
    makeUneditable(editable)
    if (editable) {
        showNotification("Editing enabled");
        editbuttonText.innerHTML = 'Editing'
        save(ws)
        ws.dispose()
    }
    else {
        editbuttonText.innerHTML = 'Edit'
        ws = Blockly.inject(blocklyDiv, options);
        load(ws)
        ws.addChangeListener((e) => {
            // Don't run the code when the workspace finishes loading; we're
            // already running it once when the application starts.
            // Don't run the code during drags; we might have invalid state.
            if (e.isUiEvent || e.type == Blockly.Events.FINISHED_LOADING ||
                ws.isDragging()) {
                return;
            }
            save(ws)
            const code = pythonGenerator.workspaceToCode(ws);
            insertPythonSnippet(code)
        });
        const code = pythonGenerator.workspaceToCode(ws);
        insertPythonSnippet(code)
        showNotification("Editing disabled");
    }

}
)
copyButton.addEventListener('click', () => {
    let code = editor.state.doc.toString();;
    copyTextToClipboard(code);
    showNotification("Code copied to clipboard");
});

runcodeButton.addEventListener('click', () => {
    runcode();
});

clearButton.addEventListener('click', () => {
    terminal.innerHTML = 'Python 3.10 \n>>> ';
    showNotification("Terminal cleared");
});

stopButton.addEventListener('click', () => {
    stopWorker()
})

exportButton.addEventListener('click', () => {
    saveAsPythonFile();
    showNotification("Code exported as script.py");
});

ws.addChangeListener((e) => {
    // Don't run the code when the workspace finishes loading; we're
    // already running it once when the application starts.
    // Don't run the code during drags; we might have invalid state.
    if (e.isUiEvent || e.type == Blockly.Events.FINISHED_LOADING ||
        ws.isDragging()) {
        return;
    }
    save(ws)
    const code = pythonGenerator.workspaceToCode(ws);
    insertPythonSnippet(code)
});

document.addEventListener('DOMContentLoaded', () => {
    makeUneditable(editable)
    notification.style.transition = "opacity 0.5s ease-in-out"
    ws.resize();
}
);
