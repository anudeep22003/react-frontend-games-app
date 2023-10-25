import axios from "axios";
import { AxiosError } from "axios";

const instance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "53977c42a03a4302a295d9bd99a7a41e",
  },
});

export default instance;
export { AxiosError };
