import { useEffect, useState } from "react";
import {
  ContainerGamesAll,
  DescriptionCategory,
  DescriptionName,
  GameLogo,
  LastItemOfList,
} from "./styles";
import axios from "axios";

interface listProps {
  image: string;
  name: string;
  category: string;
  logo: string;
}

export function ListAllGames() {
  const [list, setList] = useState<listProps[]>([]);

  useEffect(() => {
    (async () => {
      const api = await axios.get(
        "https://api-brchallenges.vercel.app/api/blizzard/games"
      );
      setList(api.data);
    })();
  }, []);

  return (
    <ContainerGamesAll>
      {list.map((item, index) => {
        return (
          <div key={index}>
            <GameLogo title={item.name} background={item.image}>
              <img src={item.logo} />
            </GameLogo>
            <DescriptionName>{item.name}</DescriptionName>
            <DescriptionCategory>{item.category}</DescriptionCategory>
          </div>
        );
      })}
      <LastItemOfList>
        <img src="./path2894.png" alt="" />
        <div>
          {" "}
          <svg
            width="9"
            height="10"
            viewBox="0 0 9 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect y="0.5" width="3" height="3" fill="#61CDFF" />
            <rect y="6.5" width="3" height="3" fill="#61CDFF" />
            <rect x="6" y="0.5" width="3" height="3" fill="#61CDFF" />
            <rect x="6" y="6.5" width="3" height="3" fill="#61CDFF" />
          </svg>
          <a href="#">Ver todos os jogos</a>
        </div>
      </LastItemOfList>
    </ContainerGamesAll>
  );
}
