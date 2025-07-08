import { View, StyleSheet } from 'react-native';
import { Route, Routes } from 'react-router-native';

import AppBar from '../components/AppBar';
import RepositoryList from '../components/RepositoryList';
import SignIn from '../components/SignIn';
import CreateReview from './pages/CreateReview';

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
        <Route path="/create-review" element={<CreateReview />} />  {/* <-- add route here */}
      </Routes>
    </View>
  );
};

export default Main;
