import { SlashCommandBuilder } from "discord.js";
import { command } from "../../utils/command";

const meta = new SlashCommandBuilder()
  .setName("ping")
  .setDescription("A sample command!")
  .addStringOption((option) =>
    option
      .setName("message")
      .setDescription("Provide a message to respond with")
      .setMinLength(1)
      .setMaxLength(2000)
      .setRequired(false)
  );

export default command(meta, ({ interaction }) => {
  const message = interaction.options.getString("message");
  return interaction.reply({
    ephemeral: true,
    content: message ?? "**Pong!** 🏓 (no message provided)"
  });
});
