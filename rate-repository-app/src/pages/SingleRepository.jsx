import React from 'react';
import { useParams } from 'react-router-native';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORY_WITH_REVIEWS } from '../graphql/queries';
import { View, Text, ActivityIndicator, FlatList, StyleSheet } from 'react-native';

const SingleRepository = () => {
  const { id } = useParams();

  const { data, loading, error } = useQuery(GET_REPOSITORY_WITH_REVIEWS, {
    variables: { id, first: 5 }, 
    fetchPolicy: 'cache-and-network',
  });

  if (loading) return <ActivityIndicator size="large" />;
  if (error) return <Text>Error: {error.message}</Text>;

  const repository = data.repository;
  const reviews = repository.reviews.edges;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{repository.fullName}</Text>
      <FlatList
        data={reviews}
        keyExtractor={({ node }) => node.id}
        renderItem={({ item }) => (
          <View style={styles.review}>
            <Text style={styles.rating}>Rating: {item.node.rating}</Text>
            <Text>{item.node.text}</Text>
            <Text>By: {item.node.user.username}</Text>
          </View>
        )}
        ListHeaderComponent={() => (
          <View>
            <Text>Description: {repository.description}</Text>
            <Text>Language: {repository.language}</Text>
            <Text>Stars: {repository.stargazersCount}</Text>
            <Text>Forks: {repository.forksCount}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 8 },
  review: { marginTop: 12, padding: 10, borderWidth: 1, borderColor: '#ddd' },
  rating: { fontWeight: 'bold' },
});

export default SingleRepository;
