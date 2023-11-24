import type { NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";

const Home: NextPage = () => {
  const { data, status } = useSession();
  return (
    <div>
      {data?.user ? (
        <button onClick={() => signOut()}>Sign out</button>
      ) : (
        <button onClick={() => signIn("google")}>Sign in</button>
      )}
    </div>
  );
};

export default Home;
