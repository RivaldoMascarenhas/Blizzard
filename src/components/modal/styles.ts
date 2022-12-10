import * as Dialog from "@radix-ui/react-dialog";
import styled from "styled-components";

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  inset: 0;
`;
export const Content = styled(Dialog.Content)`
  min-width: 50rem;
  min-height: 40rem;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-image: linear-gradient(
      270deg,
      rgba(0, 0, 0, 0.95) 15%,
      rgba(0, 0, 0, 0.3)
    ),
    url("./image 80.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  border-radius: 6px;
`;
export const LogoBattle = styled.img`
  width: 10rem;
`;
export const DivClose = styled.div`
  & > button {
    display: flex;
    line-height: none;
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    cursor: pointer;

    color: ${(props) => props.theme.blue};
    border: none;

    background: transparent;
  }
`;
export const FormModal = styled.form`
  display: flex;
  flex-direction: column;
  width: 30rem;
  gap: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;

  & > input {
    border: none;
    padding: 1rem;
    border-radius: 6px;
  }
  & > input:focus {
    outline: solid 2px ${(props) => props.theme.blue};
    ::placeholder {
      color: black;
    }
  }
  & > input:hover {
    outline: solid 2px ${(props) => props.theme.blue};
    ::placeholder {
      color: black;
    }
  }
`;
export const ButtonConectar = styled.button`
  margin-top: 1rem;
  border: none;
  border-radius: 6px;
  padding: 1rem;
  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme.blue};
  cursor: pointer;
  :hover {
    background: #32aeff;
  }
`;
export const DivButtonConect = styled.div`
  display: flex;
  gap: 1rem;

  & > button {
    border: none;
    border-radius: 6px;
    line-height: 0;
    padding: 1rem;
  }
`;
export const Link = styled.a`
  color: ${(props) => props.theme.blue};

  & > span {
    color: ${(props) => props.theme.white};
    text-decoration: none;
  }
`;
