import { REST, Routes, APIUser } from "discord.js";
import { config } from "dotenv";
import { resolve } from "path";
config({ path: resolve(__dirname, "..", "..", ".env") });

import commands from "../commands";
import keys from "../keys";

const requestBody = commands
  .map(({ commands }) => commands.map(({ meta }) => meta))
  .flat();

const rest = new REST({ version: "10" }).setToken(keys.token);
async function main() {
  const currentUser = (await rest.get(Routes.user())) as APIUser;
  const endpoint =
    process.env.NODE_ENV === "production"
      ? Routes.applicationCommands(currentUser.id)
      : Routes.applicationGuildCommands(currentUser.id, keys.testGuild);

  await rest.put(endpoint, { body: requestBody });
  return currentUser;
}

main()
  .then((user) => {
    const tag = `${user.username}#${user.discriminator}`;
    const response =
      process.env.NODE_ENV == "production"
        ? `[/] Successfully released the commands to production as ${tag}`
        : `[i] Successfully registered commands for development in ${keys.testGuild} as ${tag}`;

    console.log(response);
  })
  .catch(console.error);
