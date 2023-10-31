import useGenres from "../hooks/useGenres";
import { Text } from "@chakra-ui/react";

const GenreList = () => {
  const { genres } = useGenres();
  console.log(genres);
  return (
    <>
      <ul>
        {genres.map((g) => (
          <li key={g.id}>
            <Text>{g.name}</Text>
          </li>
        ))}
      </ul>
    </>
  );
};

export default GenreList;
