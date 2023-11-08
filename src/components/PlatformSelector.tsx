import {
  Button,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatform";
import Platform from "../types/Platforms";

type Props = {
  setSelectedPlatform: (platform: Platform | null) => void;
  selectedPlatform: Platform | null;
};

const PlatformSelector = ({ setSelectedPlatform, selectedPlatform }: Props) => {
  const { data, error } = usePlatforms();
  if (error) return;
  return (
    <Menu>
      <MenuButton margin={4} as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform ? selectedPlatform.name : "Platform"}
      </MenuButton>
      <MenuList>
        <MenuItem key={-1} onClick={() => setSelectedPlatform(null)}>
          All Platforms
        </MenuItem>
        <MenuDivider />
        {data.map((platform) => (
          <MenuItem
            onClick={() => setSelectedPlatform(platform)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
