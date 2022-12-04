import { Play, User } from "phosphor-react";
import {
  GameLogo,
  Gif,
  GifContainer,
  InfoGamesContainer,
  InfoStyles,
} from "./styles";

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
    <InfoGamesContainer>
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
      <GifContainer>
        <GameLogo img={game} />
        <div>
          <p>ASSISTA O TRAILER</p>
          <Gif img={game}>
            <svg
              width="51"
              height="51"
              viewBox="0 0 51 51"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_b_1_290)">
                <circle
                  cx="25.5"
                  cy="25.5"
                  r="25.5"
                  fill="url(#paint0_linear_1_290)"
                />
              </g>
              <path
                d="M34.2537 25.4999L20.5522 16.7462L20.5522 34.2537L34.2537 25.4999Z"
                fill="#00AEFF"
              />
              <defs>
                <filter
                  id="filter0_b_1_290"
                  x="-3"
                  y="-3"
                  width="57"
                  height="57"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feGaussianBlur in="BackgroundImageFix" stdDeviation="1.5" />
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_1_290"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_1_290"
                    result="shape"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_1_290"
                  x1="30.8652"
                  y1="-10.0318"
                  x2="59.2202"
                  y2="20.0814"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#07070A" stopOpacity="0.86" />
                  <stop offset="1" stopColor="#0F1016" stopOpacity="0.5" />
                </linearGradient>
              </defs>
            </svg>
          </Gif>
        </div>
      </GifContainer>
    </InfoGamesContainer>
  );
}
