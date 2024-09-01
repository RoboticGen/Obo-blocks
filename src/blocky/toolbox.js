/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/*
This toolbox contains nearly every single built-in block that Blockly offers,
in addition to the custom block 'add_text' this sample app adds.
You probably don't need every single block, and should consider either rewriting
your toolbox from scratch, or carefully choosing whether you need each block
listed here.
*/

export const toolbox = {
  kind: "categoryToolbox",
  contents: [
    {
      kind: "category",
      name: "Input/Output",
      categorystyle: "Input_Output_category",
      contents: [
        {
          kind: "block",
          type: "print_block",
        },
        // {
        //   'kind': 'block',
        //   'type': 'input_block',
        // },
      ],
    },
    {
      kind: "category",
      name: "List Operations",
      categorystyle: "list_operations_category",
      contents: [
        {
          kind: "block",
          type: "list_block",
        },
        {
          kind: "block",
          type: "list_append_block",
        },
        {
          kind: "block",
          type: "list_remove_block",
        },
        {
          kind: "block",
          type: "list_index_get_block",
        },
        {
          kind: "block",
          type: "list_index_set_block",
        },
      ],
    },
    {
      kind: "category",
      name: "Control",
      categorystyle: "control_category",
      contents: [
        {
          kind: "block",
          type: "if_block",
        },
        {
          kind: "block",
          type: "if_else_block",
        },
        {
          kind: "block",
          type: "while_block",
        },
        {
          kind: "block",
          type: "for_block",
        },
      ],
    },
    {
      kind: "category",
      name: "Operators",
      categorystyle: "operators_category",
      contents: [
        {
          kind: "block",
          type: "string_block",
        },
        {
          kind: "block",
          type: "number_block",
        },
        {
          kind: "block",
          type: "add_block",
        },
        {
          kind: "block",
          type: "subtract_block",
        },
        {
          kind: "block",
          type: "multiply_block",
        },
        {
          kind: "block",
          type: "division_block",
        },
        {
          kind: "block",
          type: "modulo_block",
        },
        {
          kind: "block",
          type: "power_block",
        },
        {
          kind: "block",
          type: "equal_block",
        },
        {
          kind: "block",
          type: "not_equal_block",
        },
        {
          kind: "block",
          type: "greater_than_block",
        },
        {
          kind: "block",
          type: "greater_than_equal_block",
        },
        {
          kind: "block",
          type: "less_than_block",
        },
        {
          kind: "block",
          type: "less_than_equal_block",
        },
        {
          kind: "block",
          type: "true_block",
        },
        {
          kind: "block",
          type: "false_block",
        },
        {
          kind: "block",
          type: "int_str_conv_block",
        },
      ],
    },
    {
      kind: "sep",
    },
    {
      kind: "category",
      name: "Variables",
      categorystyle: "variable_category",
      custom: "VARIABLE",
    },
    {
      kind: "category",
      name: "Functions",
      categorystyle: "procedure_category",
      custom: "PROCEDURE",
    },
    {
      kind: "sep",
    },

    {
      kind: "category",
      name: "Sleep",
      categorystyle: "operators_category",
      contents: [
        {
          kind: "block",
          type: "time_sleep",
        },
      ],
    },
    {
      kind: "sep",
    },

    {
      kind: "category",
      name: "Micropython",
      categorystyle: "logic_category",
      contents: [
        {
          kind: "button",
          text: "Create pin...",
          callbackKey: "CREATE_PIN_VARIABLE",
        },
      ],
    },
    {
      kind: "category",
      name: "Pin",
      categorystyle: "logic_category",
      custom: "PIN",
    },
  ],
};
