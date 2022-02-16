import { Box, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { IconType } from "react-icons";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../resources/colors";
import { fonts } from "../../resources/fonts";

interface CardProps {
  icon: IconType;
  name: string;
  path: string;
}

const Card: React.FC<CardProps> = ({ icon, name, path }) => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate(path);
  };
  
  return (
    <CardBox onClick={onClick}>
      <Icon as={icon} />
      <CardTitle>{name}</CardTitle>
    </CardBox>
  );
};

const CardBox = styled(Box)`
  width: 10em;
  height: 10em;

  border: 4px solid ${colors.secondaryDark};
  border-radius: 4px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  transition: all 0.2s ease-in-out;

  cursor: pointer;

  svg {
    color: ${colors.secondaryLight};
    font-size: 4em;
  }

  &:hover {
    transform: scale(1.1);

    svg {
      color: ${colors.secondaryDark};
    }
  }
`;

const CardTitle = styled(Text)`
  color: ${colors.white};
  font-size: 1.5em;
  font-family: ${fonts.poppins};
`;

export const MemoizedCard = React.memo(Card);
