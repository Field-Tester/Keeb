import { Keys } from "../types";

const ClientKeys: Keys = {
  token: process.env.TOKEN ?? "nothing",
  testGuild: process.env.TEST_GUILD ?? "nothing"
};

if (Object.values(ClientKeys).includes("nothing")) {
  throw new Error("[e] Not all enviroment variables are defined.");
}

export default ClientKeys;
