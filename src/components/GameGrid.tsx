import { Spinner, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";

const GameGrid = () => {
  const { error, games, isLoading } = useGames();

  return (
    <>
      {isLoading && <Spinner />}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
      {error && <Text color={"tomato"}>{error}</Text>}
      {}
    </>
  );
};

export default GameGrid;
