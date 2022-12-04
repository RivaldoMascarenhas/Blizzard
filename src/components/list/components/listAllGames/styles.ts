import styled from "styled-components";

interface GameLogoProps {
  background: string;
}
export const ContainerGamesAll = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  padding: 1rem;
  margin-bottom: 5rem;
  width: 100%;
`;
export const GameLogo = styled.div<GameLogoProps>`
  background: ${(props) => {
    return `url("${props.background}");`;
  }};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  width: 100%;
  height: 500px;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 4rem;

  border: none;
  border-radius: 6px;
`;
export const DescriptionName = styled.p`
  font-size: 1.25rem;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
`;
export const DescriptionCategory = styled.span`
  font-size: 0.9375rem;
  color: #808080;
`;
export const LastItemOfList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  height: 500px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 6px;

  & > div > a {
    color: ${(props) => props.theme.white};
    text-decoration: none;
    padding-left: 0.7rem;
  }

  & > div > svg > rect {
    fill: #fff;
  }
`;
