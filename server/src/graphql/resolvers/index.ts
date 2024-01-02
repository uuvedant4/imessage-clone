import userResolvers from "../resolvers/user";
import merge from "lodash.merge";
import conversationResolvers from "../resolvers/conversation";

const resolvers = merge({}, userResolvers, conversationResolvers);

export default resolvers;
