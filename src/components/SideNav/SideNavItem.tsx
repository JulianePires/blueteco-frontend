import { Icon, Stack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../resources/colors";
import { Route } from "../../types";

interface SideNavItemProps extends Route {
  isActivePath: boolean;
}

const SideNavItem: React.FC<SideNavItemProps> = ({
  icon,
  name,
  path,
  isActivePath,
}) => {
  return (
    <MenuItem isActivePath={isActivePath.toString()} direction="row" gap={3}>
      <Icon as={icon} />
      <Link to={path}>{name}</Link>
    </MenuItem>
  );
};

const MenuItem = styled(Stack)<{ isActivePath: string }>`
  align-items: center;

  svg {
    color: ${colors.secondaryDark};
    font-size: 2em;
  }

  a {
    font-size: 1.2em;
    color: ${(props) =>
      props.isActivePath === "true" ? colors.white : colors.secondaryLighter};
    border-radius: 4px;

    transition: all 0.5s ease-out;

    position: relative;

    &:hover {
      color: ${colors.secondaryLight};
    }

    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 4px;
      border-radius: 4px;
      background-color: ${colors.secondary};
      bottom: -4px;
      left: 0;
      transform-origin: right;
      transform: ${(props) =>
        props.isActivePath === "true" ? "scaleX(1)" : "scaleX(0)"};
      transition: transform 0.3s ease-in-out;
    }

    &:hover::before {
      transform-origin: left;
      transform: scaleX(1);
    }
  }
`;

export const MemoizedSideNavItem = React.memo(SideNavItem);
