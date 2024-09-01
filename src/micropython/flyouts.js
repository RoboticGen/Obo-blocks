function getButton(text){
    const button = document.createElement("button");
    button.setAttribute(text, `Create ${text} Variable`);
    button.setAttribute("callbackKey", `CREATE_${text}_VARIABLE`);
    return button;
}

function getBlock(type)
{
    let block = document.createElement('block')
    block.setAttribute("type",type)
    return block;
}

export const  pinCategoryFlyout = function (workspace) {

    let blockList = [];
    
    const pinVariables = workspace.getVariablesOfType("Pin");

    // if(pinVariables.length == 0 ) return blockList;

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
  
  
    let pin_state_block = getBlock("pin_state")
    let pin_mode_block = getBlock("pin_mode")
    let pin_variables_block = getBlock("pin_value")

    blockList.push(pin_state_block,pin_mode_block,pin_variables_block)

    return blockList;
  };