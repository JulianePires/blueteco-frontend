import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Image,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { useRef } from "react";
import { FaHamburger } from "react-icons/fa";
import styled from "styled-components";
import LogoBlueteco from "../../assets/images/logo-dark.png";
import { MENUITEMS } from "../../constants";
import { colors } from "../../resources/colors";
import { MemoizedSideNavItem } from "./SideNavItem";

interface SideNavProps {
  activePath: string;
}

const SideNav: React.FC<SideNavProps> = ({ activePath }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <StyledButton ref={btnRef} onClick={onOpen}>
        <FaHamburger />
      </StyledButton>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <StyledDrawerContent>
          <DrawerCloseButton color="whiteAlpha.800" />
          <DrawerHeader color="whiteAlpha.800">Blueteco</DrawerHeader>

          <DrawerBody>
            <Stack spacing={3}>
              {MENUITEMS.map((item, index) => (
                <MemoizedSideNavItem
                  key={index}
                  icon={item.icon}
                  name={item.name}
                  path={item.path}
                  isActivePath={activePath === item.path}
                />
              ))}
            </Stack>
          </DrawerBody>

          <DrawerFooter>
            <Image src={LogoBlueteco} />
          </DrawerFooter>
        </StyledDrawerContent>
      </Drawer>
    </>
  );
};

const StyledButton = styled(Button)`
  background: none !important;
  color: ${colors.secondaryDark};
  transition: all 2s ease-in-out;

  background: ${colors.main};
  padding: 2em 2em;
  border-radius: 3em;
  border: 2px groove ${colors.secondaryLight};

  svg {
    font-size: 2.5em;

    &:hover {
      color: ${colors.secondaryLighter};
      transform: scale(1.1);
    }
  }
`;

const StyledDrawerContent = styled(DrawerContent)`
  background: ${colors.mainDark} !important;
`;

export const MemoizedSideNav = React.memo(SideNav);
