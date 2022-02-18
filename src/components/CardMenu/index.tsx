import { Stack } from "@chakra-ui/react";
import { MENUITEMS } from "../../constants";
import { MemoizedCard } from "./Card";

const CardMenu: React.FC = () => {
  return (
    <Stack
      as="article"
      spacing={[3, "auto"]}
      direction={["column", "row"]}
      alignItems="center"
      wrap={["wrap", "wrap", "wrap", "nowrap"]}
      px={["2em", "2em", "2em", "5em"]}
      my="1.5em"
    >
      {MENUITEMS.map((item, index) => (
        <MemoizedCard
          key={index}
          icon={item.icon}
          name={item.name}
          path={item.path}
        />
      ))}
    </Stack>
  );
};

// const StyledStack = styled(Stack)``;

export { CardMenu };

