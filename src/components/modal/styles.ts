import * as Dialog from "@radix-ui/react-dialog";
import styled from "styled-components";

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  inset: 0;
`;
export const Content = styled(Dialog.Content)`
  min-width: 43rem;
  min-height: 32rem;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-image: linear-gradient(270deg, rgba(0, 0, 0, 1) 10%, transparent),
    url("./image 80.png");
`;
