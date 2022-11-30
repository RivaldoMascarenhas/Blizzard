import {
  ButtonContainer,
  HeaderContainer,
  HeaderContent,
  MenuContainer,
} from "./styles";
import banner from "../../assets/path2894.png";
import { User } from "phosphor-react";
import { Menu } from "../menu";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <MenuContainer>
          <img src={banner} />
          <Menu />
        </MenuContainer>
        <ButtonContainer>
          <button>Criar Conta</button>
          <button>
            <User size={20} /> Logar
          </button>
        </ButtonContainer>
      </HeaderContent>
    </HeaderContainer>
  );
}
