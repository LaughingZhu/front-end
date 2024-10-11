import { cn } from "@/lib/utils";
interface Props {
  name: string;
}
export default function Icon({ name }: Props) {
  return (
    <span className={cn("mx-6 size-[30px]", "text-[#8C8C8C]", name)}></span>
  );
}
