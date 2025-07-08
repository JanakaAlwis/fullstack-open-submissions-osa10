import { gql } from '@apollo/client';
import { REVIEW_DETAILS } from './fragments';

export const GET_REPOSITORY_WITH_REVIEWS = gql`
  query GetRepositoryWithReviews($id: ID!, $first: Int, $after: String) {
    repository(id: $id) {
      id
      fullName
      reviews(first: $first, after: $after) {
        totalCount
        pageInfo {
          endCursor
          startCursor
          hasNextPage
        }
        edges {
          node {
            ...ReviewDetails
          }
          cursor
        }
      }
    }
  }
  ${REVIEW_DETAILS}
`;
