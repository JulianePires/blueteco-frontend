import { Avatar, HStack, Text } from "@chakra-ui/react";
import React from "react";

const UserInfo: React.FC = () => {
  return (
    <HStack spacing={3}>
      <Text color="whiteAlpha.800">Olá, Fulano</Text>
      <Avatar name="Fulano de Tal" />
    </HStack>
  );
};

export const MemoizedUserInfo = React.memo(UserInfo);
