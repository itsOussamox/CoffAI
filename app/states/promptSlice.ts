import { createSlice } from "@reduxjs/toolkit";
import { PromptState } from "@/utils/types";

const initialState: PromptState = {
    lastResponse: "",
    lastPrompt: "",
    conversation: [],
    aiModel: "",
    isStarted: false,
};

export const promptSlice = createSlice({
    name: "prompt",
    initialState,
    reducers: {
        setLastResponse: (state, action) => {
            state.lastResponse = action.payload;
        },
        setLastPrompt: (state, action) => {
            state.lastPrompt = action.payload;
        },
        addConversation: (state, action) => {
            state.conversation.push(action.payload);
        },
        setAIModel: (state, action) => {
            state.aiModel = action.payload;
        },
    },
});


export const { setLastResponse, setLastPrompt, addConversation, setAIModel } = promptSlice.actions;