import { Avatar, HStack, Text } from "@chakra-ui/react";
import React from "react";
import useAuth from "../../context/auth";

const UserInfo: React.FC = () => {
  const { user } = useAuth();
  return (
    <HStack spacing={3}>
      <Text color="whiteAlpha.800">Olá {user?.name}</Text>
      <Avatar name={user?.name} />
    </HStack>
  );
};

export const MemoizedUserInfo = React.memo(UserInfo);
