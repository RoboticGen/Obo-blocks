import * as Blockly from "blockly/core";

export const defaultVariableValidator = function (variable_id) {
  let variable = this.getSourceBlock()
    .workspace.getVariableMap()
    .getVariableById(variable_id);
  if (variable.type != "") return null;
};

export const pinModeBlockValidator = function (event) {
  if (this.workspace.getBlocksByType("pin_mode").length === 0)
    this.setWarningText("You should initialize Pin first");
  else this.setWarningText();
};

export const adcBlockValidator = function(event){
    if (this.workspace.getBlocksByType("create_adc").length === 0)
        this.setWarningText("You should initialize create ADC first");
      else this.setWarningText();
}

export const pwmBlockValidator = function(event){
  if (this.workspace.getBlocksByType("create_pwm").length === 0)
      this.setWarningText("You should initialize create PWM first");
    else this.setWarningText();
}

export const i2cPinBlockValidator = function(event){
  if (this.workspace.getBlocksByType("pin_mode").length < 2)
      this.setWarningText("You should initialize create two pins first");
    else this.setWarningText();
}

export const i2cBlockValidator = function(event){
  if (this.workspace.getBlocksByType("i2c_init").length === 0 && this.workspace.getBlocksByType("i2c").length === 0)
      this.setWarningText("You should initialize create i2c first");
    else this.setWarningText();
}
