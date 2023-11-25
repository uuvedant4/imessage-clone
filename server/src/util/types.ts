import { PrismaClient } from "@prisma/client";
import { introspectionFromSchema } from "graphql";
import { ISODateString } from "next-auth";

export interface GraphQLContext {
  session: Session | null;
  prisma: PrismaClient;
  // pubsub
}

export interface User {
  id: string;
  username: string;
  email: string;
  emailVerified: boolean;
  image: string;
  name: string;
}

export interface Session {
  user?: User;
  expires: ISODateString;
}

export interface CreateUsernameResponse {
  success?: boolean;
  error?: string;
}
