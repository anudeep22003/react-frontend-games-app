import { Text, HStack, Switch, useColorMode } from "@chakra-ui/react";
import { color } from "framer-motion";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack>
      <Switch isChecked={colorMode === "dark"} onChange={toggleColorMode} />
      <Text fontWeight={"semibold"}>
        {colorMode === "light" ? "Dark" : "Light"}
      </Text>
    </HStack>
  );
};

export default ColorModeSwitch;
