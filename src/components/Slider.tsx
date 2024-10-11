"use client";
import { MENU_DATA } from "@/data/menu";
import Icon from "./Icon";
import { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";

export default function Slider() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const pathname = location.pathname;
    const index = MENU_DATA.findIndex((item) => item.link === pathname);
    if (index > -1) {
      setActive(index);
    }
  }, []);
  const offsetY = useMemo(() => active * 54, [active]);

  return (
    <section className='bg-[#161717] py-[30px] h-full flex flex-col w-[100px] justify-start items-center overflow-hidden relative'>
      <div className='flex flex-col w-[100px] justify-start items-center'>
        <div
          className={cn(
            "bg-black rounded-l-xl h-[54px] w-[80%] absolute right-0 transform-gpu transition-all duration-300 ease-in-out"
          )}
          style={{ transform: `translateY(${offsetY}px)` }}
        ></div>
        {MENU_DATA.map((item, index) => (
          <div
            key={item.title}
            onClick={() => setActive(index)}
            className='flex-none flex justify-center items-center h-[54px] w-full cursor-pointer '
          >
            <Icon name={item.icon} />
          </div>
        ))}
      </div>
    </section>
  );
}
