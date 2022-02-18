import { Image, Stack } from "@chakra-ui/react";
import BluetecoLogo from "../assets/images/logo-dark.png";
import LoginForm from "../components/LoginForm";

const Login: React.FC = () => {
  return (
    <Stack spacing={3} alignItems="center" px="20" py="10">
      <LoginForm />
      <Image src={BluetecoLogo} w="20em" />
    </Stack>
  );
};

export default Login;
