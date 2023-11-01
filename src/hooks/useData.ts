import { useEffect, useState } from "react";
import axiosClient, { AxiosError } from "../services/api-client";
import { CanceledError } from "axios";

type FetchResponse<T> = {
  count: number;
  // next: string,
  // previous: string,
  results: T[];
};

const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    // this is for when a user navigates away
    // and so we want to aborb the request rather than complete it
    const controller = new AbortController();
    // set loading to start the request
    setLoading(true);

    // make request and get the promise

    // ! change this when you want to make actual api calls, this is just to cache
    axiosClient
      .get<FetchResponse<T>>(endpoint, { signal: controller.signal })
      .then((res) => {
        setLoading(false);
        setData(res.data.results);
        setError("");
      })
      .catch((err: AxiosError) => {
        setLoading(false);
        if (err instanceof CanceledError) return;
        setError(err.message);
      });
    return () => controller.abort();
  }, [endpoint]);

  // return all the functions and values that you are going to need in the main app
  return { data, setData, error, isLoading };
};

export default useData;
