import { Client, GatewayIntentBits } from "discord.js";
import { registerEvents } from "../utils";
import Events from "../events";
import ClientKeys from "../keys";

const Keeb = new Client({
  intents: 32767
});

registerEvents(Keeb, Events);

Keeb.login(ClientKeys.token).catch((error) => {
  console.error(`[e] Login error! > ${error}`);
  process.exit(1);
});
