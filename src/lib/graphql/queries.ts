import { gql } from '@apollo/client';

export const GET_HOME_METRICS = gql`
  query HomeMetrics {
    miHomeMetricsCollection(orderBy: [{ orderIndex: AscNullsLast }]) {
      edges {
        node {
          id
          label
          value
          suffix
          icon
        }
      }
    }
  }
`;
