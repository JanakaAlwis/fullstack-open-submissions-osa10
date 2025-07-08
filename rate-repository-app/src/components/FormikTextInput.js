import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { useField } from 'formik';

const styles = StyleSheet.create({
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
});

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);

  return (
    <TextInput
      style={styles.input}
      value={field.value}
      onChangeText={value => helpers.setValue(value)}
      onBlur={() => helpers.setTouched(true)}
      {...props}
    />
  );
};

export default FormikTextInput;
