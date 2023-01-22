import { Client } from "discord.js";
import { Event, EventExecution, EventKeys } from "../types/events";

export function event<T extends EventKeys>(
  id: T,
  exec: EventExecution<T>
): Event<T> {
  return { id, exec };
}

export function registerEvents(client: Client, events: Event<any>[]): void {
  for (const event of events) {
    client.on(
      event.id,
      event.exec.bind(null, {
        client,
        log: (...args) => console.log(`[/] [${event.id}]`, ...args),
      })
    );
  }
}
