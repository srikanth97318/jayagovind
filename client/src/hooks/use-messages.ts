import { useMutation } from "@tanstack/react-query";
import { api, type MessageInput, type MessageResponse } from "@shared/routes";

export function useSendMessage() {
  return useMutation<MessageResponse, Error, MessageInput>({
    mutationFn: async (data: MessageInput) => {
      const res = await fetch(api.messages.create.path, {
        method: api.messages.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        let errorMessage = "Failed to send message";
        try {
          const errorData = await res.json();
          errorMessage = errorData.message || errorMessage;
        } catch (e) {
          // Ignore parsing error if response isn't JSON
        }
        throw new Error(errorMessage);
      }

      return api.messages.create.responses[201].parse(await res.json());
    },
  });
}
