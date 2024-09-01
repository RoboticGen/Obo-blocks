import { PythonGenerator } from "blockly/python";

import * as Blockly from "blockly/core";

class MicropythonGenerator extends PythonGenerator {
  constructor() {
    super(); // Call the parent class constructor
    this.addReservedWords("time");
    this.addReservedWords("Pin");
  }

  init(workspace) {
    // Initialize definitions if they don't exist
    if (!this.definitions_) {
      this.definitions_ = {};
    }
    if (!this.nameDB_) {
      this.nameDB_ = new Blockly.Names(this.RESERVED_WORDS_);
    } else {
      this.nameDB_.reset();
    }

    this.nameDB_.setVariableMap(workspace.getVariableMap());
    this.nameDB_.populateVariables(workspace);
    this.nameDB_.populateProcedures(workspace);
  }

  finish(code) {
    // Convert the definitions dictionary to a list
    var imports = [];
    for (var name in this.definitions_) {
      imports.push(this.definitions_[name]);
    }
    // Join the imports with the code
    return imports.join("\n") + "\n" + code;
  }
}

export const pythonGenerator = new MicropythonGenerator();
