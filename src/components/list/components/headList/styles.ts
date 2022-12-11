import styled from "styled-components";

export const HeaderListGames = styled.div`
  display: flex;
  width: 100%;
  height: 190px;
  justify-content: space-between;
  align-items: center;
`;
export const HeaderText = styled.div`
  display: flex;
  gap: 10.68rem;

  @media screen and (max-width: 1440px) {
    gap: 8rem;
  }
  @media screen and (max-width: 978px) {
    gap: 6rem;
  }

  & > span {
    font-size: 0.9375rem;
    color: rgba(143, 145, 153, 1);
    padding: 1rem;
  }
  & > p {
    display: flex;
    align-items: flex-start;
    width: 22%;
    line-height: 100%;
    flex-wrap: wrap;
    font-size: 2rem;
    font-weight: bold;
  }
  & > div {
    display: flex;
    align-items: flex-end;
  }
`;
export const AllGames = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  & > a {
    text-decoration: none;
    color: ${(props) => props.theme.blue};
  }
  @media screen and (max-width: 1440px) {
    padding: 0 1rem;
  }
`;
