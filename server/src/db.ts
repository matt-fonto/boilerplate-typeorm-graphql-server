import { DataSource } from "typeorm";
import { Users } from "./Entities/Users";

// Set up the connection to the database
const connectDB = new DataSource({
  type: "mysql",
  host: "localhost",
  username: "root",
  password: "password",
  database: "ts-graphql-crud",
  synchronize: false,
  logging: false,
  entities: [Users],
});

export default connectDB;
