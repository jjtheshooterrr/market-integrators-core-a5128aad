-- Check Query type fields
SELECT graphql.resolve($$
{
  __type(name: "Query") {
    fields {
      name
      type {
        name
        kind
      }
    }
  }
}
$$);