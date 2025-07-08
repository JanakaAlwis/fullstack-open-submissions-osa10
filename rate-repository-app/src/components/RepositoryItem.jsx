import React from 'react';
import { View, Text, Button, Linking, StyleSheet, Pressable } from 'react-native';
import { useNavigate } from 'react-router-native';

const RepositoryItem = ({ repository, showGithubLink }) => {
  const navigate = useNavigate();

  const handlePress = () => {
    navigate(`/repository/${repository.id}`);
  };

  return (
    <Pressable onPress={handlePress}>
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
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16, backgroundColor: '#fff', marginBottom: 8 },
  fullName: { fontWeight: 'bold', fontSize: 18 },
});

export default RepositoryItem;
