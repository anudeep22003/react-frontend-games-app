import { Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { data } = useGenres();
  return (
    <>
      <ul>
        {data.map((g) => (
          <li key={g.id}>
            <Text>{g.name}</Text>
          </li>
        ))}
      </ul>
    </>
  );
};

export default GenreList;
