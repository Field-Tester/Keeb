import { InteractionReplyOptions, WebhookEditMessageOptions } from "discord.js";

export const Colors = {
  error: 0xe33327
};

export const Reply = {
  error(message: string): InteractionReplyOptions {
    return {
      ephemeral: true,
      embeds: [
        {
          title: "An error occured!",
          color: Colors.error,
          description: message
        }
      ]
    };
  }
};

export const EditReply = {
  error(message: string): WebhookEditMessageOptions {
    return {
      embeds: [
        {
          title: "An error occured!",
          color: Colors.error,
          description: message
        }
      ]
    };
  }
};
