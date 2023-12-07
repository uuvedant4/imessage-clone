import { useLazyQuery } from "@apollo/client";
import { signOut } from "next-auth/react";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import UserOperations from "../../../../graphql/operations/user";
import { SearchUserData, SearchUsersInput } from "../../../../util/types";
import UserSearchList from "./UserSearchList";

interface ConversationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ConversationModal: React.FC<ConversationModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [username, setUsername] = useState("");
  const [searchUsers, { data, error, loading }] = useLazyQuery<
    SearchUserData,
    SearchUsersInput
  >(UserOperations.Queries.searchUsers);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    searchUsers({ variables: { username } });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size={{ base: "sm", md: "md" }}>
      <ModalOverlay />
      <ModalContent bg="#2d2d2d" pb={4}>
        <ModalHeader>Find or Create a Conversation</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={onSubmit}>
            <Stack spacing={4}>
              <Input
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                placeholder="Enter a username"
              />
              <Button isLoading={loading} type="submit" isDisabled={!username}>
                Search
              </Button>
            </Stack>
          </form>
          {data?.searchUsers && <UserSearchList users={data.searchUsers} />}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ConversationModal;
