import { HeadList } from "./components/headList";
import { ListAllGames } from "./components/listAllGames";
import { ListContainer } from "./styles";

export function ListGames() {
  return (
    <ListContainer>
      <HeadList />
      <ListAllGames />
    </ListContainer>
  );
}
