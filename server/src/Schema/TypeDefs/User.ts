import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

// Create a UserType in GraphQL which will be used in the schema to define the fields of the user
export const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    username: { type: GraphQLString },
    password: { type: GraphQLString },
  }),
});
