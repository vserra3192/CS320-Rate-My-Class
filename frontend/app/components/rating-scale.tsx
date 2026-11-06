import Image from "next/image";

export function RatingScale({ amount, input = false }: { amount: number; input?: boolean }) {
  return (
    <div className="relative h-4 w-full" aria-hidden="true">
      <div className="absolute top-[5px] left-2 right-2 h-[6px] rounded-[3px] bg-[#dfe7df]">
        <div className="h-full rounded-[3px] bg-[#16734c]" style={{ width: `${amount}%` }} />
        {input && [0, 25, 50, 75, 100].map(position => (
          <Image key={position} src="/figma/67336.svg" alt="" width={4} height={4} className="absolute top-px -translate-x-1/2" style={{ left: `${position}%` }} unoptimized />
        ))}
        <Image src={input ? "/figma/62b79.svg" : "/figma/999b7.svg"} alt="" width={14} height={14} className="absolute -top-1 -translate-x-1/2" style={{ left: `${amount}%` }} unoptimized />
      </div>
    </div>
  );
}
