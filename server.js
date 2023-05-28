import {ApolloServer, gql} from "apollo-server";

//typedef, schema 설정
const typeDefs = gql`
  # 필수타입 : Query
  type Query {
    text: String
  }
`;

const server = new ApolloServer({typeDefs});
server.listen().then(({url}) => {
  console.log(`Running on ${url}`);
});
