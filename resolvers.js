import axios from "axios";
const TWEETS_DB = "http://localhost:3000/tweets";
const USERS_DB = "http://localhost:3000/users";

const getUsers = async () => {
  const res = await axios.get(USERS_DB);
  return res.data;
};

const getTweets = async () => {
  const res = await axios.get(TWEETS_DB);
  return res.data;
};

const resolvers = {
  Query: {
    async allUsers() {
      return await getUsers();
    },
    async allTweets() {
      return await getTweets();
    },
    async tweet(root, args) {
      // args는 유저가 보낸 패러미터
      console.log(root, args);
      const {id} = args;
      const tweets = await getTweets();
      return tweets.find(tweet => tweet.id === id);
    },
  },
  Mutation: {
    postTweet(_, {text, userId}) {
      const newTweet = {
        id: Date.now(),
        text,
      };
      axios.post(TWEETS_DB, newTweet);
      return newTweet;
    },

    async deleteTweet(_, {id}) {
      try {
        await axios.delete(`${TWEETS_DB}/${id}`);
        return true;
      } catch (error) {
        return false;
      }
    },
  },
  User: {
    fullName(root) {
      console.log("호출자 객체", root)
      return "고정된 풀네임"   // DB 데이터 상에 필드가 존재해도 무시된다
    }
  }
};

export {resolvers};
