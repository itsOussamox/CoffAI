'use client';
import Card from "./CardSug";
import { Input } from "./InputConv";
import { TextGenerateEffect } from "./text-generate-effect";
//import a send image icon from react-icons
import { AiOutlineSend } from 'react-icons/ai';
import { store, RootState } from '@/app/states/store';
import { useDispatch } from "react-redux";

export default function HomeConv(){
    // add a callback function to handle submit prompt
    const dispatch = useDispatch();


    return (
        <div className="overflow-hidden flex flex-col h-full pt-[3%] w-screen items-center justify-center dark:text-white">
            <TextGenerateEffect words="Welcome to CoffAI" className="text-tsize-2xl font-bold text-center  "/>
            <TextGenerateEffect delay={0.4} words="Talk freely with ☕ AI" className="text-center text-tsize-base text-white/60 tracking-wide"/>
            <div className="mt-[5%] w-[40%] min-w-[100px] flex justify-end">
                <div className="w-full">
                    <Input type="text" placeholder="Search for a coffee..." 
                    className=" "/>
                </div>
                <AiOutlineSend className="w-6 h-6 text-cof1 my-auto hover:cursor-pointer"/>
            </div>
            <div className="mt-[2%] text-center text-tsize-sm text-white/40 tracking-wide">You may ask</div>
            <Card />
        </div>
    )
}