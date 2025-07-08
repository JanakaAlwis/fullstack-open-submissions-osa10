import React from 'react';
import { View, StyleSheet, Pressable, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { Link, useNavigate } from 'react-router-native';
import { useApolloClient, useQuery, gql } from '@apollo/client';
import AuthStorage from '../utils/authStorage';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#24292e',
    paddingBottom: 10,
    paddingHorizontal: 10,
  },
  tab: {
    marginRight: 15,
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
});

const ME = gql`
  query Me {
    me {
      id
      username
    }
  }
`;

const AppBar = () => {
  const { data } = useQuery(ME);
  const apolloClient = useApolloClient();
  const navigate = useNavigate();
  const authStorage = new AuthStorage();

  const handleSignOut = async () => {
    await authStorage.removeAccessToken();
    await apolloClient.resetStore();
    navigate('/');
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Pressable style={styles.tab}>
          <Link to="/">
            <Text style={styles.text}>Repositories</Text>
          </Link>
        </Pressable>

        {!data?.me ? (
          <Pressable style={styles.tab}>
            <Link to="/signin">
              <Text style={styles.text}>Sign in</Text>
            </Link>
          </Pressable>
        ) : (
          <Pressable onPress={handleSignOut} style={styles.tab}>
            <Text style={styles.text}>Sign out</Text>
          </Pressable>
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
