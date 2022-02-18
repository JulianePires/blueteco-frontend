import { ButtonProps } from "@chakra-ui/react";
import React from "react";
import { StyledButton } from "./styled";

const Button: React.FC<ButtonProps> = (props) => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};

export const MemoizedButton = React.memo(Button);
