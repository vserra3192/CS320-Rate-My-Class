import { RatingScale } from "./rating-scale";
import Image from "next/image";
import Link from "next/link";

const imgArrowUpRight = "/figma/4a824.svg";

type ClassResultProps = {
  code: string;
  title: string;
  professor: string;
  credits: number;
  overall: number;
  reviewCount: number;
  groupWork: number;
  presentations: number;
  inClassWorkload: number;
  outOfClassWorkload: number;
};

export function ClassResult(props: ClassResultProps) {
  return (
    <div className="border-[#dde4dc] border-solid border-t content-stretch flex gap-[24px] items-center overflow-clip px-[24px] py-[26px] relative shrink-0 w-full" data-node-id="25:70" data-name="Class result">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start not-italic overflow-clip relative shrink-0 w-[292px]" data-node-id="25:71" data-name="Course information">
            <p className="font-bold leading-[normal] relative shrink-0 text-[#16734c] text-[12px] whitespace-nowrap" data-node-id="25:72">
            {props.code} · {props.credits} CREDITS
            </p>
            <p className="font-semibold leading-[1.3] min-w-full relative shrink-0 text-[#18332b] text-[18px] w-[min-content]" data-node-id="25:73"><Link href="/ratings" className="hover:underline underline-offset-4">
            {props.title}
            </Link></p>
            <p className="font-normal leading-[normal] relative shrink-0 text-[#69756d] text-[13px] whitespace-nowrap" data-node-id="25:74">
            {props.professor}
            </p>
        </div>
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start leading-[normal] not-italic overflow-clip relative shrink-0 w-[94px] whitespace-nowrap" data-node-id="25:76" data-name="Overall score">
            <p className="font-bold relative shrink-0 text-[#16734c] text-[28px]" data-node-id="25:77">
            {props.overall}
            </p>
            <p className="font-normal relative shrink-0 text-[#69756d] text-[11px]" data-node-id="25:78">
            out of 5
            </p>
            <p className="font-normal relative shrink-0 text-[#69756d] text-[11px]" data-node-id="25:79">
            {props.reviewCount} reviews
            </p>
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[180px]" data-node-id="25:80" data-name="Aggregate rating">
            <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-node-id="25:81" data-name="Rating label">
            <p className="[word-break:break-word] font-bold leading-[normal] not-italic relative shrink-0 text-[#16734c] text-[13px] whitespace-nowrap" data-node-id="25:82">
                {props.groupWork.toFixed(1)} / 5
            </p>
            </div>
            <RatingScale amount={(props.groupWork - 1) * 25} />
            <div className="[word-break:break-word] content-stretch flex font-normal items-start justify-between leading-[normal] not-italic overflow-clip relative shrink-0 text-[#69756d] text-[11px] w-full whitespace-nowrap" data-node-id="25:87" data-name="Scale endpoints">
            <p className="relative shrink-0" data-node-id="25:88">
                1 · Solo
            </p>
            <p className="relative shrink-0" data-node-id="25:89">
                5 · Group
            </p>
            </div>
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[180px]" data-node-id="25:90" data-name="Aggregate rating">
            <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-node-id="25:91" data-name="Rating label">
            <p className="[word-break:break-word] font-bold leading-[normal] not-italic relative shrink-0 text-[#16734c] text-[13px] whitespace-nowrap" data-node-id="25:92">
                {props.presentations.toFixed(1)} / 5
            </p>
            </div>
            <RatingScale amount={(props.presentations - 1) * 25} />
            <div className="[word-break:break-word] content-stretch flex font-normal items-start justify-between leading-[normal] not-italic overflow-clip relative shrink-0 text-[#69756d] text-[11px] w-full whitespace-nowrap" data-node-id="25:97" data-name="Scale endpoints">
            <p className="relative shrink-0" data-node-id="25:98">
                1 · None
            </p>
            <p className="relative shrink-0" data-node-id="25:99">
                5 · A lot
            </p>
            </div>
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[180px]" data-node-id="25:100" data-name="Aggregate rating">
            <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-node-id="25:101" data-name="Rating label">
            <p className="[word-break:break-word] font-bold leading-[normal] not-italic relative shrink-0 text-[#16734c] text-[13px] whitespace-nowrap" data-node-id="25:102">
                {props.inClassWorkload.toFixed(1)} / 5
            </p>
            </div>
            <RatingScale amount={(props.inClassWorkload - 1) * 25} />
            <div className="[word-break:break-word] content-stretch flex font-normal items-start justify-between leading-[normal] not-italic overflow-clip relative shrink-0 text-[#69756d] text-[11px] w-full whitespace-nowrap" data-node-id="25:107" data-name="Scale endpoints">
            <p className="relative shrink-0" data-node-id="25:108">
                1 · Light
            </p>
            <p className="relative shrink-0" data-node-id="25:109">
                5 · Heavy
            </p>
            </div>
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[180px]" data-node-id="25:110" data-name="Aggregate rating">
            <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-node-id="25:111" data-name="Rating label">
            <p className="[word-break:break-word] font-bold leading-[normal] not-italic relative shrink-0 text-[#16734c] text-[13px] whitespace-nowrap" data-node-id="25:112">
                {props.outOfClassWorkload.toFixed(1)} / 5
            </p>
            </div>
            <RatingScale amount={(props.outOfClassWorkload - 1) * 25} />
            <div className="[word-break:break-word] content-stretch flex font-normal items-start justify-between leading-[normal] not-italic overflow-clip relative shrink-0 text-[#69756d] text-[11px] w-full whitespace-nowrap" data-node-id="25:117" data-name="Scale endpoints">
            <p className="relative shrink-0" data-node-id="25:118">
                1 · Light
            </p>
            <p className="relative shrink-0" data-node-id="25:119">
                5 · Heavy
            </p>
            </div>
        </div>
        <Link href="/ratings" aria-label="View class ratings" className="relative shrink-0 size-[20px]">
            <Image alt="" width={20} height={20} className="absolute block inset-0 max-w-none size-full" src={imgArrowUpRight} unoptimized />
        </Link>
    </div>
  );
}






