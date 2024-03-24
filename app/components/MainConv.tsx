
import React from 'react'
import { Input } from './InputConv'
import ChatBox from './ChatBox'
import { useDispatch, useSelector } from 'react-redux';
import { addConversation } from '../states/promptSlice';
import {PromptSender} from '@/app/api/PromptSender';
import { RootState } from '../states/store';
import { Conversation } from '@/utils/types';

export const  getResponse = async (response : any, dispatch : any, conversation? : Conversation[]) => {
  if (response.choices === undefined) return;
  const resContent = response.choices[0];

  console.log('Response :',response);
  if (resContent.message.content === "" && resContent.finish_reason === null)
  {
    console.log ('Encountered an error, trying again.')
    PromptSender(conversation!).then((response) => {getResponse(response, dispatch, conversation);})
      
  }
  else if (resContent.message.content === '') {
    dispatch(addConversation({role: 'assistant', content: "I'm sorry, I don't understand."}));
    return;
  }
  else
    dispatch(addConversation({role: 'assistant', content: resContent.message.content}));
}

export default function  MainConv() {
  const {conversation} = useSelector((state: RootState) => state.prompt);
  const dispatch = useDispatch();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const promptParsed = e.target.value.trim();
    if(promptParsed === '') return;
    dispatch(addConversation({ role: 'user', content: e.target.value}));
    e.target.value = '';
    PromptSender(conversation)
      .then((response) => {getResponse(response, dispatch, conversation);})
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
