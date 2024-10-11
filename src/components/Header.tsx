import Icon from "./Icon";
import { Input } from "./ui/input";

export default function Header() {
  return (
    <div className='flex p-[32px] w-full justify-between items-center'>
      <div className='flex bg-[#545454]  items-center rounded-2xl py-3 px-6'>
        <Icon className='icon-[ic--baseline-search] text-white' />
        <Input
          placeholder='Search here...'
          className='ml-5 outline-none border-none shadow-none focus-visible:border-none focus:outline-none focus:ring-0 focus-visible:outline-none focus:border-none focus-visible:ring-0'
          type='text'
        />
      </div>
    </div>
  );
}
