import {
  Awaitable,
  Client,
  ChatInputCommandInteraction,
  SlashCommandBuilder
} from "discord.js";

type LoggerFunction = (...args: unknown[]) => void;
export interface CommandProperties {
  interaction: ChatInputCommandInteraction;
  client: Client;
  log: LoggerFunction;
}
export type CommandExec = (properties: CommandProperties) => Awaitable<unknown>;
export type CommandMeta =
  | SlashCommandBuilder
  | Omit<SlashCommandBuilder, "addSubcommand" | "addSubcommandGroup">;

export interface Command {
  meta: CommandMeta;
  exec: CommandExec;
}
export interface CommandCategory {
  name: string;
  commands: Command[];
}
