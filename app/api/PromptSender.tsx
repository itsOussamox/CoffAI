// server action that take the prompt and send it to the AI model
'use server';
import { Conversation } from "@/utils/types";

export const PromptSender = async (conversation: Conversation[]) => {
    console.log(conversation)
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer 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`,
        },
        body: JSON.stringify({
            "model": "openchat/openchat-7b:free",
            // "model": "mistralai/mistral-7b-instruct:free",
            "messages": conversation,
            "max_tokens": 60,
            "temperature": 0.7,
        }),

    });
    console.log("Error ?? ", response.status);
    return await response.json();
}

