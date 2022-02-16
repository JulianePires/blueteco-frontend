import { Container, Heading } from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";
import { colors } from "../../resources/colors";
import { fonts } from "../../resources/fonts";

interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <Container w="100%" display="flex" centerContent>
      <StyledTitle>{title}</StyledTitle>
    </Container>
  );
};

const StyledTitle = styled(Heading)`
  color: ${colors.secondary};
  position: relative;
  width: fit-content;

  font-family: ${fonts.londrina} !important;
  text-align: center;
  font-size: 3em !important;

  margin: 1em;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 4px;
    border-radius: 4px;
    background-color: ${colors.mainLighter};
    bottom: 0;
    left: 0;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform 0.3s ease-in-out;
  }

  &:hover::before {
    transform-origin: left;
    transform: scaleX(1);
  }
`;

export const MemoizedSectionTitle = React.memo(SectionTitle);
