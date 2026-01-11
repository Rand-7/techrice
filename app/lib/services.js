import { fetchAPI } from "./api";

export async function getServices() {
  return await fetchAPI("/services");
}
