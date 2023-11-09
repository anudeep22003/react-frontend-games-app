import { GameQuery } from "../App";
import Game from "../types/Game";
import useData from "./useData";

const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortValue,
      },
    },
    [gameQuery],
  );

export default useGames;
