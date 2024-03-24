// server action that take the prompt and send it to the AI model

export const PromptSender = async (prompt: string) => {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer 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`,
        },
        body: JSON.stringify({
            "model": "mistralai/mistral-7b-instruct:free",
            "messages": [
                {
                    "role": "user",
                    "content": prompt
                }
            ]
        }),
    });
    return await response.json();
}