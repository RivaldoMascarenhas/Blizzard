import styled from "styled-components";

export const InfoStyles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

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
  }
`;
