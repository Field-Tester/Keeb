import { Client, GatewayIntentBits } from "discord.js";
import { registerEvents } from "../utils";
import Events from "../events";
import ClientKeys from "../keys";

const Resolver = new Client({
  intents: 32767
})

registerEvents(Resolver, Events)

Resolver.login(ClientKeys.token).catch((error) => {
  console.error(`[e] Login error! > ${error}`)
  process.exit(1)
})