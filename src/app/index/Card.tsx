import CardGreen from "@/assets/card-green.svg";
import CardYellow from "@/assets/card-yellow.svg";
import CardPink from "@/assets/card-pink.svg";

interface Props {
  data: {
    title: string;
    description: string;
    link: string;
  }[];
}
function CardItem(props: { index: number; total: number }) {
  const { index, total } = props;
  if (index === 0) return <CardGreen />;
  if (index === total - 1) return <CardPink />;
  return <CardYellow />;
}
export default function Card(props: Props) {
  const { data } = props;

  return (
    <div className='flex w-full mt-5'>
      {data.map((item, index) => (
        <div
          className='flex-auto relative flex justify-center'
          key={item.title}
        >
          <CardItem index={index} total={data.length} />
          <div className='absolute h-full flex flex-col justify-between top-0 left-10 py-6'>
            <div className='text-base font-bold'>{item.title}</div>
            <div className='text-3xl font-bold'>{item.description}</div>
            <a className='text-xs' href={item.link}>
              View entire list
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
