import { GraphQLSchema, GraphQLObjectType } from "graphql";
import { GET_ALL_USERS } from "./Queries/User";
import { CREATE_USER } from "./Mutations/User";

// Creating the root query
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    // Get all users
    getAllUsers: GET_ALL_USERS,
  },
});

// Creating the root mutation
const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    // Create a user
    createUser: CREATE_USER,
  },
});

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
