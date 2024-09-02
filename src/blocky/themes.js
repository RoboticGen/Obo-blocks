import Blockly from "blockly";
import { colour } from "blockly/blocks";

const categoryStyles = {
  Input_Output_category: {
    colour: "#4C97FF",
    "css-icon": "fa fa-file",
  },
  list_operations_category: {
    colour: "#CF63CF",
    "css-icon": "fa fa-file",
  },
  operators_category: {
    colour: "#59C059",
    "css-icon": "fa fa-file",
  },
  control_category: {
    colour: "#FFBF00",
    "css-icon": "fa fa-file",
  },
  variable_category: {
    colour: "#FF8C1A",
    "css-icon": "fa fa-file",
  },
  procedure_category: {
    colour: "#FF6680",
    "css-icon": "fa fa-file",
  },
  time_category:
  {
   colour:"#8c52ff"
  },
  micropython_category:
  {
   colour:"#00ae7b"
  },
  pin_category:
  {
   colour:"#005d8f"
  },
  adc_category:
  {
   colour:"#ff4300"
  },
};

export const theme = Blockly.Theme.defineTheme("mytheme", {
  base: Blockly.Themes.Classic,
  categoryStyles: categoryStyles,
});
