import React from 'react';
import { useNavigate } from 'react-router-native';
import useSignIn from '../hooks/useSignIn';
import SignInForm from './SignInForm'; 
import { View, Alert } from 'react-native';

const SignIn = () => {
  const [signIn] = useSignIn();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      const { authenticate } = await signIn({ username, password });

      if (authenticate?.accessToken) {
        navigate('/');
      }
    } catch (e) {
      console.error(e);
      Alert.alert('Sign in failed', 'Check username or password');
    }
  };

  return (
    <View>
      <SignInForm onSubmit={onSubmit} />
    </View>
  );
};

export default SignIn;
