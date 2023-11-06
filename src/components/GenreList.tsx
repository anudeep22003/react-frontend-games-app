import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import Genre from "../types/Genre";

type Props = {
  setSelectedGenre: (genre: Genre) => void;
};

const GenreList = ({ setSelectedGenre: setSelectedFilter }: Props) => {
  const { data, isLoading, error } = useGenres();
  if (isLoading) return <Spinner />;
  if (error) return null;
  return (
    <>
      <List py={5}>
        {data.map((g) => (
          <ListItem key={g.id} py={1}>
            <HStack>
              <Image
                src={g.image_background}
                boxSize={"32px"}
                borderRadius={8}
              />
              <Button variant={"link"} onClick={() => setSelectedFilter(g)}>
                {g.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
