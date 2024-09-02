import * as Blockly from "blockly/core";

export const defaultVariableValidator = function (variable_id) {
  let variable = this.getSourceBlock()
    .workspace.getVariableMap()
    .getVariableById(variable_id);
  if (variable.type != "") return null;
};

export const pinModeBlockValidator = function (event) {
  if (this.workspace.getBlocksByType("pin_mode").length === 0)
    this.setWarningText("You should initialize Pin Mode First");
  else this.setWarningText();
};

export const adcBlockValidator = function(event){
    if (this.workspace.getBlocksByType("create_adc").length === 0)
        this.setWarningText("You should initialize create ADC First");
      else this.setWarningText();
}