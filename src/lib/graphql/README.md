# GraphQL with Apollo Client & Supabase pg_graphql

## Setup Complete ✅

GraphQL is now enabled in your project using:
- **pg_graphql** extension in Supabase
- **Apollo Client** for React integration

## Usage Example

### 1. Define your GraphQL queries in `queries.example.ts`

```typescript
import { gql } from '@apollo/client';

export const GET_USERS = gql`
  query GetUsers {
    profilesCollection {
      edges {
        node {
          id
          email
          full_name
        }
      }
    }
  }
`;
```

### 2. Use in components with `useQuery` hook

```typescript
import { useQuery } from '@apollo/client';
import { GET_USERS } from '@/lib/graphql/queries.example';

function UsersList() {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const users = data?.profilesCollection?.edges.map(edge => edge.node) || [];

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.full_name}</li>
      ))}
    </ul>
  );
}
```

### 3. Nested Queries (The Power of GraphQL!)

```typescript
export const GET_USER_WITH_POSTS = gql`
  query GetUserWithPosts($userId: UUID!) {
    profilesCollection(filter: { id: { eq: $userId } }) {
      edges {
        node {
          id
          full_name
          postsCollection {
            edges {
              node {
                id
                title
                content
                commentsCollection {
                  edges {
                    node {
                      id
                      text
                      author {
                        full_name
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
```

## Important Notes

- Table names in GraphQL use the format: `{table_name}Collection`
- All queries return `edges` and `node` structure (GraphQL Relay pattern)
- Use `filter` for WHERE clauses
- Use `first`, `last`, `after`, `before` for pagination
- Authentication is automatically handled via Supabase anon key

## GraphQL Playground

Test queries at: https://wtjuzhjddqekvqmjbsdn.supabase.co/graphql/v1

## More Resources

- [Supabase GraphQL docs](https://supabase.com/docs/guides/graphql)
- [Apollo Client docs](https://www.apollographql.com/docs/react/)
