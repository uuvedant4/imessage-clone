import { Flex, Stack, Text } from "@chakra-ui/react";
import { SearchedUser } from "../../../../util/types";
import { IoIosCloseCircleOutline } from "react-icons/io";

interface ParticipantsProps {
  participants: SearchedUser[];
  removeParticipant: (userId: string) => void;
}

function Participants({ participants, removeParticipant }: ParticipantsProps) {
  return (
    <Flex mt={8} flexWrap="wrap" gap="10px">
      {participants.map((participant) => {
        return (
          <Stack
            key={participant.id}
            bg="whiteAlpha.200"
            borderRadius={4}
            p={2}
            align="center"
            direction="row"
          >
            <Text>{participant.username}</Text>
            <IoIosCloseCircleOutline
              size={20}
              cursor="pointer"
              onClick={() => removeParticipant(participant.id)}
            />
          </Stack>
        );
      })}
    </Flex>
  );
}

export default Participants;
