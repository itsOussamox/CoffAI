'use client';
import HomeConv from "@/app/components/HomeConv";
import { LampContainer } from "@/app/components/lamp";
import { store, RootState } from '@/app/states/store';
import { Provider, useDispatch, useSelector } from "react-redux";
export default function MainPage() {
  const isStarted = useSelector((state : RootState) => state.prompt.isStarted);
  return (
      <main className="flex w-full flex-col items-center justify-between text-black dark:text-white">
        {!isStarted ? <><LampContainer /> <HomeConv /></> : null}
      </main>
);
}
