import genresLocal from "../../data/genresLocal";

// const useGenres = () => useData<Genre>("/genres");
const useGenres = () => ({ data: genresLocal, isLoading: false, error: "" });
export default useGenres;
