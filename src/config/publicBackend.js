import axios from "axios";
import { BACKEND_API } from "./env";

const publicBackend = axios.create({
  baseURL: BACKEND_API,
});

export default publicBackend;