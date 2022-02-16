import { Box } from "@chakra-ui/react";
import { CardMenu } from "../components/CardMenu";
import { MemoizedHeader } from "../components/Header";
import { MemoizedSectionTitle } from "../components/SectionTitle";
import { PATHS } from "../constants";

const Home: React.FC = () => {
  return (
    <>
      <MemoizedHeader activePath={PATHS.HOME} />
      <Box as="section" w="100%" pb="2rem">
        <MemoizedSectionTitle title="Início" />
        <CardMenu />
      </Box>
    </>
  );
};

export default Home;
