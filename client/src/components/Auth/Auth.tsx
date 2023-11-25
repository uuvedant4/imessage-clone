import { Button, Center, Image, Input, Stack, Text } from "@chakra-ui/react";
import { Session } from "next-auth";
import { signIn } from "next-auth/react";
import { useState } from "react";

// mutations are used when we need to create or modify values.
// query is to get the data.

interface IAuthProps {
  session: Session | null;
  reloadSession: () => void;
}

const Auth: React.FunctionComponent<IAuthProps> = ({
  session,
  reloadSession,
}) => {
  const [username, setUsername] = useState("");

  const onSubmit = async () => {
    try {
    } catch (error) {
      console.log("onSubmit error", error);
    }
  };

  return (
    <Center height="100vh">
      <Stack spacing={8} align="center">
        {session ? (
          <>
            <Text fontSize="3xl">Create a username</Text>
            <Input
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter a username"
              value={username}
            />
            <Button width="100%" onClick={onSubmit}>
              Save
            </Button>
          </>
        ) : (
          <>
            <Text fontSize="3xl">iMessage</Text>
            <Button
              leftIcon={<Image height="20px" src="/images/googlelogo.png" />}
              onClick={() => signIn("google")}
            >
              Continue with Google
            </Button>
          </>
        )}
      </Stack>
    </Center>
  );
};

export default Auth;
