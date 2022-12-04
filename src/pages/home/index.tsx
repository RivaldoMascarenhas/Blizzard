import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { ListGames } from "../../components/list";
import { LogoGames } from "../../components/logo";

export function Home() {
  return (
    <div>
      <Header />
      <LogoGames />
      <ListGames />
      <Footer />
    </div>
  );
}
