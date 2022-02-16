import { Icon, Stack } from "@chakra-ui/react";
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
      props.isActivePath === "true" ? colors.white : colors.secondaryLight};
    transition: color 0.2s ease-out;
    border-bottom: ${(props) =>
      props.isActivePath === "true" ? "2px solid" + colors.secondary : "none"};

    &:hover {
      color: ${colors.secondary};
    }
  }
`;

export { SideNavItem };

