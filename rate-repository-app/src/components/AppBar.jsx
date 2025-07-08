import React from 'react';
import { View, ScrollView, Pressable, StyleSheet } from 'react-native';
import { Link, useNavigate } from 'react-router-native';
import { useApolloClient, useQuery } from '@apollo/client';
import { GET_AUTHORIZED_USER } from '../graphql/queries';
import AuthStorage from '../utils/authStorage';
import Text from './Text';

const AppBar = () => {
  const { data } = useQuery(GET_AUTHORIZED_USER);
  const client = useApolloClient();
  const navigate = useNavigate();
  const storage = new AuthStorage();

  const onSignOut = async () => {
    await storage.removeAccessToken();
    await client.resetStore();
    navigate('/');
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Pressable style={styles.tab}><Link to="/" underlayColor="#fff"><Text style={styles.text}>Repositories</Text></Link></Pressable>
        
        {data?.authorizedUser ? (
          <>
            <Pressable style={styles.tab}><Link to="/create-review"><Text style={styles.text}>Create a review</Text></Link></Pressable>
            <Pressable style={styles.tab}><Link to="/my-reviews"><Text style={styles.text}>My reviews</Text></Link></Pressable>
            <Pressable onPress={onSignOut} style={styles.tab}><Text style={styles.text}>Sign out</Text></Pressable>
          </>
        ) : (
          <>
            <Pressable style={styles.tab}><Link to="/signin"><Text style={styles.text}>Sign in</Text></Link></Pressable>
            <Pressable style={styles.tab}><Link to="/sign-up"><Text style={styles.text}>Sign up</Text></Link></Pressable>
          </>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { paddingTop: 30, backgroundColor: '#24292e', paddingBottom: 10 },
  tab: { marginHorizontal: 10 },
  text: { color: 'white', fontSize: 16 },
});

export default AppBar;
