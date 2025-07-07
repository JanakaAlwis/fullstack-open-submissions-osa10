import { Text as NativeText, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  default: {
    fontSize: theme.fontSizes.body,
    color: '#000',
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },
});

const Text = ({ style, children, ...props }) => {
  return (
    <NativeText style={[styles.default, style]} {...props}>
      {children}
    </NativeText>
  );
};

export default Text;
