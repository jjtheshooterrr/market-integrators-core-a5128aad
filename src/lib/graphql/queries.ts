import { gql } from '@apollo/client';

export const GET_HOME_METRICS = gql`
  query HomeMetrics {
    mi_home_metricsConnection(orderBy: [{ order_index: AscNullsLast }]) {
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
