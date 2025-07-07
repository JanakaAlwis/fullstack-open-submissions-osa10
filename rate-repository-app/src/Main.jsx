import { View, StyleSheet } from 'react-native';
import { Route, Routes } from 'react-router-native';

import AppBar from '../components/AppBar';
import RepositoryList from '../components/RepositoryList';
import SignIn from '../components/SignIn';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e1e4e8',
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </View>
  );
};

export default Main;
