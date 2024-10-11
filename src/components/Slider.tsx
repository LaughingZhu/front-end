"use client";
import { MENU_DATA } from "@/data/menu";
import Icon from "./Icon";
import { useEffect, useMemo, useState } from "react";
import LogoSvg from "@/assets/logo.svg";
import { cn } from "@/lib/utils";
import { useMedia } from "react-use";

export default function Slider() {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState<null | boolean>(null);
  const isDesktop = useMedia("(min-width: 768px)");
  useEffect(() => {
    if (open === null) {
      setOpen(isDesktop ? true : false);
    }
  }, [isDesktop, open]);

  useEffect(() => {
    const pathname = location.pathname;
    const index = MENU_DATA.findIndex((item) => item.link === pathname);
    if (index > -1) {
      setActive(index);
    }
  }, []);
  const offsetY = useMemo(() => active * 54, [active]);

  return (
    <section
      className={cn(
        "bg-[#161717] py-[30px] h-full flex flex-col justify-between items-center overflow-hidden relative shadow-lg transform-gpu transition-all duration-300 ease-in-out",
        !open ? "w-[100px]" : "w-[180px]"
      )}
    >
      <div className='flex flex-auto flex-col w-full justify-start items-center overflow-auto'>
        <LogoSvg className='w-[47px] h-[47px]' />
        <div className='mt-[38px] flex flex-col w-full justify-start items-center'>
          <div
            className={cn(
              "bg-black text-white rounded-l-xl h-[54px] w-[90%] absolute right-0 transform-gpu transition-all duration-300 ease-in-out"
            )}
            style={{ transform: `translateY(${offsetY}px)` }}
          ></div>
          {MENU_DATA.map((item, index) => (
            <div
              key={item.title}
              onClick={() => setActive(index)}
              className={cn(
                "flex-none flex items-center h-[54px] w-full cursor-pointer z-10",
                open ? "justify-end" : "justify-center"
              )}
            >
              <Icon className={`${item.icon} flex-none`} />
              {open && (
                <div className='ml-[16px] w-[90px] text-white font-bold'>
                  {item.title}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div
        className='w-full flex justify-center pt-[30px] items-center'
        onClick={() => setOpen(!open)}
      >
        <Icon
          className={cn(
            "cursor-pointer",
            open
              ? "icon-[material-symbols--vertical-split-outline-rounded]"
              : "icon-[mdi--reorder-horizontal]"
          )}
        />
      </div>
    </section>
  );
}
