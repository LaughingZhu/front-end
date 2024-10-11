import { cn } from "@/lib/utils";
interface Props {
  className: string;
}
export default function Icon({ className }: Props) {
  return (
    <span className={cn("size-[30px]", "text-[#8C8C8C]", className)}></span>
  );
}
