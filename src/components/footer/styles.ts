import styled from "styled-components";

export const FooterLogo = styled.footer`
  background: url("./footer-background.png");
  width: 100%;
  height: 860px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
export const FooterContainer = styled.div`
  display: flex;
  max-width: 1440px;
  margin: 0 auto;
`;

export const InfoFooter = styled.div`
  display: flex;
  width: 30%;
  flex-direction: column;
  gap: 2rem;
  padding-top: 7rem;

  & > img {
    width: 30%;
  }
  & > p {
    font-size: 2rem;
    font-weight: bold;
  }
`;
export const Benefits = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  & > p {
    display: flex;
    gap: 1rem;
    color: #808080;
  }
`;
export const Button = styled.button``;

export const PhoneAvailable = styled.div`
  display: flex;
  gap: 1rem;

  & > p {
    width: 50%;
    & > a {
      color: ${(props) => props.theme.white};
    }
  }
`;

export const AppContainer = styled.div`
  display: flex;
  width: 70%;
  position: relative;
  align-items: flex-end;
  justify-content: center;
`;
export const ImgApp = styled.img`
  width: 100%;
`;
export const AppMini = styled.img`
  position: absolute;
  z-index: 1;
  width: 70%;
  right: 3rem;
`;
