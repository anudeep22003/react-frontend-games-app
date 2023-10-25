import { useEffect, useState } from "react";
import axiosClient, { AxiosError } from "../services/api-client";
import { CanceledError } from "axios";

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

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    // this is for when a user navigates away
    // and so we want to aborb the request rather than complete it
    const controller = new AbortController();
    // set loading to start the request
    setLoading(true);

    // make request and get the promise
    axiosClient<FetchGameResponse>("/games", { signal: controller.signal })
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
  }, []);

  // return all the functions and values that you are going to need in the main app
  return { games, setGames, error, isLoading };
};

export default useGames;
