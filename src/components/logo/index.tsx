import { useState } from "react";
import { InfoGames } from "./InfoGame";
import {
  Logo,
  ContainerSelect,
  ItemDiablo,
  ItemHearthstone,
  ItemSelect,
  ItemWow,
  ContainerLogoGames,
  Barra,
} from "./styles";

type TheGame = "diablo" | "hearthstone" | "wow" | string;

export function LogoGames() {
  const [game, setGame] = useState<TheGame>("diablo");

  return (
    <div>
      <Logo img={game} />
      <ContainerLogoGames>
        <InfoGames game={game} />
        <ContainerSelect onValueChange={setGame}>
          <ItemDiablo value="diablo" img={game} />
          <ItemHearthstone value="hearthstone" img={game} />
          <ItemWow value="wow" img={game} />
          <ItemSelect img="" fix="1" />
          <ItemSelect img="" fix="2" />
        </ContainerSelect>
      </ContainerLogoGames>
      <Barra img={game} />
    </div>
  );
}
