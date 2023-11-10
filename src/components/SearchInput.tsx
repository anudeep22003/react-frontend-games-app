import { Icon, Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <>
      <InputGroup>
        {/* <InputLeftAddon children={<Icon as={BsSearch} />} /> */}
        <InputLeftAddon children={<BsSearch />} />
        <Input
          borderRadius={20}
          variant={"outline"}
          placeholder="Search games..."
        />
      </InputGroup>
    </>
  );
};

export default SearchInput;
