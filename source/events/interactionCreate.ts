import { event, EditReply, Reply } from "../utils";
import { Command } from "../types";
import commands from "../commands";

const commandList = commands.map(({ commands }) => commands).flat();
const commandMap = new Map<string, Command>(
  commandList.map((command) => [command.meta.name, command])
);

export default event(
  "interactionCreate",
  async ({ log, client }, interaction) => {
    if (!interaction.isChatInputCommand()) return;

    try {
      const commandName = interaction.commandName;
      const command = commandMap.get(commandName);
      if (!command)
        throw new Error(`[e] Command ${commandName} was not found...`);

      await command.exec({
        client,
        interaction,
        log(...args) {
          log(`[${command.meta.name}]`, ...args);
        }
      });
    } catch (error) {
      log("Command error >", error);

      if (interaction.deferred) return await interaction.editReply(EditReply.error("Something went wrong :("));
      return await interaction.reply(Reply.error("Something went wrong :("));
    }
  }
);
