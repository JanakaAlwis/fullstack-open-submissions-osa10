import { Platform } from 'react-native';

const theme = {
  colors: {
    textPrimary: 'white',
    appBarBackground: '#24292e',
  },
  fontSizes: {
    body: 14,
    subheading: 16,  
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
  fonts: {
    main: Platform.select({
      android: 'Roboto',
      ios: 'Arial',
      default: 'System',
    }),
  },
};

export default theme;
