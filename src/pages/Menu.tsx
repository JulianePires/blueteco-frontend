import { Header } from "../components/Header";
import { PATHS } from "../constants";

const Menu: React.FC = () => {
  return <Header activePath={PATHS.MENU} />;
};

export default Menu;
