import express from "express"; // Import express
import { graphqlHTTP } from "express-graphql"; // Import graphqlHTTP which is a middleware for express to handle graphql requests
import cors from "cors"; // Which will allow our server to accept requests from different origins, in our case from our react app
import { schema } from "./Schema/index"; // Import the schema
import connectDB from "./db";

// Create a main function to be able to use async/await
const main = async () => {
  const app = express(); // Create an express app

  // to allow us to connect the server to the client
  app.use(cors()); // Use cors middleware
  app.use(express.json()); // Use express middleware to parse json

  // Connect to database
  try {
    await connectDB.initialize();
    console.log("Database connected");
  } catch (error) {
    console.log("Database connection error", error);
  }

  // Create a graphql endpoint
  app.use(
    "/graphql",
    graphqlHTTP({
      schema,
      graphiql: true,
    })
  );

  app.listen(3001, () => {
    console.log(`Server is running on port 3001`);
  });
};

main().catch((err) => {
  console.error(err);
});
