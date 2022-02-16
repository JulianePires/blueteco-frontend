import { Heading } from "@chakra-ui/react";
import styled from "styled-components";
import { colors } from "../../resources/colors";
import { fonts } from "../../resources/fonts";

const SectionTitle: React.FC = () => {
  return <StyledTitle>Início</StyledTitle>;
};

const StyledTitle = styled(Heading)`
  text-align: center;
  background: ${colors.mainDark};
  font-family: ${fonts.londrina} !important;
`;

export { SectionTitle };
