import {themeVars} from '../theme/global2.css';
import {createGlobalCodeImageTheme} from '../tokens/createCodeImageTheme';
import {darkGrayScale} from './dark-theme.css';

createGlobalCodeImageTheme('light', {
  primary: '#f55d00',
  background: themeVars.backgroundColor.gray['100'],
  baseText: themeVars.textColor.gray['700'],
  descriptionTextColor: themeVars.backgroundColor.gray['700'],
  secondary: themeVars.backgroundColor.gray['200'],
  divider: themeVars.backgroundColor.gray['300'],

  panel: {
    background: themeVars.backgroundColor.white,
    textColor: themeVars.backgroundColor.black,
    textColorAlt: '#666666',
  },

  input: {
    backgroundColor: '#f3f3f3',
    borderColor: 'transparent',
    textColor: '#333333',
    labelTextColor: themeVars.backgroundColor.gray['800'],
    labelTextHintColor: themeVars.backgroundColor.gray['700'],
    accentColor: themeVars.backgroundColor.white,
  },

  button: {
    base: {
      backgroundColor: themeVars.backgroundColor.gray['300'],
      activeColor: themeVars.backgroundColor.gray['500'],
      hoverColor: themeVars.backgroundColor.gray['400'],
      textColor: themeVars.backgroundColor.gray['800'],
    },
    primaryAlt: {
      backgroundColor: `hsla(23, 100%, 50%, 0.15)`,
      hoverColor: `hsla(23, 100%, 40%, 0.15)`,
      textColor: '#f55d00',
    },
    primary: {
      backgroundColor: '#f55d00',
      activeColor: '#cc4d00',
      hoverColor: '#e05500',
      textColor: themeVars.backgroundColor.white,
    },
    danger: {
      backgroundColor: themeVars.backgroundColor.red['500'],
      activeColor: themeVars.backgroundColor.red['700'],
      hoverColor: themeVars.backgroundColor.red['600'],
      textColor: themeVars.backgroundColor.white,
    },
  },

  listBox: {
    panelBackground: themeVars.backgroundColor.white,
    activeBackgroundColor: '#f55d00',
    hoverBackgroundColor: themeVars.backgroundColor.gray['100'],
    textColor: themeVars.backgroundColor.gray['800'],
    activeTextColor: themeVars.backgroundColor.white,
  },

  dialog: {
    overlayBackgroundColor: 'rgba(0,0,0,.4)',
    titleTextColor: themeVars.backgroundColor.gray['800'],
    titleBorderColor: themeVars.borderColor.default,
    panelShadow: themeVars.boxShadow.lg,
    panelBackgroundColor: themeVars.backgroundColor.white,
    panelTextColor: themeVars.backgroundColor.gray['800'],
  },

  scrollBar: {
    backgroundColor: themeVars.backgroundColor.gray['400'],
    hoverBackgroundColor: themeVars.backgroundColor.gray['500'],
  },

  snackbar: {
    backgroundColor: darkGrayScale.white,
    textColor: darkGrayScale.gray6,
  },

  bottomBar: {
    backgroundColor: themeVars.backgroundColor.white,
    textColor: themeVars.textColor.gray['700'],
  },
});
