import { useParams } from 'react-router-native';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORY } from '../graphql/queries';
import RepositoryItem from './RepositoryItem';
import * as Linking from 'expo-linking';
import { Button } from 'react-native';

const SingleRepository = () => {
  const { id } = useParams();
  const { data, loading } = useQuery(GET_REPOSITORY, {
    variables: { id },
    fetchPolicy: 'cache-and-network',
  });

  if (loading) return <Text>Loading...</Text>;
  const repo = data.repository;

  return (
    <View>
      <RepositoryItem item={repo} singleView />
      <Button title="Open in GitHub" onPress={() => Linking.openURL(repo.url)} />
    </View>
  );
};
