import { Spinner, Text, GridItem, SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGamesLocal";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { error, games, isLoading } = useGames();

  return (
    <>
      {isLoading && <Spinner />}
      {error && <Text color={"tomato"}>{error}</Text>}
      <SimpleGrid
        columns={{
          sm: 1,
          md: 2,
          lg: 3,
          xl: 4,
        }}
        spacing={20}
      >
        {games.map((game) => (
          <GridItem w="100%">
            <GameCard game={game} />
          </GridItem>
        ))}
      </SimpleGrid>
      {}
    </>
  );
};

export default GameGrid;
