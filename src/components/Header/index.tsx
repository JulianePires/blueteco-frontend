import {
  Avatar,
  HStack,
  Image,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import styled from "styled-components";
import LogoBlue from "../../assets/images/logo-dark.png";
import { colors } from "../../resources/colors";
import { SideNav } from "../SideNav";
import { UserInfo } from "./UserInfo";

interface HeaderProps {
  activePath: string;
}

const Header: React.FC<HeaderProps> = ({ activePath }) => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  return (
    <HeaderContainer spacing="auto">
      <StyledLogo src={LogoBlue} />
      <Stack as="section" direction={["column", "column", "row"]} spacing={5}>
        {isLargerThan768 && <UserInfo />}
        <SideNav activePath={activePath} />
      </Stack>
    </HeaderContainer>
  );
};

const HeaderContainer = styled(HStack)`
  padding: 0 3em;
  background: ${colors.mainLight};
  border-bottom: 3px solid ${colors.secondaryLight};
`;

const StyledLogo = styled(Image)`
  width: 10em;
`;

export { Header };