export const schema = `
  type Name {
    firstName: String!
    lastName: String!
  }

  type Query {
    splitName(fullName: String!): Name
    combineName(firstName: String!, lastName: String!): String!
  }
`;