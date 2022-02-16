import { MemoizedHeader } from "../components/Header";
import { PATHS } from "../constants";

const Menu: React.FC = () => {
  return <MemoizedHeader activePath={PATHS.MENU} />;
};

export default Menu;
