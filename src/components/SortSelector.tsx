import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

type Props = {
  sortValue: string | null;
  setSelectedSort: (sortValue: string, sortLabel: string) => void;
};

const SortSelector = ({ sortValue, setSelectedSort }: Props) => {
  const sortOptions = [
    { label: "Name", value: "name" },
    { label: "Release Date", value: "-released" },
    { label: "Added Date", value: "-added" },
    { label: "Created Date", value: "-created" },
    { label: "Updated Date", value: "-updated" },
    { label: "Average Rating", value: "-rating" },
    { label: "Metacritic Rating", value: "-metacritic" },
  ];

  const currentSortObj = () =>
    sortOptions.find((opt) => opt.value === sortValue);
  return (
    <>
      <Menu>
        <MenuButton margin={4} as={Button} rightIcon={<BsChevronDown />}>
          {sortValue ? `Order by: ${currentSortObj()?.label}` : "Order By"}
        </MenuButton>
        <MenuList>
          <MenuItem key={-1} onClick={() => setSelectedSort("", "")}>
            Remove Sort
          </MenuItem>
          {sortOptions.map(({ label, value }, idx) => (
            <MenuItem key={idx} onClick={() => setSelectedSort(value, label)}>
              {label}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default SortSelector;
