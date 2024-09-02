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

    let varibleName = prompt("Enter the name of the pin variable", "adc");

    let allvariableNames = variableMap.getAllVariableNames();

    if (allvariableNames.includes(varibleName)) {
      alert("The variable name already exists");
      return;
    }

    let newVar = variableMap.createVariable(varibleName, "ADC");

  };