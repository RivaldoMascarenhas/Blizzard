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
  cursor: pointer;
  &:hover > svg {
    transition: all 0.5s;
    transform: rotate(180deg);
    color: ${(props) => props.theme.blue};
  }
`;
interface ContentProps {
  heigth?: number;
}

export const Content = styled(NavigationMenu.Content)<ContentProps>`
  position: absolute;
  background: ${(props) => props.theme.background_item};
  width: 100%;
  height: ${(props) => (props.heigth ? props.heigth : 640)}px;
  top: 0;
  left: 0;
  z-index: -1;
`;
export const MenuItemContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  margin-top: 8rem;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  row-gap: 1rem;
`;
export const MenuItem = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  gap: 0.5rem;
  color: ${(props) => props.theme.white};
  text-decoration: none;
  text-align: center;
  & > img {
    width: 70px;
  }
  &:hover {
    border-radius: 10px;
    background: ${(props) => props.theme.background_item};
    & > img {
      transform: scale(1.2);
    }
  }
`;
export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  gap: 4rem;
  background: ${(props) => props.theme.footer_menu};
  & > a {
    text-decoration: none;
    color: ${(props) => props.theme.white};
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;
export const MenuSportsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  row-gap: 1rem;
  column-gap: 1rem;

  max-width: 1440px;
  margin: 0 auto;
  margin-top: 8rem;
`;
export const MenuItemSports = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  gap: 0.5rem;
  color: ${(props) => props.theme.white};
  text-decoration: none;
  text-align: center;
  & > img {
    width: 174px;
  }
  &:hover {
    & > img {
      transform: scale(1.2);
    }
  }
`;
export const FooterSports = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  gap: 4rem;
  background: ${(props) => props.theme.footer_menu};
  & > a {
    text-decoration: none;
    color: ${(props) => props.theme.white};
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;
