import styled from "styled-components";
interface InfoGamesProps {
  img: "diablo" | "hearthstone" | "wow" | string;
}
export const InfoGamesContainer = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  padding: 0 14rem;
  align-items: flex-start;
`;
export const InfoStyles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  & > div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  & > div > p {
    width: 39.125rem;
    font-size: 4rem;
    font-weight: bold;
    line-height: 120%;
    flex-wrap: wrap;
  }
  & > div > span {
    font-size: 1.125rem;
  }
  & > button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    width: 50%;
    padding: 1rem;
    border-radius: 3.15px;
    border: none;
    background: ${(props) => props.theme.blue};
    color: ${(props) => props.theme.white};
    cursor: pointer;
  }
`;

export const GifContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8rem;

  position: absolute;
  right: 1rem;
  & > div > p {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1rem;
    font-size: 13px;
  }
`;
export const GameLogo = styled.div<InfoGamesProps>`
  ${(props) => {
    switch (props.img) {
      case "diablo":
        return `background: url('./diablo-logo.png');
        width: 280px;
        height: 154px;`;
      case "hearthstone":
        return `background: url('./hearthstone-logo.png');
        width: 288px;
        height: 204px;`;
      case "wow":
        return `background: url('./wow-logo.png');
        width: 344px;
        height: 193.5px;`;
    }
  }};
  background-repeat: no-repeat;
  background-size: contain;
`;
export const Gif = styled.div<InfoGamesProps>`
  display: flex;
  width: 280px;
  height: 158px;
  justify-content: center;
  align-items: center;
  width: 288px;
  height: 154px;
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
  ${(props) => {
    switch (props.img) {
      case "diablo":
        return `background: url('./diablo-animation-cover.png');
        &:hover {
          background: url('./diablo-animation.gif');
          background-repeat: no-repeat;
          background-size: cover;
        }
        `;
      case "hearthstone":
        return `background: url('./hearthstone-animation-cover.png');
        &:hover {
          background: url('./hearthstone-animation.gif');
          background-repeat: no-repeat;
          background-size: cover;
        }
        `;
      case "wow":
        return `background: url('./wow-animation-cover.png');
         &:hover {
          background: url('./wow-animation.gif');
          background-repeat: no-repeat;
          background-size: cover;
        }
        `;
    }
  }};
`;
