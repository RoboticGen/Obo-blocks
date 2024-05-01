import { EditorView, basicSetup } from "codemirror"
import { EditorState } from "@codemirror/state";
import { python } from "@codemirror/lang-python";

// Initialize the editor state
const state = EditorState.create({
  doc: "print('Hello, world!')", // Set initial content here
  extensions: [basicSetup, python()],
});

// Create the editor view
let editor = new EditorView({
  state,
  parent: document.getElementById("code-editor"),
});

// Function to insert Python code snippet into the editor
function insertPythonSnippet(snippet) {
  const transaction = editor.state.update({
    changes: { from: editor.state.selection.main.from, to: editor.state.selection.main.to, insert: snippet }
  });
  editor.dispatch(transaction);
}

// Example usage
export { editor , insertPythonSnippet };