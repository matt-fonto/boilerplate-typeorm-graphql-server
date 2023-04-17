import { GraphQLList } from "graphql";
import { UserType } from "../TypeDefs/User";
import { Users } from "../../Entities/Users";

export const GET_ALL_USERS = {
  // returning a list of users of type we created
  type: new GraphQLList(UserType),
  resolve() {
    // return all users
    // TypeORM gives us methods to interact with MySQL database
    return Users.find();
  },
};
