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
    client.on(event.id, async (...args) => {
      const properties = {
        client,
        log: (...args: unknown[]) => {
          console.log(`[/] [${event.id}]`, ...args);
        }
      };

      try {
        await event.exec(properties, ...args);
      } catch (error) {
        properties.log("Uncaught Error! >", error);
      }
    });
  }
}
