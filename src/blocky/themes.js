import Blockly from 'blockly';

const categoryStyles = {
    'Input_Output_category': {
       'colour': '#4C97FF'
    },
 }

export const theme = Blockly.Theme.defineTheme('mytheme', {
    'base': Blockly.Themes.Classic,
    'categoryStyles': categoryStyles,
});