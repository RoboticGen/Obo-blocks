import './styles/index.css'
import oboBlocksLogo from './assets/obo_blocks.png'
import academyLogo from './assets/academyLogo.png'
import { editor, insertPythonSnippet, makeUneditable } from './editor/editor'


import * as Blockly from 'blockly'
import { toolbox } from './blocky/toolbox';
import { pythonGenerator } from 'blockly/python';
import { forBlock } from './blocky/generator';
import { blocks } from './blocky/blocks';
import { OboCategory } from './blocky/categories';
import { theme } from './blocky/themes';

insertPythonSnippet("def hello():\n    print('Hello, world!')");
let editable = false;

// ------------------ Elements -------------------------

const obo_blocks_logo = document.getElementById("obo-blocks-logo")
const academy_logo = document.getElementById("roboticgen-academy-logo")
const editbutton = document.getElementById("edit-button")
// const codeDiv = document.getElementById('generatedCode').firstChild;
const blocklyDiv = document.getElementById('editor');


// ------------------- Event Listners -----------------------------
editbutton.addEventListener('click', function () {
    editable = !editable
    makeUneditable(editable)
}
)
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

const ws = Blockly.inject(blocklyDiv, options);


ws.addChangeListener((e) => {
    // Don't run the code when the workspace finishes loading; we're
    // already running it once when the application starts.
    // Don't run the code during drags; we might have invalid state.
    if (e.isUiEvent || e.type == Blockly.Events.FINISHED_LOADING ||
      ws.isDragging()) {
      return;
    }
    const code = pythonGenerator.workspaceToCode(ws);
    insertPythonSnippet(code)
});
  