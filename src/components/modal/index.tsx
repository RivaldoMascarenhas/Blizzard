import * as Dialog from "@radix-ui/react-dialog";
import {
  ButtonConectar,
  Content,
  DivButtonConect,
  DivClose,
  FormModal,
  Link,
  LogoBattle,
  Overlay,
} from "./styles";
import facebook from "../../assets/logoFacebook.svg";
import apple from "../../assets/logoApple.svg";
import google from "../../assets/logoGoogle.svg";
import { X } from "phosphor-react";

export function Modal() {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <DivClose>
          <Dialog.Close>
            <X size={28} />{" "}
          </Dialog.Close>
        </DivClose>
        <LogoBattle src="./logo-battle-net.png" alt="" />
        <FormModal>
          <input type="text" placeholder="E-mail ou telefone" />
          <input type="password" placeholder="Senha" />
          <ButtonConectar>Conectar-se</ButtonConectar>
        </FormModal>
        <p>ou conecte-se com</p>
        <DivButtonConect>
          <button>
            <img src={google} />
          </button>
          <button>
            <img src={apple} />
          </button>
          <button>
            <img src={facebook} />
          </button>
        </DivButtonConect>
        <p>
          <Link href="#">Crie uma conta</Link> <span>Battle.net de graça</span>
        </p>
        <Link href="#">Não consegue logar?</Link>
      </Content>
    </Dialog.Portal>
  );
}
