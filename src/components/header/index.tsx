import {
  ButtonContainer,
  HeaderContainer,
  HeaderContent,
  MenuContainer,
} from "./styles";
import banner from "../../assets/path2894.png";
import { User } from "phosphor-react";
import { Menu } from "./menu";
import * as Dialog from "@radix-ui/react-dialog";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <MenuContainer>
          <div>
            <img src={banner} />
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
            <Dialog.Portal>
              <Dialog.Overlay />
              <Dialog.Content>
                <Dialog.Close />
                <Dialog.Title>TESTE</Dialog.Title>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </ButtonContainer>
      </HeaderContent>
    </HeaderContainer>
  );
}
