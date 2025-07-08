import React from 'react';
import { View, Text, Button, Linking, StyleSheet } from 'react-native';

const RepositoryItem = ({ repository, showGithubLink }) => (
  <View style={styles.container}>
    <Text style={styles.fullName}>{repository.fullName}</Text>
    <Text>{repository.description}</Text>
    <Text>Language: {repository.language}</Text>
    <Text>Stars: {repository.stargazersCount}</Text>
    <Text>Forks: {repository.forksCount}</Text>
    <Text>Reviews: {repository.reviewCount}</Text>
    <Text>Rating: {repository.ratingAverage}</Text>

    {showGithubLink && (
      <Button
        title="Open in GitHub"
        onPress={() => Linking.openURL(repository.url)}
      />
    )}
  </View>
);

const styles = StyleSheet.create({
  container: { padding: 16, backgroundColor: '#fff', marginBottom: 8 },
  fullName: { fontWeight: 'bold', fontSize: 18 },
});

export default RepositoryItem;
