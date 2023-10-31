import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { data } = useGenres();
  return (
    <>
      <List py={5}>
        {data.map((g) => (
          <ListItem py={1}>
            <HStack key={g.id}>
              <Image
                src={g.image_background}
                boxSize={"32px"}
                borderRadius={8}
              />
              <Text fontSize={"lg"}>{g.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
