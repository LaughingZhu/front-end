"use client";
import { useMemo } from "react";
import { useMedia } from "react-use";
import Card from "./index/Card";
export default function Home() {
  const isDesktop = useMedia("(min-width: 1440px)");
  const cardData = useMemo(
    () => [
      {
        title: "Weekly Balance",
        description: "$20k",
        link: "/",
      },
      {
        title: "Orders In Line",
        description: "750",
        link: "/",
      },
      {
        title: "New Clients",
        description: "150",
        link: "/",
      },
    ],
    []
  );
  return (
    <section className='flex h-full px-[36px] flex-auto justify-center items-start overflow-y-auto overflow-x-hidden'>
      <div className='bor flex flex-col min-h-full justify-start items-start flex-auto'>
        <div className='text-white text-3xl'>Hello LaughingZhu</div>
        <Card data={cardData} />
      </div>

      {isDesktop && (
        <div className='ml-9 w-[307px] min-h-full px-6 py-7 bg-[#161717] rounded-[32px]'>
          right
        </div>
      )}
    </section>
  );
}
