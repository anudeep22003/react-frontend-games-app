import Game from "../types/Game";
import useData from "./useData";

const useGames = () => useData<Game>("../../data/SampleResponse.json");

export default useGames;
