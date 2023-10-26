import { Spinner, Text, GridItem, SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGamesLocal";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { error, games, isLoading } = useGames();

  // ! can remove later, just some code to find unique list of platforms
  // ! took a lot longer than I want to admit to remove list nesting
  //   const all_platforms = games.map((game) =>
  //     game.parent_platforms.map(({ platform }) => platform.slug),
  //   );
  //   //   console.log(all_platforms);
  //   const all_platforms_list = all_platforms.flat(1);
  //   //   const uniquePlatforms = new Set(all_platforms)
  //   const set_list = new Set(all_platforms_list);

  //   for (const i of set_list.keys()) {
  //     console.log(i);
  //   }

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
