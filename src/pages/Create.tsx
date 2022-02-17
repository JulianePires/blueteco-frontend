import { Button, Image, Input, Select, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import BluetecoLogo from "../assets/images/logo-dark.png";
import { PATHS, PORTUGUESETOENGLISHROLES, ROLES } from "../constants";

const Create: React.FC = () => {
  return (
    <Stack spacing={3} alignItems="center" px="20" py="10">
      <Text py="5" color="whiteAlpha.900">
        Crie a sua conta
      </Text>
      <Input colorScheme="yellow" variant="flushed" placeholder="Nome" />
      <Input variant="flushed" placeholder="Email" type="email" />
      <Input variant="flushed" placeholder="Nascimento" type="date" />
      <Input variant="flushed" placeholder="Password" type="password" />
      <Input
        variant="flushed"
        placeholder="Confirmar Password"
        type="password"
      />
      <Select placeholder="Função">
        {ROLES.map((role, index) => (
          <option key={index} value={PORTUGUESETOENGLISHROLES[role]}>
            {role}
          </option>
        ))}
      </Select>
      <Button>Criar</Button>
      <Link to={PATHS.LOGIN}>Fazer login</Link>
      <Image src={BluetecoLogo} w="20em" />
    </Stack>
  );
};

export default Create;
