import React from 'react';
import { View, Button, StyleSheet, Alert } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useMutation } from '@apollo/client';
import { SIGN_UP } from '../graphql/mutations';
import useSignIn from '../hooks/useSignIn';
import TextInput from '../components/FormikTextInput';
import { useNavigate } from 'react-router-native';

const validationSchema = Yup.object().shape({
  username: Yup.string().required('Username required').min(5).max(30),
  password: Yup.string().required('Password required').min(5).max(50),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Password confirm required'),
});

const SignUp = () => {
  const [createUser] = useMutation(SIGN_UP);
  const [signIn] = useSignIn();
  const navigate = useNavigate();

  const onSubmit = async ({ username, password }) => {
    try {
      await createUser({ variables: { user: { username, password } } });
      await signIn({ username, password });
      navigate('/');
    } catch (e) {
      console.log(e);
      Alert.alert('Sign up failed', e.message);
    }
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ username: '', password: '', passwordConfirm: '' }}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => (
          <>
            <TextInput name="username" placeholder="Username" />
            <TextInput name="password" placeholder="Password" secureTextEntry />
            <TextInput name="passwordConfirm" placeholder="Confirm password" secureTextEntry />
            <Button onPress={handleSubmit} title="Sign up" />
          </>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({ container: { padding: 16 } });

export default SignUp;
