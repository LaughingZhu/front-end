import Icon from "./Icon";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Input } from "./ui/input";

export default function Header() {
  return (
    <div className='flex p-[32px] w-full justify-between items-center'>
      <div className='flex bg-[#545454]  items-center rounded-2xl py-1 px-6'>
        <Icon className='icon-[ic--baseline-search] text-white' />
        <Input
          placeholder='Search here...'
          className='outline-none border-none shadow-none focus-visible:border-none focus:outline-none focus:ring-0 focus-visible:outline-none focus:border-none focus-visible:ring-0 text-lg'
          type='text'
        />
      </div>

      <div className='text-white text-lg'>Dashboard</div>
      <div className='w-[256px] flex justify-between items-center'>
        <div className='flex flex-col justify-center items-start text-xs'>
          <div className='text-white leading-tight'>LaughingZhu</div>
          <div className='text-[#5E5E5E] leading-tight'>
            laughingzhu@gmail.com
          </div>
        </div>
        <Avatar>
          <AvatarImage src='https://github.com/shadcn.png' />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}
