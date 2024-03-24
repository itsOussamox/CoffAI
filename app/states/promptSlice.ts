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
        addConversation: (state, action) => {
            state.lastPrompt = action.payload.message;
            state.conversation.push(action.payload);
        },
        setAIModel: (state, action) => {
            state.aiModel = action.payload;
        },
        startConversation: (state) => {
            state.isStarted = true;
        }
    },
});


export const { setLastResponse, addConversation, setAIModel, startConversation } = promptSlice.actions;