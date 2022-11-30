import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { CaretDown } from "phosphor-react";
import { MenuGames } from "../MenuListGames";
import { Content, List, Trigger } from "./styles";
export function Menu() {
  return (
    <NavigationMenu.Root>
      <List>
        <NavigationMenu.Item>
          <Trigger>
            Jogos <CaretDown />{" "}
          </Trigger>
          <Content>
            {MenuGames.map((item) => {
              return (
                <div>
                  <img src={item.img} alt={item.name} />
                  <p>{item.name}</p>
                </div>
              );
            })}
          </Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <Trigger>
            Esportes <CaretDown />{" "}
          </Trigger>
          <Content>
            <p>TESTE 2</p>
          </Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <Trigger>Lojas</Trigger>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <Trigger>Notícias</Trigger>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <Trigger>Suporte</Trigger>
        </NavigationMenu.Item>
      </List>

      <NavigationMenu.Viewport />
    </NavigationMenu.Root>
  );
}
