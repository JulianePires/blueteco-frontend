import { Button, Image, Input, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import BluetecoLogo from "../assets/images/logo-dark.png";
import { PATHS } from "../constants";

const Login: React.FC = () => {
  return (
    <Stack spacing={3} alignItems="center" px="20" py="10">
      <Text py="5" color="whiteAlpha.900">
        Entre no nosso Blueteco
      </Text>
      <Input colorScheme="yellow" variant="flushed" placeholder="Email" />
      <Input variant="flushed" placeholder="Password" type="password" />
      <Button>Acessar</Button>
      <Link to={PATHS.CREATE}>Criar conta</Link>
      <Image src={BluetecoLogo} w="20em" />
    </Stack>
  );
};

export default Login;
