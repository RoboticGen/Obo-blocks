import Blockly from 'blockly';

const categoryStyles = {
    'Input_Output_category': {
       'colour': '#4C97FF',
       'css-icon':"fa fa-file"
    },
    'list_operations_category': {
        'colour': '#CF63CF',
        'css-icon':"fa fa-file"
     },
     'Input_Output_category': {
        'colour': '#4C97FF',
        'css-icon':"fa fa-file"
     },
     'Input_Output_category': {
        'colour': '#4C97FF',
        'css-icon':"fa fa-file"
     },
     'Input_Output_category': {
        'colour': '#4C97FF',
        'css-icon':"fa fa-file"
     },
 }

export const theme = Blockly.Theme.defineTheme('mytheme', {
    'base': Blockly.Themes.Classic,
    'categoryStyles': categoryStyles,
});