import { Text as NativeText, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    color: '#000',
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
