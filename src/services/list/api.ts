import { client } from "..";
import { ResUserList } from "./types";

export const getUsersList = async () => {
  const response = await client.get<ResUserList>(`users/`);
  return response.data;
};
