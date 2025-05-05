import axios from "axios";
import { BACKEND_API } from "./env";

const authBackend = axios.create({
  baseURL: BACKEND_API,
});

export default authBackend;