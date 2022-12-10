import styled from "styled-components";

export const HeaderContainer = styled.div`
  position: absolute;
  z-index: 0;
  background: transparent;
  width: 100%;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
`;
export const HeaderContent = styled.header`
  display: flex;
  justify-content: space-between;
  max-width: 1440px;
  margin: 0 auto;
`;
export const MenuContainer = styled.div`
  display: flex;
  gap: 7rem;
  padding: 1.75rem 0;
  align-items: center;

  & > div {
    height: 50px;
    width: 112px;
    & > img {
      position: absolute;
      border-bottom: 4px solid ${(props) => props.theme.blue};
      padding-bottom: 2.3rem;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  align-items: center;

  & > button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    border-radius: 3.15px;
    border: 1px solid ${(props) => props.theme.white};
    background: transparent;
    color: ${(props) => props.theme.white};
    width: 115px;
    height: 41px;
    cursor: pointer;
    transition: 1s;
    :hover {
      background: ${(props) => props.theme.white};
      color: black;
      border: black;
    }
  }
  & > button:last-child {
    background: ${(props) => props.theme.blue};
    border: none;
    transition: 0.5s;

    :hover {
      background: #32aeff;
      color: white;
    }
  }
`;
