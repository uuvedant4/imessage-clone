import { Box } from "@chakra-ui/react";
import type { NextPage, NextPageContext } from "next";
import { getSession, useSession } from "next-auth/react";
import Chat from "../components/Chat/Chat";
import Auth from "../components/Auth/Auth";

const Home: NextPage = () => {
  const { data: session } = useSession();

  const reloadSession = () => {};

  return (
    <Box>
      {session?.user?.username ? (
        <Chat />
      ) : (
        <Auth reloadSession={reloadSession} session={session} />
      )}
    </Box>
  );
};

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);
  return {
    props: {
      session,
    },
  };
}

export default Home;
