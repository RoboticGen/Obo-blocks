export const createPinButtonCallback = function (button) {

    const ws = button.getTargetWorkspace();
    const variableMap = ws.getVariableMap();

    let varibleName = prompt("Enter the name of the pin variable", "pin");

    let allvariableNames = variableMap.getAllVariableNames();

    if (allvariableNames.includes(varibleName)) {
      alert("The variable name already exists");
      return;
    }

    let newVar = variableMap.createVariable(varibleName, "Pin");

  };

  export const createADCButtonCallback = function (button) {

    const ws = button.getTargetWorkspace();
    const variableMap = ws.getVariableMap();

    let varibleName = prompt("Enter the name of the adc variable", "adc");

    let allvariableNames = variableMap.getAllVariableNames();

    if (allvariableNames.includes(varibleName)) {
      alert("The variable name already exists");
      return;
    }

    let newVar = variableMap.createVariable(varibleName, "ADC");

  };

  export const createPWMButtonCallback = function (button) {

    const ws = button.getTargetWorkspace();
    const variableMap = ws.getVariableMap();

    let varibleName = prompt("Enter the name of the pwm variable", "pwm");

    let allvariableNames = variableMap.getAllVariableNames();

    if (allvariableNames.includes(varibleName)) {
      alert("The variable name already exists");
      return;
    }

    let newVar = variableMap.createVariable(varibleName, "PWM");

  };


    export const createI2CButtonCallback = function (button) {

    const ws = button.getTargetWorkspace();
    const variableMap = ws.getVariableMap();

    let varibleName = prompt("Enter the name of the pwm variable", "i2c");

    let allvariableNames = variableMap.getAllVariableNames();

    if (allvariableNames.includes(varibleName)) {
      alert("The variable name already exists");
      return;
    }

    let newVar = variableMap.createVariable(varibleName, "I2C");

  };