// add interface for the ai response and the prompts
export interface PromptState {
    lastResponse: string;
    lastPrompt: string;
    conversation: Conversation[];
    aiModel?: string;
    isStarted: boolean;
}

export interface Conversation {
    role: string;
    content: string;
}
// add interface for the conversation component
