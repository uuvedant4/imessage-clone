import { Avatar, Button, Flex, Stack, Text } from "@chakra-ui/react";
import { SearchedUser } from "../../../../util/types";

interface UserSearchListProps {
  users: SearchedUser[];
}

export default function UserSearchList({ users }: UserSearchListProps) {
  return (
    <>
      {users.length === 0 ? (
        <Flex mt={6} justify="center">
          <Text>No users found</Text>
        </Flex>
      ) : (
        <Stack mt={6}>
          {users.map((user) => {
            return (
              <Stack
                key={user.id}
                borderRadius={4}
                px={4}
                spacing={4}
                py={2}
                align="center"
                direction="row"
              >
                <Avatar />
                <Flex align="center" width="100%" justify="space-between">
                  <Text color="whiteAlpha.700">{user.username}</Text>
                  <Button
                    onClick={() => {}}
                    _hover={{ bg: "brand.100" }}
                    bg="brand.100"
                  >
                    Select
                  </Button>
                </Flex>
              </Stack>
            );
          })}
        </Stack>
      )}
    </>
  );
}
