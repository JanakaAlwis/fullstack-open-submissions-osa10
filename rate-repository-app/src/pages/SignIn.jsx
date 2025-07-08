import React from 'react';
import useSignIn from '../hooks/useSignIn';
import AuthStorage from '../utils/authStorage';
import SignInForm from '../components/SignInForm';

const SignIn = () => {
  const [signIn] = useSignIn();
  const authStorage = new AuthStorage();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      const { authenticate } = await signIn({ username, password });
      console.log(authenticate);

      if (authenticate.accessToken) {
        await authStorage.setAccessToken(authenticate.accessToken);
        // Optionally navigate somewhere after sign-in
      }
    } catch (e) {
      console.error(e);
    }
  };

  return <SignInForm onSubmit={onSubmit} />;
};

export default SignIn;
