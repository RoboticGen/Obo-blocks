import './styles/index.css'
import oboBlocksLogo from './assets/obo_blocks.png'
import { editor, insertPythonSnippet } from './editor'

insertPythonSnippet("def hello():\n    print('Hello, world!')");

const obo_blocks_logo = document.getElementById("obo-blocks-logo")
obo_blocks_logo.src = oboBlocksLogo