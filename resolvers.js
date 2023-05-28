const resolvers = {
  Query: {
    tweet() {
      console.log("I'm called");
      return null;
    },
    ping() {
      return "pong";
    },
  },
};

export {resolvers};
