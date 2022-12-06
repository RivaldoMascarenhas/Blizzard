import mac from "../../../../assets/mac.svg";
import windows from "../../../../assets/windows.svg";
import linux from "../../../../assets/linux.svg";
import { ButtonStyles } from "./styles";

export function Button() {
  const os = ["Windows", "Linux", "Mac"];

  const plataform: string | undefined = os.find((system) =>
    navigator.userAgent.includes(system)
  );
  function icon() {
    switch (plataform) {
      case "Windows":
        return <img src={windows} />;
      case "Linux":
        return <img src={linux} />;
      case "Mac":
        return <img src={mac} />;
    }
  }
  return (
    <ButtonStyles>
      {icon()}
      <span>Baixar para o {plataform}</span>
    </ButtonStyles>
  );
}
