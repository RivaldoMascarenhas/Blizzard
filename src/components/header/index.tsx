import {
  ButtonContainer,
  HeaderContainer,
  HeaderContent,
  MenuContainer,
} from "./styles";
import logo from "../../assets/path2894.png";
import { User } from "phosphor-react";
import { Menu } from "./menu";
import * as Dialog from "@radix-ui/react-dialog";
import { Modal } from "../modal";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <MenuContainer>
          <div>
            <img src={logo} />
          </div>
          <Menu />
        </MenuContainer>
        <ButtonContainer>
          <button>Criar Conta</button>

          <Dialog.Root>
            <Dialog.Trigger asChild>
              <button>
                <User size={20} /> Logar
              </button>
            </Dialog.Trigger>
            <Modal />
          </Dialog.Root>
        </ButtonContainer>
      </HeaderContent>
    </HeaderContainer>
  );
}
