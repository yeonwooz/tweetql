import axios from "axios";

const getTweets = async () => {
  const res = await axios.get("http://localhost:3000/tweets");
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
};

export {resolvers};
