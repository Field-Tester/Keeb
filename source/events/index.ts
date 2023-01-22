import { Event } from "../types";
import ready from "./ready";
import interactionCreate from "./interactionCreate";

const Events: Event<any>[] = [ready, interactionCreate];
export default Events;
