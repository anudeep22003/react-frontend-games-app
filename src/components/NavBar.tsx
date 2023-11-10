import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/Logo/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

type Props = {
  setSearchString: (searchValue: string) => void;
};

const NavBar = ({ setSearchString }: Props) => {
  return (
    <>
      <HStack>
        <Image src={logo} boxSize={"60px"} />
        <SearchInput setSearchString={setSearchString} />
        <ColorModeSwitch></ColorModeSwitch>
      </HStack>
    </>
  );
};

export default NavBar;
