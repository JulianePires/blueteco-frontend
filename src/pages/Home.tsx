import { Box } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { SectionTitle } from "../components/SectionTitle";
import { PATHS } from "../constants";

const Home: React.FC = () => {
  return (
    <>
      <Header activePath={PATHS.HOME} />
      <Box>
        <SectionTitle />
      </Box>
    </>
  );
};

export default Home;
