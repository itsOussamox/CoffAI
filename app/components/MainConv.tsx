
import React from 'react'
import { Input } from './InputConv'
import ChatBox from './ChatBox'
import { useDispatch } from 'react-redux';
import { addConversation } from '../states/promptSlice';
import {PromptSender} from '@/app/api/PromptSender';

export default function  MainConv() {
  const dispatch = useDispatch();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const promptParsed = e.target.value.trim();
    if(promptParsed === '') return;
    dispatch(addConversation({message: e.target.value, isCoffAI: false}));
    e.target.value = '';
    PromptSender(promptParsed)
      .then((response) => {
        console.log(response);
        dispatch(addConversation({message: response.choices[0].message.content, isCoffAI: true}));
      })
  
  }
  return (
    <div className='flex flex-col w-full h-screen items-center justify-end'>
          <ChatBox />
        <div className="w-[65%]  mb-5">
            <Input onKeyDown={(e) => {if(e.key === 'Enter') handleSubmit(e)}}
            type="text" placeholder="Talk to CoffAI" />
        </div>
    </div>
  )
}
