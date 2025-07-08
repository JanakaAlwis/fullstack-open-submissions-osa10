import { useMutation, gql, useApolloClient } from '@apollo/client';
import AuthStorage from '../utils/authStorage';

const AUTHENTICATE = gql`
  mutation Authenticate($credentials: AuthenticateInput!) {
    authenticate(credentials: $credentials) {
      accessToken
      user {
        id
        username
      }
    }
  }
`;

const useSignIn = () => {
  const [mutate, result] = useMutation(AUTHENTICATE);
  const apolloClient = useApolloClient();
  const authStorage = new AuthStorage();

  const signIn = async ({ username, password }) => {
    const { data } = await mutate({
      variables: {
        credentials: { username, password },
      },
    });

    if (data?.authenticate?.accessToken) {
      await authStorage.setAccessToken(data.authenticate.accessToken);
      await apolloClient.resetStore();
    }

    return data;
  };

  return [signIn, result];
};

export default useSignIn;
