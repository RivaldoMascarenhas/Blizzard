import styled from "styled-components";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";

export const List = styled(NavigationMenu.List)`
  display: flex;
  gap: 2rem;
  list-style: none;
`;

export const Trigger = styled(NavigationMenu.Trigger)`
  color: ${(props) => props.theme.white};
  background: transparent;
  font-size: 1rem;
  border: none;
  z-index: 1;
  &:hover > svg {
    transform: rotate(180deg);
    color: ${(props) => props.theme.blue};
  }
`;
export const Content = styled(NavigationMenu.Content)`
  position: absolute;
  background: ${(props) => props.theme.backgroundItem};
  width: 100%;
  height: 640px;
  top: 0;
  left: 0;
  z-index: -1;
`;
