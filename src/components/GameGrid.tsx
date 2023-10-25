import { useEffect, useState } from "react";
import axiosClient from "../services/api-client";
import { Spinner, Text } from "@chakra-ui/react";

type Game = {
  id: number;
  name: string;
};

type FetchGameResponse = {
  count: number;
  // next: string,
  // previous: string,
  results: Array<Game>;
};

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // set loading to true the start of a request
    setLoading(true);

    // make the actual request to the endpoint
    axiosClient
      .get<FetchGameResponse>("/gameds", {})
      //if everything goes well, complete loading and set the games
      .then((res) => {
        setLoading(false);
        setGames(res.data.results);
      })
      // catch error if something goes wrong
      .catch((err) => {
        setLoading(false);
        setErr(err.message);
      });
  }, []);

  return (
    <>
      {loading && <Spinner />}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
      {err && <Text color={"tomato"}>Something went wrong {err}</Text>}
      {}
    </>
  );
};

export default GameGrid;
