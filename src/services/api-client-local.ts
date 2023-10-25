import axios from "axios";
import { AxiosError } from "axios";

const instance_local = axios.create();

export default instance_local;
export { AxiosError };
