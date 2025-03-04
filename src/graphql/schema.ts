export const schema = `
  type Name {
    firstName: String!
    lastName: String!
  }
type NameLengths {
  firstNameLength: Int!
  lastNameLength: Int!
}
  type Query {
    splitName(fullName: String!): Name
    combineName(firstName: String!, lastName: String!): String!
    countCharacters(input: String!): Int!
    splitNameLengths(fullName: String!): NameLengths!
  }
`;