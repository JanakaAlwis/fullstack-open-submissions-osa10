import { Routes, Route } from 'react-router-native';
import RepositoryList from '../pages/RepositoryList';
import SingleRepository from '../pages/SingleRepository';
// ... other imports

const MainRoutes = () => (
  <Routes>
    <Route path="/" element={<RepositoryList />} />
    <Route path="/repository/:id" element={<SingleRepository />} />
    {/* other routes */}
  </Routes>
);

export default MainRoutes;
