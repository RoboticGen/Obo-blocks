function getButton(text) {
  const button = document.createElement("button");
  button.setAttribute(text, `Create ${text} Variable`);
  button.setAttribute("callbackKey", `CREATE_${text}_VARIABLE`);
  return button;
}

function getBlock(type) {
  let block = document.createElement("block");
  block.setAttribute("type", type);
  return block;
}

export const pinCategoryFlyout = function (workspace) {
  let blockList = [];

  const pinVariables = workspace.getVariablesOfType("Pin");

  if (pinVariables.length == 0) {
    alert("First create a Pin variable !");
    return blockList;
  }

  pinVariables.forEach((variable) => {
    const block = document.createElement("block");
    block.setAttribute("type", "variables_get");
    const field = document.createElement("field");
    field.setAttribute("name", "VAR"); // 'VAR' is the standard name for field_variable.
    field.setAttribute("variabletype", "Pin");
    field.setAttribute("type", "field_variable"),
      field.appendChild(document.createTextNode(variable.name));
    block.appendChild(field);
    blockList.push(block);
  });

  let pin_state_block = getBlock("pin_state");
  let pin_mode_block = getBlock("pin_mode");
  let pin_variables_block = getBlock("pin_value");

  blockList.push(pin_state_block, pin_mode_block, pin_variables_block);

  return blockList;
};

export const adcCategoryFlyout = function (workspace) {
  let blockList = [];

  const adcVariables = workspace.getVariablesOfType("ADC");

  if (adcVariables.length == 0) {
    alert("First create a ADC !");
    return blockList;
  }

  adcVariables.forEach((variable) => {
    const block = document.createElement("block");
    block.setAttribute("type", "variables_get");
    const field = document.createElement("field");
    field.setAttribute("name", "VAR"); // 'VAR' is the standard name for field_variable.
    field.setAttribute("variabletype", "ADC");
    field.setAttribute("type", "field_variable"),
      field.appendChild(document.createTextNode(variable.name));
    block.appendChild(field);
    blockList.push(block);
  });

  let create_adc_block = getBlock("create_adc");
  let read_adc_block = getBlock("read_adc");
  let read_micro_volts_block = getBlock("read_micro_volt");

  blockList.push(create_adc_block, read_adc_block, read_micro_volts_block);

  return blockList;
};


export const pwmCategoryFlyout = function (workspace) {
  let blockList = [];

  const adcVariables = workspace.getVariablesOfType("PWM");

  if (adcVariables.length == 0) {
    alert("First create a PWM !");
    return blockList;
  }

  adcVariables.forEach((variable) => {
    const block = document.createElement("block");
    block.setAttribute("type", "variables_get");
    const field = document.createElement("field");
    field.setAttribute("name", "VAR"); // 'VAR' is the standard name for field_variable.
    field.setAttribute("variabletype", "PWM");
    field.setAttribute("type", "field_variable"),
      field.appendChild(document.createTextNode(variable.name));
    block.appendChild(field);
    blockList.push(block);
  });

  let create_pwm_block = getBlock("create_pwm");
  let set_pwm_duty = getBlock("set_pwm_duty");
  let init_pwm = getBlock("init_pwm");
  let deinit_pwm = getBlock("deinitilize_pwm");
  let set_duty_ns = getBlock("set_duty_ns");
  let set_frequency = getBlock("set_frequency")

  blockList.push(create_pwm_block,set_pwm_duty,init_pwm,deinit_pwm,set_duty_ns,set_frequency);

  return blockList;
};

export const i2cCategoryFlyout = function (workspace) {
  let blockList = [];

  const i2c = workspace.getVariablesOfType("I2C");

  if (i2c.length == 0) {
    alert("First create a I2C !");
    return blockList;
  }

  i2c.forEach((variable) => {
    const block = document.createElement("block");
    block.setAttribute("type", "variables_get");
    const field = document.createElement("field");
    field.setAttribute("name", "VAR"); // 'VAR' is the standard name for field_variable.
    field.setAttribute("variabletype", "PWM");
    field.setAttribute("type", "field_variable"),
      field.appendChild(document.createTextNode(variable.name));
    block.appendChild(field);
    blockList.push(block);
  });

  let create_i2c = getBlock("i2c");
  let initialize_i2c = getBlock("i2c_init");
  let deinit_i2c = getBlock("deint_i2c");
  let scan_i2c = getBlock("i2c_scan")
  
  blockList.push(create_i2c,initialize_i2c,deinit_i2c,scan_i2c);

  return blockList;
};
