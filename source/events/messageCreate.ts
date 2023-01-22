import { event } from "../utils";

export default event("messageCreate", ({ log }, message) => {
  log(`Message sent: ${message.content}`);
});
