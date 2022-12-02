import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { CaretDown } from "phosphor-react";
import { MenuGames, MenuSports } from "../MenuListGames";
import {
  Content,
  Footer,
  FooterSports,
  List,
  MenuItem,
  MenuItemContainer,
  MenuItemSports,
  MenuSportsContainer,
  Trigger,
} from "./styles";

export function Menu() {
  return (
    <NavigationMenu.Root>
      <List>
        <NavigationMenu.Item>
          <Trigger>
            Jogos <CaretDown />{" "}
          </Trigger>
          <Content>
            <MenuItemContainer>
              {MenuGames.map((item, index) => {
                return (
                  <MenuItem key={index} href="#">
                    <img src={item.img} alt={item.name} />
                    <p>{item.name}</p>
                  </MenuItem>
                );
              })}
            </MenuItemContainer>
            <Footer>
              <a href="#">
                <svg
                  width="9"
                  height="10"
                  viewBox="0 0 9 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect y="0.5" width="3" height="3" fill="#61CDFF" />
                  <rect y="6.5" width="3" height="3" fill="#61CDFF" />
                  <rect x="6" y="0.5" width="3" height="3" fill="#61CDFF" />
                  <rect x="6" y="6.5" width="3" height="3" fill="#61CDFF" />
                </svg>
                <span>Ver todos jogos</span>
              </a>
              <a href="#">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.0403 10.5835C22.3003 10.5942 22.7114 10.2367 22.8662 10.002C23.4535 9.23917 22.5352 7.77216 20.3837 6.65723C21.2165 5.08352 21.7985 3.66986 22.0868 2.65628C22.2469 2.10149 22.1402 1.76541 22.1081 1.70673C22.028 2.19751 21.366 3.97926 19.8445 6.39583C18.6699 5.86771 17.1911 5.45161 15.4453 5.2809C15.0235 4.48605 13.8062 2.2882 12.605 1.10925C11.8148 0.335734 11.1849 0.047666 10.6883 0.0103239C10.037 -0.0643605 9.62592 0.282388 9.40169 0.52778C8.59553 1.39732 8.25918 2.82166 8.22715 4.47005C7.88546 3.88857 7.42098 3.31777 6.89244 3.25376H6.88176C5.91009 3.08839 5.08257 4.62475 5.19469 7.06266C3.3955 7.12667 1.86325 7.33472 0.832858 7.59078C0.36838 7.70814 0.0694049 7.9322 0 8.04422C0.0480495 8.02822 1.05175 7.61212 5.2374 7.61212C5.48298 10.098 6.63083 12.3866 6.45999 11.9812C6.00085 12.7013 4.66614 14.9045 4.23904 16.5636C3.96142 17.6358 4.03616 18.3293 4.24437 18.7721C4.50598 19.3696 5.01317 19.5563 5.3335 19.6256C6.50804 19.8924 7.93351 19.4549 9.40169 18.6334C9.04933 19.2362 8.75035 19.9724 8.97458 20.4792C9.31627 21.4021 11.0621 21.354 13.1229 20.0364C14.0678 21.5461 15.0021 22.7517 15.7389 23.5092C15.8617 23.6372 15.9952 23.7493 16.15 23.84C16.3902 23.9893 16.5504 24 16.5504 24C16.166 23.6853 14.9541 22.2182 13.614 19.695C14.6551 18.9428 15.7549 17.8706 16.78 16.4462C22.5406 16.6596 23.5016 15.2833 23.7258 14.9632C24.4198 14.0456 23.8913 12.2852 21.0403 10.5835ZM17.3886 15.566C18.5044 13.8003 18.8141 12.3866 18.7713 11.2343C20.0794 12.0558 20.987 12.9947 21.0724 13.9923C21.1258 14.6004 20.6933 15.358 17.3886 15.566ZM10.1651 18.18C10.6243 17.8866 11.0834 17.5665 11.5372 17.2197C11.8522 17.8439 12.1779 18.4414 12.5036 19.0122C10.5976 20.0364 9.27356 19.6096 10.1651 18.18ZM20.2555 10.1461C19.775 9.89533 19.2625 9.66061 18.734 9.44189C19.1077 8.87642 19.4654 8.30029 19.8017 7.71348C21.6383 8.84441 21.9586 10.2047 20.2555 10.1461ZM13.0908 18.6654C12.8346 18.1319 12.573 17.5611 12.3167 16.9583C14.3455 17.017 15.2477 16.0781 15.2851 16.0034C15.2851 16.0088 14.1105 16.7343 12.3487 16.5796C13.7849 15.3793 15.1196 14.0616 16.3422 12.6426C16.7533 12.1625 17.143 11.6771 17.5114 11.1863C17.4954 11.1703 17.4366 11.0476 16.7372 10.6262C14.3134 13.4535 11.9376 15.2193 10.5068 16.0621C9.5405 15.5393 8.59019 14.5738 7.8908 13.1814C6.95116 11.309 6.48135 9.31919 6.41194 7.74015C6.98854 7.78283 7.59716 7.84151 8.23248 7.92153C7.18607 9.6446 7.55979 10.8769 7.6025 10.9356C7.6025 10.9302 7.55979 9.56992 8.54748 8.14025C8.96924 10.5995 9.67397 13.0054 10.6456 15.3046C10.6883 15.2886 10.7311 15.3473 11.5212 14.9152C10.2879 11.421 9.93557 8.43899 9.9249 6.78526C10.8645 6.20379 12.1832 5.85704 13.7528 5.94773C15.8457 6.07042 17.805 6.66256 19.2091 7.38807C18.8728 7.87885 18.5097 8.38564 18.1147 8.90843C17.143 7.13734 15.8991 6.84928 15.8243 6.85994C15.8296 6.85994 17.0416 7.52143 17.773 9.0738C16.0112 8.42832 14.2013 7.9322 12.3594 7.58545C11.7454 7.47342 11.1315 7.3774 10.5122 7.30272C10.5068 7.32405 10.4267 7.38807 10.4107 8.25761C14.0625 8.9351 16.8227 10.1301 18.2588 10.9409C18.2962 12.0452 17.9331 13.3628 17.0683 14.6698C15.9151 16.4089 14.4202 17.8119 13.0908 18.6654ZM14.3775 5.21156C12.2847 5.13154 10.9233 5.5583 9.93557 6.18245C10.0317 3.72854 10.9339 2.60294 11.7294 2.65095C12.5196 2.44823 14.3027 5.09419 14.3775 5.21156ZM8.24316 5.35559C8.26452 5.92106 8.31791 6.50786 8.39265 7.10534C7.70928 7.06799 7.04192 7.04666 6.40126 7.04666C6.39593 7.19602 6.39593 4.65676 7.55979 4.72077H7.56513C7.83741 4.76878 8.06698 5.04085 8.24316 5.35559ZM6.92981 12.9521C7.90148 14.8138 8.96391 15.7901 9.98896 16.3449C7.7947 17.5078 6.35321 17.2837 6.00619 16.5582C5.99551 16.5422 5.48298 15.8327 6.92981 12.9521Z"
                    fill="#61CDFF"
                  />
                </svg>
                <span>Aplicativo Battle.net</span>
              </a>
              <a href="#">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1 10V10C1 5.029 5.029 1 10 1V1C14.971 1 19 5.029 19 10V10C19 14.971 14.971 19 10 19V19C5.029 19 1 14.971 1 10Z"
                    stroke="#61CDFF"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10 14V6"
                    stroke="#61CDFF"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M13 11L10 14L7 11"
                    stroke="#61CDFF"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span>Downloads</span>
              </a>
              <a href="#">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M19.849 16.396C20.579 15.096 21 13.598 21 12C21 7.029 16.971 3 12 3C7.029 3 3 7.029 3 12C3 16.971 7.029 21 12 21C13.598 21 15.096 20.579 16.396 19.849L21 21L19.849 16.396Z"
                    stroke="#61CDFF"
                    stroke-width="1.5882"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11.823 12.323C11.921 12.225 12.079 12.225 12.177 12.323C12.275 12.421 12.275 12.579 12.177 12.677C12.079 12.775 11.921 12.775 11.823 12.677C11.726 12.579 11.726 12.421 11.823 12.323"
                    stroke="#61CDFF"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7.82299 12.323C7.92099 12.225 8.07899 12.225 8.17699 12.323C8.27499 12.421 8.27499 12.579 8.17699 12.677C8.07899 12.775 7.92099 12.775 7.82299 12.677C7.72599 12.579 7.72599 12.421 7.82299 12.323"
                    stroke="#61CDFF"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15.823 12.323C15.921 12.225 16.079 12.225 16.177 12.323C16.275 12.421 16.275 12.579 16.177 12.677C16.079 12.775 15.921 12.775 15.823 12.677C15.726 12.579 15.726 12.421 15.823 12.323"
                    stroke="#61CDFF"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span>Fóruns dos jogos</span>
              </a>
            </Footer>
          </Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <Trigger>
            Esportes <CaretDown />{" "}
          </Trigger>
          <Content heigth={440}>
            <MenuSportsContainer>
              {MenuSports.map((item, index) => {
                return (
                  <MenuItemSports key={index} href="#">
                    <img src={item.img} alt={item.name} />
                    <p>{item.name}</p>
                  </MenuItemSports>
                );
              })}
            </MenuSportsContainer>
            <FooterSports>
              <a href="#">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13 16.5H11C8.791 16.5 7 14.709 7 12.5V4.5C7 3.948 7.448 3.5 8 3.5H16C16.552 3.5 17 3.948 17 4.5V12.5C17 14.709 15.209 16.5 13 16.5Z"
                    stroke="#61CDFF"
                    stroke-width="1.5"
                  />
                  <path d="M12 16.5V20.5" stroke="#61CDFF" stroke-width="1.5" />
                  <path
                    d="M9 20.5H15"
                    stroke="#61CDFF"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M17 6.5H20C20.552 6.5 21 6.948 21 7.5V9.5C21 11.157 19.657 12.5 18 12.5H17"
                    stroke="#61CDFF"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7 6.5H4C3.448 6.5 3 6.948 3 7.5V9.5C3 11.157 4.343 12.5 6 12.5H7"
                    stroke="#61CDFF"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <span>Torneios da comunidade</span>
              </a>
            </FooterSports>
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
