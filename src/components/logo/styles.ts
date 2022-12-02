import styled from "styled-components";
import * as RadioGroup from "@radix-ui/react-radio-group";

interface ContainerLogoProps {
  img: "diablo" | "hearthstone" | "wow" | "" | string;
  fix?: "1" | "2";
}

export const Logo = styled.div<ContainerLogoProps>`
  background: ${(props) => {
    switch (props.img) {
      case "diablo":
        return `url('./diablo-bg.png')`;
      case "hearthstone":
        return `url('./hearthstone-bg.png')`;
      case "wow":
        return `url('./wow-bg.png')`;
    }
  }};
  width: 100%;
  height: 736px;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.5;
  position: absolute;
  z-index: -1;
`;

export const ContainerSelect = styled(RadioGroup.Root)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const item = styled(RadioGroup.Item)<ContainerLogoProps>`
  border: none;
  width: 48px;
  height: 48px;
  background-repeat: no-repeat;
`;
export const ItemDiablo = styled(item)`
  ${(props) => {
    if (props.img === "diablo") {
      return `background: url("./Diablo® IV.png");`;
    } else
      return `background: url("./Diablo® IV - sem cor.png");
    opacity: 0.5;`;
  }};
  background-size: contain;
`;

export const ItemHearthstone = styled(item)`
  background: ${(props) => {
    if (props.img === "hearthstone") {
      return `url("./Hearthstone®.png")`;
    } else return `url("./hearthstone-Icon.png")`;
  }};
  background-size: contain;
`;
export const ItemWow = styled(item)`
  background: ${(props) => {
    if (props.img === "wow") {
      return `url("./World of Warcraft®.png")`;
    } else return `url('./wow-Icon-sem cor.png')`;
  }};
  background-size: contain;
`;
export const ItemSelect = styled.div<ContainerLogoProps>`
  background: ${(props) => {
    if (props.fix === "1") {
      return `url("./D -semcor.png")`;
    } else return `url("./ultimo sem cor.png")`;
  }};
  border: none;
  width: 48px;
  height: 48px;
  background-repeat: no-repeat;
  background-size: contain;
`;
export const ContainerLogoGames = styled.div`
  display: flex;
  max-width: 1440px;
  margin: 0 auto;
  gap: 10rem;
  padding-top: 10rem;
`;
