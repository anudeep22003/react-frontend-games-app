import { useEffect, useState } from "react";
import Genre from "../types/Genre";
import axiosClient, { AxiosError } from "../services/api-client";
import { CanceledError } from "axios";

type FetchGenreResponse = {
  count: number;
  results: Genre[];
};

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);

    axiosClient
      .get<FetchGenreResponse>("/genres", { signal: controller.signal })
      .then((res) => {
        setLoading(false);
        setGenres(res.data.results);
        console.log(res);
        setError("");
      })
      .catch((err: AxiosError) => {
        setLoading(false);
        if (err instanceof CanceledError) return;
        setError(err.message);
      });
    return () => controller.abort();
  }, []);

  return { genres, setGenres, error, isLoading };
};

export default useGenres;
