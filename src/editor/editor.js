import { EditorView, basicSetup } from "codemirror"
import { EditorState, Compartment } from "@codemirror/state";
import { python } from "@codemirror/lang-python";


const editableCompartment = new Compartment;


// Initialize the editor state
const state = EditorState.create({
  doc: "", // Set initial content here
  extensions: [
    basicSetup,
    python(),
    editableCompartment.of(EditorView.editable.of(false))
  ],
});

// Create the editor view
let editor = new EditorView({
  state,
  parent: document.getElementById("code-editor"),
});


// Function to insert Python code snippet into the editor
function insertPythonSnippet(snippet) {
  const transaction = editor.state.update({
    changes: {from: 0, to: editor.state.doc.length, insert: snippet }
  });
  editor.dispatch(transaction);
}

function makeUneditable(state) {
  editor.dispatch(
    { effects: editableCompartment.reconfigure(EditorView.editable.of(state)) }
  )
}
function saveAsPythonFile() {
  // Get the content of the editor
  const content = editor.state.doc.toString();

  // Create a Blob with the content
  const blob = new Blob([content], { type: "text/plain" });

  // Create a temporary anchor element
  const anchor = document.createElement("a");
  anchor.download = "script.py"; // Set the filename
  anchor.href = URL.createObjectURL(blob);

  // Simulate a click to trigger the download
  anchor.click();

  // Clean up
  URL.revokeObjectURL(anchor.href);
}


export { editor, insertPythonSnippet, makeUneditable ,saveAsPythonFile };