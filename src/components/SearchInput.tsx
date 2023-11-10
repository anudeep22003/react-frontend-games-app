import { Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

type Props = {
  setSearchString: (searchValue: string) => void;
};

const SearchInput = ({ setSearchString }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (ref.current) setSearchString(ref.current.value);
        }}
      >
        <InputGroup>
          {/* <InputLeftAddon children={<Icon as={BsSearch} />} /> */}
          <InputLeftAddon children={<BsSearch />} />
          <Input
            borderRadius={20}
            variant={"outline"}
            placeholder="Search games..."
            ref={ref}
          ></Input>
        </InputGroup>
      </form>
    </>
  );
};

export default SearchInput;
