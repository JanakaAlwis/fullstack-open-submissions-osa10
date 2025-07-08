import React from 'react';
import { useParams } from 'react-router-native';
import { useQuery } from '@apollo/client';
import { FlatList, Text, View, StyleSheet } from 'react-native';
import { GET_REPOSITORY } from '../graphql/queries';
import RepositoryItem from '../components/RepositoryItem';

const SingleRepository = () => {
  const { id } = useParams();
  const { data, loading, error } = useQuery(GET_REPOSITORY, {
    variables: { id },
    fetchPolicy: 'cache-and-network',
  });

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  const repo = data.repository;

  return (
    <View style={styles.container}>
      <RepositoryItem repository={repo} showGithubLink />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default SingleRepository;
