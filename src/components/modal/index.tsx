import * as Dialog from "@radix-ui/react-dialog";
import { X } from "phosphor-react";
import { Content, Overlay } from "./styles";

export function Modal() {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <div>
          <img src="./logo-battle-net.png" alt="" />
          <Dialog.Close>
            <X size={24} />{" "}
          </Dialog.Close>
        </div>
        <form>
          <input type="email" placeholder="E-mail ou telefone" />
          <input type="password" placeholder="Senha" />
          <button>Conectar-se</button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
