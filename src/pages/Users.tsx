import { MemoizedHeader } from "../components/Header";
import { PATHS } from "../constants";

const Users: React.FC = () => {
  return <MemoizedHeader activePath={PATHS.USERS} />;
};

export default Users;
