import styled from "styled-components";

export const ContainerGamesAll = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  padding: 1rem;
  margin-bottom: 5rem;
  width: 100%;
`;

export const LogoContainer = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 6px;
  border: none;
  height: 450px;
  cursor: pointer;

  &:hover > img:first-child {
    transform: scale(1.1);
  }
`;
export const GameImg = styled.img`
  width: 100%;
  height: auto;
  transition: 0.5s;
  transform-origin: bottom center;
`;
export const GameLogo = styled.img`
  position: absolute;
  right: 5.2rem;
  bottom: 3.5rem;
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

  height: 450px;
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
