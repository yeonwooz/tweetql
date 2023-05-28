import {ApolloServer, gql} from "apollo-server";

//typedef, schema 설정
// TODO 재귀 타입 선언 되는지 확인필요

const typeDefs = gql`
  type User {
    id: ID
    username: String
    childUser: User   
  }
  type Tweet {
    # Scalar필드를 가진 타입을 정의해주어야 한다(최소단위)
    id: ID
    text: String
    author: User
  }

  # 필수타입 : Query
  type Query {
    allTweets: [Tweet]
  }
`;

const server = new ApolloServer({typeDefs});
server.listen().then(({url}) => {
  console.log(`Running on ${url}`);
});
