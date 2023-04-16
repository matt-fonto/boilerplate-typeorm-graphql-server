import { GraphQLList } from "graphql";
import { UserType } from "../TypeDefs/User";

export const GET_ALL_USERS = {
  // returning a list of users of type we created
  type: new GraphQLList(UserType),
  resolve() {
    // return all users
  },
};
