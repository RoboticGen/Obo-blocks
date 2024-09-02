/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { Order } from "blockly/python";

import * as Blockly from "blockly";

// Export all the code generators for our custom blocks,
// but don't register them with Blockly yet.
// This file has no side effects!
export const forBlock = Object.create(null);

forBlock["print_block"] = function (block, generator) {
  var value_value = generator.valueToCode(block, "value", Order.ATOMIC);
  var code = "print(" + value_value + ")\n";
  return code;
};

forBlock["string_block"] = function (block, generator) {
  var text_input = block.getFieldValue("input");
  var code = '"' + text_input + '"';
  return [code, Order.ATOMIC];
};

forBlock["add_block"] = function (block, generator) {
  var value_left = generator.valueToCode(block, "left", Order.ATOMIC);
  var value_right = generator.valueToCode(block, "right", Order.ATOMIC);
  var code = value_left + " + " + value_right;
  return [code, Order.ATOMIC];
};

forBlock["subtract_block"] = function (block, generator) {
  var value_left = generator.valueToCode(block, "left", Order.ATOMIC);
  var value_right = generator.valueToCode(block, "right", Order.ATOMIC);
  var code = value_left + " - " + value_right;
  return [code, Order.ATOMIC];
};

forBlock["if_block"] = function (block, generator) {
  var value_condition = generator.valueToCode(block, "condition", Order.ATOMIC);
  var statements_statement = generator.statementToCode(block, "statement");
  var code = "if " + value_condition + ":\n" + statements_statement;
  return code;
};

forBlock["number_block"] = function (block, generator) {
  var number_input = block.getFieldValue("input");
  var code = number_input;
  return [code, Order.ATOMIC];
};

forBlock["equal_block"] = function (block, generator) {
  var value_left = generator.valueToCode(block, "left", Order.ATOMIC);
  var value_right = generator.valueToCode(block, "right", Order.ATOMIC);
  var code = value_left + " == " + value_right;
  return [code, Order.ATOMIC];
};

forBlock["if_else_block"] = function (block, generator) {
  var value_condition = generator.valueToCode(block, "condition", Order.ATOMIC);
  var statements_statement = generator.statementToCode(block, "statement");
  var statements_else = generator.statementToCode(block, "else");
  var code =
    "if " +
    value_condition +
    ":\n" +
    statements_statement +
    "\n" +
    "else : \n" +
    statements_else;
  return code;
};

forBlock["multiply_block"] = function (block, generator) {
  var value_left = generator.valueToCode(block, "left", Order.ATOMIC);
  var value_right = generator.valueToCode(block, "right", Order.ATOMIC);
  var code = value_left + " * " + value_right;
  return [code, Order.ATOMIC];
};

forBlock["division_block"] = function (block, generator) {
  var value_left = generator.valueToCode(block, "left", Order.ATOMIC);
  var value_right = generator.valueToCode(block, "right", Order.ATOMIC);
  var code = value_left + " / " + value_right;
  return [code, Order.ATOMIC];
};

forBlock["not_equal_block"] = function (block, generator) {
  var value_left = generator.valueToCode(block, "left", Order.ATOMIC);
  var value_right = generator.valueToCode(block, "right", Order.ATOMIC);
  var code = value_left + " != " + value_right;
  return [code, Order.ATOMIC];
};

forBlock["while_block"] = function (block, generator) {
  var value_condition = generator.valueToCode(block, "condition", Order.ATOMIC);
  var statements_statement = generator.statementToCode(block, "statement");
  var code = "while " + value_condition + ":\n" + statements_statement;
  return code;
};

forBlock["greater_than_block"] = function (block, generator) {
  var value_left = generator.valueToCode(block, "left", Order.ATOMIC);
  var value_right = generator.valueToCode(block, "right", Order.ATOMIC);
  var code = value_left + " > " + value_right;
  return [code, Order.ATOMIC];
};

forBlock["less_than_block"] = function (block, generator) {
  var value_left = generator.valueToCode(block, "left", Order.ATOMIC);
  var value_right = generator.valueToCode(block, "right", Order.ATOMIC);
  var code = value_left + " < " + value_right;
  return [code, Order.ATOMIC];
};

forBlock["greater_than_equal_block"] = function (block, generator) {
  var value_left = generator.valueToCode(block, "left", Order.ATOMIC);
  var value_right = generator.valueToCode(block, "right", Order.ATOMIC);
  var code = value_left + " >= " + value_right;
  return [code, Order.ATOMIC];
};

forBlock["less_than_equal_block"] = function (block, generator) {
  var value_left = generator.valueToCode(block, "left", Order.ATOMIC);
  var value_right = generator.valueToCode(block, "right", Order.ATOMIC);
  var code = value_left + " <= " + value_right;
  return [code, Order.ATOMIC];
};

forBlock["input_block"] = function (block, generator) {
  var text_input = block.getFieldValue("input");
  var code = 'input("' + text_input + '")\n';
  return [code, Order.ATOMIC];
};

forBlock["true_block"] = function (block, generator) {
  var code = "True";
  return [code, Order.ATOMIC];
};

forBlock["false_block"] = function (block, generator) {
  var code = "False";
  return [code, Order.ATOMIC];
};

forBlock["modulo_block"] = function (block, generator) {
  var value_left = generator.valueToCode(block, "left", Order.ATOMIC);
  var value_right = generator.valueToCode(block, "right", Order.ATOMIC);
  var code = value_left + " % " + value_right;
  return [code, Blockly.python.ORDER_NONE];
};

forBlock["power_block"] = function (block, generator) {
  var value_left = generator.valueToCode(block, "left", Order.ATOMIC);
  var value_right = generator.valueToCode(block, "right", Order.ATOMIC);
  var code = value_left + " ^ " + value_right;
  return [code, Order.ATOMIC];
};

forBlock["range_block"] = function (block, generator) {
  var value_start = generator.valueToCode(block, "start", Order.ATOMIC);
  var value_end = generator.valueToCode(block, "end", Order.ATOMIC);
  var value_step = generator.valueToCode(block, "step", Order.ATOMIC);

  var code = "range(";

  if (value_start != "") {
    code = code + value_start;

    if (value_end != "") {
      code = code + "," + value_end;

      if (value_step != "") {
        code = code + "," + value_step;
      }
    }
  } else if (value_end != "") {
    code = code + value_end;
  }

  code = code + ")";

  return [code, Order.ATOMIC];
};

forBlock["for_block"] = function (block, generator) {
  var variable_variable = generator.getVariableName(
    block.getFieldValue("variable"),
    Blockly.Variables.NAME_TYPE
  );
  var value_value = generator.valueToCode(block, "value", Order.ATOMIC);
  var statements_statement = generator.statementToCode(block, "statement");
  var code =
    "for " +
    variable_variable +
    " in " +
    value_value +
    " :\n" +
    statements_statement;
  return code;
};

forBlock["list_block"] = function (block, generator) {
  var text_input = block.getFieldValue("input");
  var code = "[" + text_input + "]";
  return [code, Order.ATOMIC];
};

forBlock["list_append_block"] = function (block, generator) {
  var value_value = generator.valueToCode(block, "value", Order.ATOMIC);
  var value_list = generator.valueToCode(block, "list", Order.ATOMIC);
  var code = value_list + ".append(" + value_value + ")\n";
  return code;
};

forBlock["list_remove_block"] = function (block, generator) {
  var value_value = generator.valueToCode(block, "value", Order.ATOMIC);
  var value_list = generator.valueToCode(block, "list", Order.ATOMIC);
  var code = value_list + ".remove(" + value_value + ")\n";
  return code;
};

forBlock["list_index_get_block"] = function (block, generator) {
  var number_index = block.getFieldValue("index");
  var value_input = generator.valueToCode(block, "input", Order.ATOMIC);
  var code = value_input + "[" + number_index + "]";
  return [code, Order.ATOMIC];
};

forBlock["list_index_set_block"] = function (block, generator) {
  var number_index = block.getFieldValue("index");
  var value_input = generator.valueToCode(block, "input", Order.ATOMIC);
  var text_value = block.getFieldValue("value");
  // TODO: Assemble python into code variable.
  var code = value_input + "[" + number_index + "] = " + text_value + "\n";
  return code;
};

forBlock["int_str_conv_block"] = function (block, generator) {
  var value_input = block.getFieldValue("number");
  var code = "str(" + value_input + ")";
  return [code, Order.ATOMIC];
};

forBlock["time_sleep"] = function (block, generator) {
  if (!generator.definitions_["import_time"]) {
    generator.definitions_["import_time"] = "import time";
  }
  var number_time = block.getFieldValue("time");
  var code = "time.sleep(" + number_time + ")\n";
  return code;
};

forBlock["variables_get"] = function (block, generator) {
  const code = generator.getVariableName(block.getFieldValue("VAR"));
  return [code, Order.ATOMIC];
};

forBlock["variables_set"] = function (block, generator) {
  const argument0 = generator.valueToCode(block, "VALUE", Order.NONE) || "0";
  const varName = generator.getVariableName(block.getFieldValue("VAR"));
  return varName + " = " + argument0 + "\n";
};

forBlock["pin_state"] = function (block, generator) {
  if (!generator.definitions_["import_machine"]) {
    generator.definitions_["import_machine"] = "import machine";
  }
  var variable_pin_variable = generator.getVariableName(
    block.getFieldValue("pin_variable"),
    Blockly.Variables.NAME_TYPE
  );
  var dropdown_pin_states = block.getFieldValue("pin_states");
  var code = `${variable_pin_variable}.${dropdown_pin_states}()\n`;
  return code;
};

forBlock["pin_mode"] = function (block, generator) {
  if (!generator.definitions_["import_machine"]) {
    generator.definitions_["import_machine"] = "import machine";
  }

  var number_pin_number = block.getFieldValue("pin_number");
  var variable_pinvariable = generator.getVariableName(
    block.getFieldValue("pinVariable"),
    Blockly.Variables.NAME_TYPE
  );
  var dropdown_pinmode = block.getFieldValue("pinMode");

  var code = `${variable_pinvariable} = machine.Pin(${number_pin_number},machine.Pin.${dropdown_pinmode})\n`;
  return code;
};

forBlock["pin_value"] = function (block, generator) {
  if (!generator.definitions_["import_machine"]) {
    generator.definitions_["import_machine"] = "import machine";
  }

  var variable_pin_variable = generator.getVariableName(
    block.getFieldValue("pin_variable"),
    Blockly.Variables.NAME_TYPE
  );
  var dropdown_pin_values = block.getFieldValue("pin_values");
  var code = `${variable_pin_variable}.value(${dropdown_pin_values})\n`;
  return code;
};

forBlock["create_adc"] = function (block, generator) {
  if (!generator.definitions_["import_machine"]) {
    generator.definitions_["import_machine"] = "import machine";
  }
  var variable_pin_variable = generator.getVariableName(
    block.getFieldValue("pin_variable"),
    Blockly.Variables.NAME_TYPE
  );
  var variable_adc_variable = generator.getVariableName(
    block.getFieldValue("adc_variable"),
    Blockly.Variables.NAME_TYPE
  );
  var code = `${variable_adc_variable} = machine.ADC(${variable_pin_variable})\n`;
  return code;
};

forBlock["read_adc"] = function (block, generator) {
  if (!generator.definitions_["import_machine"]) {
    generator.definitions_["import_machine"] = "import machine";
  }
  var variable_adc_variable = generator.getVariableName(
    block.getFieldValue("adc_variable"),
    Blockly.Variables.NAME_TYPE
  );
  var value_adc_value = generator.valueToCode(block, "adc_value", Order.ATOMIC);
  var code = `${value_adc_value} = ${variable_adc_variable}.read_u16()\n`;
  return code;
};

forBlock["read_adc"] = function (block, generator) {
  if (!generator.definitions_["import_machine"]) {
    generator.definitions_["import_machine"] = "import machine";
  }
  var variable_adc = generator.getVariableName(
    block.getFieldValue("ADC"),
    Blockly.Variables.NAME_TYPE
  );
  var variable_var = generator.getVariableName(
    block.getFieldValue("Var"),
    Blockly.Variables.NAME_TYPE
  );
  var code = `${variable_var} = ${variable_adc}.read_u16()\n`;
  return code;
};

forBlock["read_micro_volt"] = function (block, generator) {
  if (!generator.definitions_["import_machine"]) {
    generator.definitions_["import_machine"] = "import machine";
  }
  var variable_adc = generator.getVariableName(
    block.getFieldValue("ADC"),
    Blockly.Variables.NAME_TYPE
  );
  var variable_var = generator.getVariableName(
    block.getFieldValue("Var"),
    Blockly.Variables.NAME_TYPE
  );
  var code = `${variable_var} = ${variable_adc}.read_uv()\n`;
  return code;
};
