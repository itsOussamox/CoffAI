'use client';
import { useEffect, useState } from "react";
import { CiLight, CiDark } from "react-icons/ci";
export default function Darkmode() {
    const [dark, setDark] = useState(true);
    useEffect(() => {
        if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');

        } else {
            document.documentElement.classList.remove('dark')
        }
    }, []);
  return (
        <button className="size-[3rem] z-30 rounded-full flex text-center justify-center bg-secondary-bg dark:bg-dsecondary-bg fixed
        bottom-1 right-2 z-1 w-15 hover:opacity-80 darkmode-shadow border-[1px] border-black/5"
        onClick={() => {
            if (document.documentElement.classList.contains('dark')) {
                document.documentElement.classList.remove('dark');
                localStorage.theme = 'light';
                setDark(false);
            } else {
                document.documentElement.classList.add('dark');
                localStorage.theme = 'dark';
                setDark(true);
            }
        }}
        >
            {!dark ? <CiDark className="text-color-cof1 h-full w-[80%]" />
             : <CiLight className="text-color-cof1 h-full w-[80%]" />}
            
        </button>
    );
}