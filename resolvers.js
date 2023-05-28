import axios from "axios";
const SERVER_URL = "http://localhost:3000";

const getTweets = async () => {
  const res = await axios.get(`${SERVER_URL}/tweets`);
  return res.data;
};

const resolvers = {
  Query: {
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
    async postTweet(_, {text, userId}) {
      const newTweet = {
        id: Date.now(),
        text,
      };
      axios.post(`${SERVER_URL}/tweets`, newTweet);
      return newTweet;
    },
  },
};

export {resolvers};
