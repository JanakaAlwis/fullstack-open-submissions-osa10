import React from 'react';
import { FlatList, View, Button, Alert, StyleSheet } from 'react-native';
import { useQuery, useMutation } from '@apollo/client';
import { GET_AUTHORIZED_USER } from '../graphql/queries';
import { DELETE_REVIEW } from '../graphql/mutations';
import { useNavigate } from 'react-router-native';
import ReviewItem from '../components/ReviewItem';

const MyReviews = () => {
  const { data, loading, refetch } = useQuery(GET_AUTHORIZED_USER, { variables: { includeReviews: true } });
  const [deleteReview] = useMutation(DELETE_REVIEW);
  const navigate = useNavigate();

  if (loading) return null;
  const reviews = data.authorizedUser.reviews.edges.map(e => e.node);

  const handleDelete = (id) => {
    Alert.alert('Delete review', 'Are you sure you want to delete this review?', [
      { text: 'Cancel' },
      {
        text: 'Delete',
        style: 'destructive',
        onPress: async () => {
          await deleteReview({ variables: { id } });
          refetch();
        },
      },
    ]);
  };

  return (
    <FlatList
      data={reviews}
      keyExtractor={r => r.id}
      renderItem={({ item }) => (
        <View style={styles.reviewContainer}>
          <ReviewItem review={item} />
          <View style={styles.buttons}>
            <Button title="View repository" onPress={() => navigate(`/repository/${item.repository.id}`)} />
            <Button title="Delete review" onPress={() => handleDelete(item.id)} color="red" />
          </View>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  reviewContainer: { backgroundColor: '#fff', marginBottom: 8 },
  buttons: { flexDirection: 'row', justifyContent: 'space-around', padding: 8 },
});

export default MyReviews;
