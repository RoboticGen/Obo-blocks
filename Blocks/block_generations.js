python.pythonGenerator.forBlock['print_block'] = function(block, generator) {
    var value_value = generator.valueToCode(block, 'value', python.Order.ATOMIC);
    var code = 'print(' + value_value +')\n';
    return code;
  };
  
  python.pythonGenerator.forBlock['string_block'] = function(block, generator) {
    var text_input = block.getFieldValue('input');
    var code = "\"" + text_input + "\"";
    return [code, python.Order.ATOMIC];
  };
  
  python.pythonGenerator.forBlock['add_block'] = function(block, generator) {
    var value_left = generator.valueToCode(block, 'left', python.Order.ATOMIC);
    var value_right = generator.valueToCode(block, 'right', python.Order.ATOMIC);
    var code = value_left + ' + ' + value_right;
    return [code, python.Order.ATOMIC];
  };
  
  python.pythonGenerator.forBlock['subtract_block'] = function(block, generator) {
    var value_left = generator.valueToCode(block, 'left', python.Order.ATOMIC);
    var value_right = generator.valueToCode(block, 'right', python.Order.ATOMIC);
    var code = value_left + ' - ' + value_right;
    return [code, python.Order.ATOMIC];
  };
  
  python.pythonGenerator.forBlock['if_block'] = function(block, generator) {
    var value_condition = generator.valueToCode(block, 'condition', python.Order.ATOMIC);
    var statements_statement = generator.statementToCode(block, 'statement');
    var code = 'if ' + value_condition + ':\n' + statements_statement;
    return code;
  };
  
  python.pythonGenerator.forBlock['number_block'] = function(block, generator) {
    var number_input = block.getFieldValue('input');
    var code = number_input;
    return [code, python.Order.ATOMIC];
  };
  
  python.pythonGenerator.forBlock['equal_block'] = function(block, generator) {
    var value_left = generator.valueToCode(block, 'left', python.Order.ATOMIC);
    var value_right = generator.valueToCode(block, 'right', python.Order.ATOMIC);
    var code = value_left + ' == ' + value_right;
    return [code, python.Order.ATOMIC];
  };
  
  python.pythonGenerator.forBlock['if_else_block'] = function(block, generator) {
    var value_condition = generator.valueToCode(block, 'condition', python.Order.ATOMIC);
    var statements_statement = generator.statementToCode(block, 'statement');
    var statements_else = generator.statementToCode(block, 'else');
    var code = 'if ' + value_condition + ':\n' + statements_statement + "\n" + "else : \n" + statements_else;
    return code;
  };
  
  python.pythonGenerator.forBlock['multiply_block'] = function(block, generator) {
    var value_left = generator.valueToCode(block, 'left', python.Order.ATOMIC);
    var value_right = generator.valueToCode(block, 'right', python.Order.ATOMIC);
    var code = value_left + ' * ' + value_right;
    return [code, python.Order.ATOMIC];
  };
  
  python.pythonGenerator.forBlock['division_block'] = function(block, generator) {
    var value_left = generator.valueToCode(block, 'left', python.Order.ATOMIC);
    var value_right = generator.valueToCode(block, 'right', python.Order.ATOMIC);
    var code = value_left + ' / ' + value_right;
    return [code, python.Order.ATOMIC];
  };
  
  python.pythonGenerator.forBlock['not_equal_block'] = function(block, generator) {
    var value_left = generator.valueToCode(block, 'left', python.Order.ATOMIC);
    var value_right = generator.valueToCode(block, 'right', python.Order.ATOMIC);
    var code = value_left + ' != ' + value_right;
    return [code, python.Order.ATOMIC];
  };
  
  python.pythonGenerator.forBlock['while_block'] = function(block, generator) {
    var value_condition = generator.valueToCode(block, 'condition', python.Order.ATOMIC);
    var statements_statement = generator.statementToCode(block, 'statement');
    var code = 'while ' + value_condition + ':\n' + statements_statement
    return code;
  };
  
  python.pythonGenerator.forBlock['greater_than_block'] = function(block, generator) {
    var value_left = generator.valueToCode(block, 'left', python.Order.ATOMIC);
    var value_right = generator.valueToCode(block, 'right', python.Order.ATOMIC);
    var code = value_left + ' > ' + value_right;
    return [code, python.Order.ATOMIC];
  };
  
  python.pythonGenerator.forBlock['less_than_block'] = function(block, generator) {
    var value_left = generator.valueToCode(block, 'left', python.Order.ATOMIC);
    var value_right = generator.valueToCode(block, 'right', python.Order.ATOMIC);
    var code = value_left + ' < ' + value_right;
    return [code, python.Order.ATOMIC];
  };
  
  python.pythonGenerator.forBlock['greater_than_equal_block'] = function(block, generator) {
    var value_left = generator.valueToCode(block, 'left', python.Order.ATOMIC);
    var value_right = generator.valueToCode(block, 'right', python.Order.ATOMIC);
    var code = value_left + ' >= ' + value_right;
    return [code, python.Order.ATOMIC];
  };
  
  python.pythonGenerator.forBlock['less_than_equal_block'] = function(block, generator) {
    var value_left = generator.valueToCode(block, 'left', python.Order.ATOMIC);
    var value_right = generator.valueToCode(block, 'right', python.Order.ATOMIC);
    var code = value_left + ' <= ' + value_right;
    return [code, python.Order.ATOMIC];
  };
  
  python.pythonGenerator.forBlock['input_block'] = function(block, generator) {
    var text_input = block.getFieldValue('input');
    var code = 'input(\"' + text_input +'\")\n';
    return [code, python.Order.ATOMIC];
  };
  
  python.pythonGenerator.forBlock['true_block'] = function(block, generator) {
    var code = 'True';
    return [code, python.Order.ATOMIC];
  };
  
  python.pythonGenerator.forBlock['false_block'] = function(block, generator) {
    var code = 'False';
    return [code, python.Order.ATOMIC];
  };
  
  python.pythonGenerator.forBlock['modulo_block'] = function(block, generator) {
    var value_left = generator.valueToCode(block, 'left', python.Order.ATOMIC);
    var value_right = generator.valueToCode(block, 'right', python.Order.ATOMIC);
    var code = value_left + ' % ' + value_right;
    return [code, Blockly.python.ORDER_NONE];
  };
  
  python.pythonGenerator.forBlock['power_block'] = function(block, generator) {
    var value_left = generator.valueToCode(block, 'left', python.Order.ATOMIC);
    var value_right = generator.valueToCode(block, 'right', python.Order.ATOMIC);
    var code = value_left + ' ^ ' + value_right;
    return [code, python.Order.ATOMIC];
  };
  
  python.pythonGenerator.forBlock['range_block'] = function(block, generator) {
    var value_start = generator.valueToCode(block, 'start', python.Order.ATOMIC);
    var value_end = generator.valueToCode(block, 'end', python.Order.ATOMIC);
    var value_step = generator.valueToCode(block, 'step', python.Order.ATOMIC);
  
    var code = 'range(';
    
    if (value_start != ''){
      code = code + value_start;
      
      if (value_end != ''){
        code = code + ',' + value_end;
        
        if (value_step != ''){
          code = code + ',' + value_step;
        }
      }
    }
    
    else if (value_end != ''){
      code = code + value_end;
    }
  
    code = code + ")"
  
    return [code, python.Order.ATOMIC];
  };
  
  python.pythonGenerator.forBlock['for_block'] = function(block, generator) {
    var variable_variable = generator.getVariableName(block.getFieldValue('variable'), Blockly.Variables.NAME_TYPE);
    var value_value = generator.valueToCode(block, 'value', python.Order.ATOMIC);
    var statements_statement = generator.statementToCode(block, 'statement');
    var code = 'for ' + variable_variable + ' in ' + value_value + ' :\n' + statements_statement ;
    return code;
  };
  
  python.pythonGenerator.forBlock['list_block'] = function(block, generator) {
    var text_input = block.getFieldValue('input');
    var code = '[' + text_input + ']';
    return [code, python.Order.ATOMIC];
  };
  
  python.pythonGenerator.forBlock['list_append_block'] = function(block, generator) {
    var value_value = generator.valueToCode(block, 'value', python.Order.ATOMIC);
    var value_list = generator.valueToCode(block, 'list', python.Order.ATOMIC);
    var code = value_list + '.append(' + value_value + ')\n';
    return code;
  };
  
  python.pythonGenerator.forBlock['list_remove_block'] = function(block, generator) {
    var value_value = generator.valueToCode(block, 'value', python.Order.ATOMIC);
    var value_list = generator.valueToCode(block, 'list', python.Order.ATOMIC);
    var code = value_list + '.remove(' + value_value + ')\n';
    return code;
  };
  
  python.pythonGenerator.forBlock['list_index_get_block'] = function(block, generator) {
    var number_index = block.getFieldValue('index');
    var value_input = generator.valueToCode(block, 'input', python.Order.ATOMIC);
    var code = value_input + '[' + number_index + ']';
    return [code, python.Order.ATOMIC];
  };
  
  python.pythonGenerator.forBlock['list_index_set_block'] = function(block, generator) {
    var number_index = block.getFieldValue('index');
    var value_input = generator.valueToCode(block, 'input', python.Order.ATOMIC);
    var text_value = block.getFieldValue('value');
    // TODO: Assemble python into code variable.
    var code = value_input + '[' + number_index + '] = ' + text_value + '\n';
    return code;
  };

  python.pythonGenerator.forBlock['int_str_conv_block'] = function(block, generator) {
    var value_input = block.getFieldValue('number');
    var code = 'str(' + value_input + ')';
    return [code, python.Order.ATOMIC];
  }