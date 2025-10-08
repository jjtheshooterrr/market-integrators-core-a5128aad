-- Check ordering fields
SELECT graphql.resolve($$
{
  __type(name: "mi_home_metricsOrderBy") {
    inputFields {
      name
    }
  }
}
$$);