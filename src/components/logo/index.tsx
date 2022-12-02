import { useState } from "react";
import { InfoGames } from "../InfoGame";
import {
  Logo,
  ContainerSelect,
  ItemDiablo,
  ItemHearthstone,
  ItemSelect,
  ItemWow,
  ContainerLogoGames,
} from "./styles";

type TheGame = "diablo" | "hearthstone" | "wow" | string;

export function LogoGames() {
  const [game, setGame] = useState<TheGame>("diablo");

  return (
    <>
      <Logo img={game} />
      <ContainerLogoGames>
        <ContainerSelect onValueChange={setGame}>
          <ItemDiablo value="diablo" img={game} />
          <ItemHearthstone value="hearthstone" img={game} />
          <ItemWow value="wow" img={game} />
          <ItemSelect img="" fix="1" />
          <ItemSelect img="" fix="2" />
        </ContainerSelect>
        <InfoGames game={game} />
      </ContainerLogoGames>
    </>
  );
}
