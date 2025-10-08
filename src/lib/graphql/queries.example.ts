import { gql } from '@apollo/client';

// Example GraphQL queries for Supabase pg_graphql
// Replace 'your_table_name' with your actual table names

// Simple query example
export const GET_ITEMS = gql`
  query GetItems {
    your_table_nameCollection {
      edges {
        node {
          id
          created_at
          # Add your fields here
        }
      }
    }
  }
`;

// Nested query example with filtering
export const GET_ITEM_WITH_RELATIONS = gql`
  query GetItemWithRelations($id: UUID!) {
    your_table_nameCollection(filter: { id: { eq: $id } }) {
      edges {
        node {
          id
          created_at
          # Add your fields here
          
          # Example nested relation
          # related_table {
          #   id
          #   name
          # }
        }
      }
    }
  }
`;

// Paginated query example
export const GET_ITEMS_PAGINATED = gql`
  query GetItemsPaginated($first: Int!, $after: Cursor) {
    your_table_nameCollection(first: $first, after: $after) {
      edges {
        node {
          id
          created_at
          # Add your fields here
        }
        cursor
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`;
