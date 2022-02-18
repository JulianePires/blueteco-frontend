import { VStack } from "@chakra-ui/react";
import { BsPatchPlusFill } from "react-icons/bs";
import { MemoizedButton } from "../components/Button";
import { MemoizedHeader } from "../components/Header";
import { MemoizedSectionTitle } from "../components/SectionTitle";
import { PATHS } from "../constants";
import { colors } from "../resources/colors";

const Users: React.FC = () => {
  return (
    <>
      <MemoizedHeader activePath={PATHS.USERS} />

      <VStack as="section" w="100%" pb="2rem">
        <MemoizedSectionTitle title="Usuários" />
        <MemoizedButton gap={2} color={colors.secondaryLight} variant="ghost">
          Adicionar usuário <BsPatchPlusFill />
        </MemoizedButton>
      </VStack>
    </>
  );
};

export default Users;
