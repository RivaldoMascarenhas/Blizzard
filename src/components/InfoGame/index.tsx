import { User } from "phosphor-react";
import { InfoStyles } from "./styles";

interface InfoGamesProps {
  game: "diablo" | "hearthstone" | "wow" | string;
}

export function InfoGames({ game }: InfoGamesProps) {
  const Infogames = [
    {
      name: "diablo",
      title: "Retorne à escuridão com o game Diablo IV",
      description: "O retorno de Lilith traz uma era de escuridão e sofrimento",
      button: "Jogue agora",
    },
    {
      name: "hearthstone",
      title: "Novo pacote de expansão de Hearthstone",
      description:
        "A Horda e a Aliança se encontraram no Vale Alterac para lutar",
      button: "Reserve agora na pré-venda",
    },
    {
      name: "wow",
      title: "Desbrave as Terras Sombrias em Shadowlands!",
      description: "O que jaz além do mundo que você conhece?",
      button: "Reserve agora na pré-venda",
    },
  ];

  return (
    <div>
      {Infogames.map((item, index) => {
        if (item.name === game) {
          return (
            <InfoStyles key={index}>
              <div>
                <p>{item.title}</p>
                <span>{item.description}</span>
              </div>
              <button>
                {" "}
                <User size={20} />
                {item.button}
              </button>
            </InfoStyles>
          );
        }
      })}
      <div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
