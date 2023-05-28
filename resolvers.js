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
  },
};

export {resolvers};
