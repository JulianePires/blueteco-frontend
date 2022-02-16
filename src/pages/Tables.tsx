import { MemoizedHeader } from "../components/Header";
import { PATHS } from "../constants";

const Tables: React.FC = () => {
  return <MemoizedHeader activePath={PATHS.TABLES} />;
};

export default Tables;
