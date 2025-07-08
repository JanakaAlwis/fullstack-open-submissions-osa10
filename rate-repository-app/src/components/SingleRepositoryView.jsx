import React from 'react';
import { FlatList } from 'react-native';
import useRepositoryReviews from '../hooks/useRepositoryReviews';
import ReviewItem from './ReviewItem'; // You must create this component
import RepositoryInfo from './RepositoryInfo'; // Shows basic repo details

const SingleRepositoryView = ({ repositoryId }) => {
  const { repository, fetchMore, loading } = useRepositoryReviews(repositoryId, 4);

  if (!repository) return null;

  const reviewNodes = repository.reviews
    ? repository.reviews.edges.map(edge => edge.node)
    : [];

  return (
    <FlatList
      data={reviewNodes}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={<RepositoryInfo repository={repository} />}
      onEndReached={fetchMore}
      onEndReachedThreshold={0.5}
      refreshing={loading}
    />
  );
};

export default SingleRepositoryView;
