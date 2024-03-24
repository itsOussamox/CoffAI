// add interface for the ai response and the prompts
export interface PromptState {
    lastResponse: string;
    lastPrompt: string;
    conversation: Conversation[];
    aiModel?: string;
    isStarted: boolean;
}

interface Conversation {
    queue?: boolean;
    isCoffAI: boolean;
    message: string;
}
// add interface for the conversation component
