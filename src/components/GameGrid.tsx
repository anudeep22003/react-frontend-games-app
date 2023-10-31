import { Text, GridItem, SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
// import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import SkeletonCard from "./SkeletonCards";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {
  const { error, data, isLoading } = useGames();

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

  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text color={"tomato"}>{error}</Text>}
      <SimpleGrid
        columns={{
          sm: 1,
          md: 2,
          lg: 3,
          xl: 3,
        }}
        spacing={20}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer>
              <SkeletonCard key={skeleton} />
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GridItem>
            <GameCardContainer>
              <GameCard game={game} />
            </GameCardContainer>
          </GridItem>
        ))}
      </SimpleGrid>
      {}
    </>
  );
};

export default GameGrid;
