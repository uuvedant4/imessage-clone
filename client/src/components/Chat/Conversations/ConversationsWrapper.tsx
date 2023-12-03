import { Box } from "@chakra-ui/react";
import { Session } from "next-auth";
import ConversationList from "./ConversationList";

interface ConversationsWrapperProps {
  session: Session;
}

const ConversationsWrapper: React.FC<ConversationsWrapperProps> = ({
  session,
}) => {
  return (
    <Box py={6} px={3} bg="whiteAlpha.50" width={{ base: "100%", md: "400px" }}>
      {/* Skeleton Loader */}
      <ConversationList session={session} />
    </Box>
  );
};
export default ConversationsWrapper;
