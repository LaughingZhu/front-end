"use client";
import { useMemo, useState } from "react";
import { useMedia } from "react-use";
import Card from "./index/Card";
import Chart from "./index/Chart";
import { Calendar } from "@/components/ui/calendar";
import { DateRange } from "react-day-picker";
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
  const [date, setDate] = useState<DateRange>({
    from: new Date(2022, 0, 20),
    to: new Date(2022, 0, 30),
  });

  return (
    <section className='flex h-full px-[36px] flex-auto justify-center items-start overflow-y-auto overflow-x-hidden'>
      <div className='flex flex-col min-h-full justify-start items-start flex-auto'>
        <div className='text-white text-3xl'>Hello LaughingZhu</div>
        <Card data={cardData} />
        <div className='mt-6 flex justify-between items-start w-full'>
          <Chart />
          <Calendar
            mode='range'
            selected={date}
            defaultMonth={date?.from}
            onSelect={() => setDate}
            numberOfMonths={2}
            className='border ml-6 flex-auto rounded-3xl bg-black'
          />
        </div>
      </div>

      {isDesktop && (
        <div className='ml-9 w-[307px] min-h-full px-6 py-7 bg-[#161717] rounded-[32px]'></div>
      )}
    </section>
  );
}
