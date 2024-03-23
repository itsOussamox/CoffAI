// add interface for the ai response and the prompts
export interface PromptState {
    lastResponse: string;
    lastPrompt: string;
    conversation: string[];
    aiModel?: string;
    isStarted?: boolean;
}
// add interface for the conversation component
