import { useQuery } from '@apollo/client';
import { GET_REPOSITORY_WITH_REVIEWS } from '../graphql/queries';

const useRepositoryReviews = (repositoryId, first = 4) => {
  const { data, loading, fetchMore, ...result } = useQuery(GET_REPOSITORY_WITH_REVIEWS, {
    variables: { id: repositoryId, first },
    fetchPolicy: 'cache-and-network',
  });

  const handleFetchMore = () => {
    const canFetchMore =
      !loading && data?.repository?.reviews?.pageInfo?.hasNextPage;

    if (!canFetchMore) return;

    fetchMore({
      variables: {
        after: data.repository.reviews.pageInfo.endCursor,
        id: repositoryId,
        first,
      },
    });
  };

  return {
    repository: data?.repository,
    fetchMore: handleFetchMore,
    loading,
    ...result,
  };
};

export default useRepositoryReviews;
