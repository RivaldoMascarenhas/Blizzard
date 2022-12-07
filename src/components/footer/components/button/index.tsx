import mac from "../../../../assets/mac.svg";
import windows from "../../../../assets/windows.svg";
import linux from "../../../../assets/linux.svg";
import { ButtonStyles } from "./styles";

enum OS {
  WINDOWS = "Windows",
  MAC = "Mac",
  LINUX = "Linux",
}

const icons = {
  [OS.WINDOWS]: windows,
  [OS.LINUX]: linux,
  [OS.MAC]: mac,
};
export function Button() {
  const os = [OS.WINDOWS, OS.LINUX, OS.MAC];

  const plataform = os.find((system) => navigator.userAgent.includes(system));

  return (
    <ButtonStyles>
      <img src={plataform && icons[plataform]} alt="" />
      <span>Baixar para o {plataform}</span>
    </ButtonStyles>
  );
}
