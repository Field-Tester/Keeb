import { ClientEvents, Awaitable, Client } from "discord.js";

type LoggerFunction = (...args: unknown[]) => void;
export interface EventProperties {
  client: Client;
  log: LoggerFunction;
}

export type EventKeys = keyof ClientEvents;
export type EventExecution<T extends EventKeys> = (
  properties: EventProperties,
  ...args: ClientEvents[T]
) => Awaitable<unknown>;
export interface Event<T extends EventKeys> {
  id: T;
  exec: EventExecution<T>;
}
