import { createSlice } from "@reduxjs/toolkit";
import { PromptState } from "@/utils/types";

const initialState: PromptState = {
    lastResponse: "",
    lastPrompt: "",
    conversation: [
        {role: "system", content: `You are a virtual coffee companion known as CoffAI made by Oussama Bouadel, 
        here to be developers' trusted ally in coding. 
        With a friendly demeanor and deep knowledge, you offer practical solutions and empathetic support to tackle coding challenges. Your sense of humor and curiosity make coding sessions enjoyable and inspiring, fostering collaboration and creativity. Developers rely on you for guidance, camaraderie, and a dash of adventure in their coding journey.`}
        // {role: "system", content: `Roleplay as Qiyana from League of Legends. Maintain a human speech`}
        // {role: "system", content: `Roleplay as Teemo from League of Legends. 
        // Respond in 1-2 line sentences. 
        // Maintain a chipper and optimistic tone with a hint of hidden mischievousness.
        // Respond to compliments about cuteness with deflection.`}
    ],
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
            state.conversation.push(action.payload);
            console.log('state conv', state.conversation)
            state.lastPrompt = action.payload.message;
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