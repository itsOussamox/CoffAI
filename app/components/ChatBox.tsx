import React, { useEffect } from 'react'
import { store, RootState } from '@/app/states/store';
import { useSelector, useDispatch } from 'react-redux';
import { addConversation } from '../states/promptSlice';
import { motion } from 'framer-motion';
import { TypewriterEffect } from './typewriter-effect';

const LoadingPrompt = () => {
    return (
        <div className='flex flex-row py-2 px-4 justify-center items-center bg-dsecondary-bg  ml-2 rounded-xl max-w-[70px] min-h-[35px] gap-[2px]'>
            <div className='h-2 w-2 bg-white/60 rounded-full animate-bounce [animation-delay:-0.3s]'></div>
            <div className='h-2 w-2 bg-white/60 rounded-full animate-bounce [animation-delay:-0.15s]'></div>
            <div className='h-2 w-2 bg-white/60 rounded-full animate-bounce'></div>
        </div>
    )
}

export default function ChatBox() {
    const UserMessageStyle = "text-right py-2 px-4 max-w-[55%] inline-block rounded-xl mr-2 bg-dsecondary-bg self-end";
    const CoffAIStyle = "text-left py-2 px-4 max-w-[55%] bg-dsecondary-bg ml-2 rounded-xl";
    const dispatch = useDispatch();
    const {conversation, lastPrompt} = useSelector((state: RootState) => state.prompt);

    useEffect(() => {
        // handle the last prompt and start the conversation when the component mounts
        dispatch(addConversation({message: "Hello, I'am CoffAI.", isCoffAI: true}))
    }, [])

    const getWords = (sentence: string) => {
        

        const words = sentence.split(' ');
        return words.map((word) => {
            return {
                text: word
            }
        })
    }
  return (
    <div className='h-[80%] w-[75%] flex flex-col justify-end mb-8 gap-3'>
        {conversation.map((message, index) => (
            message.isCoffAI ? 
            <TypewriterEffect key={index} words={getWords(message.message)} className={CoffAIStyle} />: 
            <div key={index} className={UserMessageStyle}>{message.message}</div>
        ))}
        {/* check if last message is bot if its not add a loading prompt */}
        {!conversation[conversation.length - 1].isCoffAI && <LoadingPrompt/>}
    </div>
  )
}
