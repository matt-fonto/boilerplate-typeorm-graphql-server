import { Users } from "./Entities/Users";

module.exports = {
  type: "mysql",
  host: "localhost",
  username: "root",
  password: "password",
  database: "ts-graphql-crud",
  synchronize: false,
  logging: true,
  entities: [Users],
};
