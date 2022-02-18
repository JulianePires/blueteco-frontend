import { Image, Stack } from "@chakra-ui/react";
import BluetecoLogo from "../assets/images/logo-dark.png";
import CreateForm from "../components/CreateForm";

const Create: React.FC = () => {
  return (
    <Stack spacing={3} alignItems="center" px="20" py="10">
      <CreateForm />
      <Image src={BluetecoLogo} w="20em" />
    </Stack>
  );
};

export default Create;
