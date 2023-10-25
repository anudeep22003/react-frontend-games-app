import { useEffect, useState } from "react";
import axiosClient, { AxiosError } from "../services/api-client-local";
import { CanceledError } from "axios";
import Game from "../types/Game";

type FetchGameResponse = {
  count: number;
  // next: string,
  // previous: string,
  results: Array<Game>;
};

const useGames = (urlEndpoint: string = "/games") => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);

    // make request and get the promise

    // ! change this when you want to make actual api calls, this is just to cache
    axiosClient
      .get<FetchGameResponse>("../../data/SampleResponse.json", {
        signal: controller.signal,
      })
      .then((res) => {
        setLoading(false);
        setGames(res.data.results);
        setError("");
      })
      .catch((err: AxiosError) => {
        setLoading(false);
        if (err instanceof CanceledError) return;
        setError(err.message);
      });
    return () => controller.abort();
  }, [urlEndpoint]);

  // return all the functions and values that you are going to need in the main app
  return { games, setGames, error, isLoading };
};

export default useGames;
