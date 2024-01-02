import { GraphQLContext } from "../../util/types";

const resolvers = {
  Query: {},
  Mutation: {
    createConversation: async (
      _: any,
      args: { participantIds: Array<string> },
      contextValue: GraphQLContext
    ) => {
      console.log("hello", args);
    },
  },
};

export default resolvers;
