import { RatingScale } from "./components/rating-scale";
import Image from "next/image";
import Link from "next/link";
import { Header } from "./components/header";

const assetPathPrefix = "/figma";
const imgSearch = `${assetPathPrefix}/eb0a0.svg`;
const imgX = `${assetPathPrefix}/04b91.svg`;
const imgSlidersHorizontal = `${assetPathPrefix}/d8b84.svg`;
const imgChevronDown = `${assetPathPrefix}/eb9cb.svg`;
const imgArrowUpRight = `${assetPathPrefix}/4a824.svg`;

export default function ClassSearchAndResults() {
  return (
    <main className="bg-[#f7f7f2] content-stretch flex flex-col items-start relative size-full" data-node-id="25:3" data-name="Class search and results">
      <Header />
      <div className="content-stretch flex flex-col gap-[28px] items-start overflow-clip px-[64px] py-[44px] relative shrink-0 w-full" data-node-id="25:22" data-name="Search workspace">
        <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-node-id="25:27" data-name="Search controls">
          <div className="bg-white border border-[#dde4dc] border-solid content-stretch flex flex-[1_0_0] gap-[12px] h-[50px] items-center min-w-px overflow-clip px-[16px] relative rounded-[8px]" data-node-id="25:33" data-name="Search input">
            <div className="relative shrink-0 size-[18px]" data-node-id="25:893" data-name="search">
              <Image alt="" width={18} height={18} className="absolute block inset-0 max-w-none size-full" src={imgSearch} unoptimized />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-normal leading-[normal] min-w-px not-italic relative text-[#18332b] text-[15px]" data-node-id="25:35">
              Computer science
            </p>
            <div className="relative shrink-0 size-[16px]" data-node-id="25:896" data-name="x">
              <Image alt="" width={16} height={16} className="absolute block inset-0 max-w-none size-full" src={imgX} unoptimized />
            </div>
          </div>
          <div className="bg-[#16734c] border border-[#16734c] border-solid content-stretch flex h-[42px] items-center justify-center overflow-clip px-[18px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0" data-node-id="25:37" data-name="Action">
            <p className="[word-break:break-word] font-semibold leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap" data-node-id="25:38">
              Search classes
            </p>
          </div>
        </div>
        <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0 w-full" data-node-id="25:39" data-name="Filter controls">
          <div className="relative shrink-0 size-[18px]" data-node-id="25:899" data-name="sliders-horizontal">
            <Image alt="" width={18} height={18} className="absolute block inset-0 max-w-none size-full" src={imgSlidersHorizontal} unoptimized />
          </div>
          <div className="bg-[#eaf3ec] border border-[#eaf3ec] border-solid content-stretch flex gap-[12px] h-[40px] items-center overflow-clip px-[14px] relative rounded-[8px] shrink-0" data-node-id="25:41" data-name="Filter">
            <p className="[word-break:break-word] font-normal leading-[normal] not-italic relative shrink-0 text-[#16734c] text-[13px] whitespace-nowrap" data-node-id="25:42">
              Department: Computer Science
            </p>
            <div className="relative shrink-0 size-[14px]" data-node-id="25:902" data-name="chevron-down">
              <Image alt="" width={14} height={14} className="absolute block inset-0 max-w-none size-full" src={imgChevronDown} unoptimized />
            </div>
          </div>
          <div className="bg-white border border-[#dde4dc] border-solid content-stretch flex gap-[12px] h-[40px] items-center overflow-clip px-[14px] relative rounded-[8px] shrink-0" data-node-id="25:47" data-name="Filter">
            <p className="[word-break:break-word] font-normal leading-[normal] not-italic relative shrink-0 text-[#18332b] text-[13px] whitespace-nowrap" data-node-id="25:48">
              Workload: Any
            </p>
            <div className="relative shrink-0 size-[14px]" data-node-id="25:908" data-name="chevron-down">
              <Image alt="" width={14} height={14} className="absolute block inset-0 max-w-none size-full" src={imgChevronDown} unoptimized />
            </div>
          </div>
          <div className="bg-white border border-[#dde4dc] border-solid content-stretch flex gap-[12px] h-[40px] items-center overflow-clip px-[14px] relative rounded-[8px] shrink-0" data-node-id="25:50" data-name="Filter">
            <p className="[word-break:break-word] font-normal leading-[normal] not-italic relative shrink-0 text-[#18332b] text-[13px] whitespace-nowrap" data-node-id="25:51">
              Collaboration: Any
            </p>
            <div className="relative shrink-0 size-[14px]" data-node-id="25:911" data-name="chevron-down">
              <Image alt="" width={14} height={14} className="absolute block inset-0 max-w-none size-full" src={imgChevronDown} unoptimized />
            </div>
          </div>
          <p className="[word-break:break-word] font-semibold leading-[normal] not-italic relative shrink-0 text-[#16734c] text-[13px] whitespace-nowrap" data-node-id="25:53">
            Reset
          </p>
        </div>
        <div className="bg-white border border-[#dde4dc] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[12px] shrink-0 w-full" data-node-id="25:62" data-name="Class comparison list">
          <div className="[word-break:break-word] bg-[#f1f3ee] content-stretch flex font-semibold gap-[24px] items-center not-italic overflow-clip px-[24px] py-[18px] relative shrink-0 w-full" data-node-id="25:63" data-name="List headings">
            <p className="leading-[normal] relative shrink-0 text-[#69756d] text-[12px] w-[292px]" data-node-id="25:64">{`CLASS & PROFESSOR`}</p>
            <p className="leading-[normal] relative shrink-0 text-[#69756d] text-[12px] w-[94px]" data-node-id="25:65">
              OVERALL
            </p>
            <div className="leading-[0] relative shrink-0 text-[#18332b] text-[13px] w-[180px]" data-node-id="25:66">
              <p className="leading-[1.4] mb-0">Group vs solo</p>
              <p className="leading-[1.4]">work</p>
            </div>
            <div className="leading-[0] relative shrink-0 text-[#18332b] text-[13px] w-[180px]" data-node-id="25:67">
              <p className="leading-[1.4] mb-0">Amount of</p>
              <p className="leading-[1.4]">presentations</p>
            </div>
            <div className="leading-[0] relative shrink-0 text-[#18332b] text-[13px] w-[180px]" data-node-id="25:68">
              <p className="leading-[1.4] mb-0">Workload</p>
              <p className="leading-[1.4]">in class</p>
            </div>
            <div className="leading-[0] relative shrink-0 text-[#18332b] text-[13px] w-[180px]" data-node-id="25:69">
              <p className="leading-[1.4] mb-0">Workload</p>
              <p className="leading-[1.4]">out of class</p>
            </div>
          </div>
          <div className="border-[#dde4dc] border-solid border-t content-stretch flex gap-[24px] items-center overflow-clip px-[24px] py-[26px] relative shrink-0 w-full" data-node-id="25:70" data-name="Class result">
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start not-italic overflow-clip relative shrink-0 w-[292px]" data-node-id="25:71" data-name="Course information">
              <p className="font-bold leading-[normal] relative shrink-0 text-[#16734c] text-[12px] whitespace-nowrap" data-node-id="25:72">
                CS 210 · 3 CREDITS
              </p>
              <p className="font-semibold leading-[1.3] min-w-full relative shrink-0 text-[#18332b] text-[18px] w-[min-content]" data-node-id="25:73"><Link href="/ratings" className="hover:underline underline-offset-4">
                Introduction to Data Science
              </Link></p>
              <p className="font-normal leading-[normal] relative shrink-0 text-[#69756d] text-[13px] whitespace-nowrap" data-node-id="25:74">
                Dr. Maya Chen
              </p>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start leading-[normal] not-italic overflow-clip relative shrink-0 w-[94px] whitespace-nowrap" data-node-id="25:76" data-name="Overall score">
              <p className="font-bold relative shrink-0 text-[#16734c] text-[28px]" data-node-id="25:77">
                4.3
              </p>
              <p className="font-normal relative shrink-0 text-[#69756d] text-[11px]" data-node-id="25:78">
                out of 5
              </p>
              <p className="font-normal relative shrink-0 text-[#69756d] text-[11px]" data-node-id="25:79">
                128 reviews
              </p>
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[180px]" data-node-id="25:80" data-name="Aggregate rating">
              <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-node-id="25:81" data-name="Rating label">
                <p className="[word-break:break-word] font-bold leading-[normal] not-italic relative shrink-0 text-[#16734c] text-[13px] whitespace-nowrap" data-node-id="25:82">
                  3.8 / 5
                </p>
              </div>
              <RatingScale amount={70} />
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
                  2.2 / 5
                </p>
              </div>
              <RatingScale amount={30} />
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
                  3.1 / 5
                </p>
              </div>
              <RatingScale amount={52.5} />
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
                  4.0 / 5
                </p>
              </div>
              <RatingScale amount={75} />
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
          <div className="border-[#dde4dc] border-solid border-t content-stretch flex gap-[24px] items-center overflow-clip px-[24px] py-[26px] relative shrink-0 w-full" data-node-id="25:121" data-name="Class result">
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start not-italic overflow-clip relative shrink-0 w-[292px]" data-node-id="25:122" data-name="Course information">
              <p className="font-bold leading-[normal] relative shrink-0 text-[#16734c] text-[12px] whitespace-nowrap" data-node-id="25:123">
                CS 110 · 3 CREDITS
              </p>
              <p className="font-semibold leading-[1.3] min-w-full relative shrink-0 text-[#18332b] text-[18px] w-[min-content]" data-node-id="25:124"><Link href="/ratings" className="hover:underline underline-offset-4">
                Introduction to Programming
              </Link></p>
              <p className="font-normal leading-[normal] relative shrink-0 text-[#69756d] text-[13px] whitespace-nowrap" data-node-id="25:125">
                Dr. Daniel Brooks
              </p>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start leading-[normal] not-italic overflow-clip relative shrink-0 w-[94px] whitespace-nowrap" data-node-id="25:127" data-name="Overall score">
              <p className="font-bold relative shrink-0 text-[#16734c] text-[28px]" data-node-id="25:128">
                4.5
              </p>
              <p className="font-normal relative shrink-0 text-[#69756d] text-[11px]" data-node-id="25:129">
                out of 5
              </p>
              <p className="font-normal relative shrink-0 text-[#69756d] text-[11px]" data-node-id="25:130">
                204 reviews
              </p>
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[180px]" data-node-id="25:131" data-name="Aggregate rating">
              <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-node-id="25:132" data-name="Rating label">
                <p className="[word-break:break-word] font-bold leading-[normal] not-italic relative shrink-0 text-[#16734c] text-[13px] whitespace-nowrap" data-node-id="25:133">
                  2.0 / 5
                </p>
              </div>
              <RatingScale amount={25} />
              <div className="[word-break:break-word] content-stretch flex font-normal items-start justify-between leading-[normal] not-italic overflow-clip relative shrink-0 text-[#69756d] text-[11px] w-full whitespace-nowrap" data-node-id="25:138" data-name="Scale endpoints">
                <p className="relative shrink-0" data-node-id="25:139">
                  1 · Solo
                </p>
                <p className="relative shrink-0" data-node-id="25:140">
                  5 · Group
                </p>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[180px]" data-node-id="25:141" data-name="Aggregate rating">
              <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-node-id="25:142" data-name="Rating label">
                <p className="[word-break:break-word] font-bold leading-[normal] not-italic relative shrink-0 text-[#16734c] text-[13px] whitespace-nowrap" data-node-id="25:143">
                  1.2 / 5
                </p>
              </div>
              <RatingScale amount={5} />
              <div className="[word-break:break-word] content-stretch flex font-normal items-start justify-between leading-[normal] not-italic overflow-clip relative shrink-0 text-[#69756d] text-[11px] w-full whitespace-nowrap" data-node-id="25:148" data-name="Scale endpoints">
                <p className="relative shrink-0" data-node-id="25:149">
                  1 · None
                </p>
                <p className="relative shrink-0" data-node-id="25:150">
                  5 · A lot
                </p>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[180px]" data-node-id="25:151" data-name="Aggregate rating">
              <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-node-id="25:152" data-name="Rating label">
                <p className="[word-break:break-word] font-bold leading-[normal] not-italic relative shrink-0 text-[#16734c] text-[13px] whitespace-nowrap" data-node-id="25:153">
                  2.8 / 5
                </p>
              </div>
              <RatingScale amount={45} />
              <div className="[word-break:break-word] content-stretch flex font-normal items-start justify-between leading-[normal] not-italic overflow-clip relative shrink-0 text-[#69756d] text-[11px] w-full whitespace-nowrap" data-node-id="25:158" data-name="Scale endpoints">
                <p className="relative shrink-0" data-node-id="25:159">
                  1 · Light
                </p>
                <p className="relative shrink-0" data-node-id="25:160">
                  5 · Heavy
                </p>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[180px]" data-node-id="25:161" data-name="Aggregate rating">
              <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-node-id="25:162" data-name="Rating label">
                <p className="[word-break:break-word] font-bold leading-[normal] not-italic relative shrink-0 text-[#16734c] text-[13px] whitespace-nowrap" data-node-id="25:163">
                  3.5 / 5
                </p>
              </div>
              <RatingScale amount={62.5} />
              <div className="[word-break:break-word] content-stretch flex font-normal items-start justify-between leading-[normal] not-italic overflow-clip relative shrink-0 text-[#69756d] text-[11px] w-full whitespace-nowrap" data-node-id="25:168" data-name="Scale endpoints">
                <p className="relative shrink-0" data-node-id="25:169">
                  1 · Light
                </p>
                <p className="relative shrink-0" data-node-id="25:170">
                  5 · Heavy
                </p>
              </div>
            </div>
            <Link href="/ratings" aria-label="View class ratings" className="relative shrink-0 size-[20px]">
              <Image alt="" width={20} height={20} className="absolute block inset-0 max-w-none size-full" src={imgArrowUpRight} unoptimized />
            </Link>
          </div>
          <div className="border-[#dde4dc] border-solid border-t content-stretch flex gap-[24px] items-center overflow-clip px-[24px] py-[26px] relative shrink-0 w-full" data-node-id="25:172" data-name="Class result">
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start not-italic overflow-clip relative shrink-0 w-[292px]" data-node-id="25:173" data-name="Course information">
              <p className="font-bold leading-[normal] relative shrink-0 text-[#16734c] text-[12px] whitespace-nowrap" data-node-id="25:174">
                CS 240 · 3 CREDITS
              </p>
              <p className="font-semibold leading-[1.3] min-w-full relative shrink-0 text-[#18332b] text-[18px] w-[min-content]" data-node-id="25:175"><Link href="/ratings" className="hover:underline underline-offset-4">{`Data Structures & Algorithms`}</Link></p>
              <p className="font-normal leading-[normal] relative shrink-0 text-[#69756d] text-[13px] whitespace-nowrap" data-node-id="25:176">
                Dr. Maya Chen
              </p>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start leading-[normal] not-italic overflow-clip relative shrink-0 w-[94px] whitespace-nowrap" data-node-id="25:178" data-name="Overall score">
              <p className="font-bold relative shrink-0 text-[#16734c] text-[28px]" data-node-id="25:179">
                4.1
              </p>
              <p className="font-normal relative shrink-0 text-[#69756d] text-[11px]" data-node-id="25:180">
                out of 5
              </p>
              <p className="font-normal relative shrink-0 text-[#69756d] text-[11px]" data-node-id="25:181">
                96 reviews
              </p>
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[180px]" data-node-id="25:182" data-name="Aggregate rating">
              <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-node-id="25:183" data-name="Rating label">
                <p className="[word-break:break-word] font-bold leading-[normal] not-italic relative shrink-0 text-[#16734c] text-[13px] whitespace-nowrap" data-node-id="25:184">
                  2.6 / 5
                </p>
              </div>
              <RatingScale amount={40} />
              <div className="[word-break:break-word] content-stretch flex font-normal items-start justify-between leading-[normal] not-italic overflow-clip relative shrink-0 text-[#69756d] text-[11px] w-full whitespace-nowrap" data-node-id="25:189" data-name="Scale endpoints">
                <p className="relative shrink-0" data-node-id="25:190">
                  1 · Solo
                </p>
                <p className="relative shrink-0" data-node-id="25:191">
                  5 · Group
                </p>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[180px]" data-node-id="25:192" data-name="Aggregate rating">
              <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-node-id="25:193" data-name="Rating label">
                <p className="[word-break:break-word] font-bold leading-[normal] not-italic relative shrink-0 text-[#16734c] text-[13px] whitespace-nowrap" data-node-id="25:194">
                  1.4 / 5
                </p>
              </div>
              <RatingScale amount={10} />
              <div className="[word-break:break-word] content-stretch flex font-normal items-start justify-between leading-[normal] not-italic overflow-clip relative shrink-0 text-[#69756d] text-[11px] w-full whitespace-nowrap" data-node-id="25:199" data-name="Scale endpoints">
                <p className="relative shrink-0" data-node-id="25:200">
                  1 · None
                </p>
                <p className="relative shrink-0" data-node-id="25:201">
                  5 · A lot
                </p>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[180px]" data-node-id="25:202" data-name="Aggregate rating">
              <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-node-id="25:203" data-name="Rating label">
                <p className="[word-break:break-word] font-bold leading-[normal] not-italic relative shrink-0 text-[#16734c] text-[13px] whitespace-nowrap" data-node-id="25:204">
                  3.8 / 5
                </p>
              </div>
              <RatingScale amount={70} />
              <div className="[word-break:break-word] content-stretch flex font-normal items-start justify-between leading-[normal] not-italic overflow-clip relative shrink-0 text-[#69756d] text-[11px] w-full whitespace-nowrap" data-node-id="25:209" data-name="Scale endpoints">
                <p className="relative shrink-0" data-node-id="25:210">
                  1 · Light
                </p>
                <p className="relative shrink-0" data-node-id="25:211">
                  5 · Heavy
                </p>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[180px]" data-node-id="25:212" data-name="Aggregate rating">
              <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-node-id="25:213" data-name="Rating label">
                <p className="[word-break:break-word] font-bold leading-[normal] not-italic relative shrink-0 text-[#16734c] text-[13px] whitespace-nowrap" data-node-id="25:214">
                  4.6 / 5
                </p>
              </div>
              <RatingScale amount={90} />
              <div className="[word-break:break-word] content-stretch flex font-normal items-start justify-between leading-[normal] not-italic overflow-clip relative shrink-0 text-[#69756d] text-[11px] w-full whitespace-nowrap" data-node-id="25:219" data-name="Scale endpoints">
                <p className="relative shrink-0" data-node-id="25:220">
                  1 · Light
                </p>
                <p className="relative shrink-0" data-node-id="25:221">
                  5 · Heavy
                </p>
              </div>
            </div>
            <Link href="/ratings" aria-label="View class ratings" className="relative shrink-0 size-[20px]">
              <Image alt="" width={20} height={20} className="absolute block inset-0 max-w-none size-full" src={imgArrowUpRight} unoptimized />
            </Link>
          </div>
          <div className="border-[#dde4dc] border-solid border-t content-stretch flex gap-[24px] items-center overflow-clip px-[24px] py-[26px] relative shrink-0 w-full" data-node-id="25:223" data-name="Class result">
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start not-italic overflow-clip relative shrink-0 w-[292px]" data-node-id="25:224" data-name="Course information">
              <p className="font-bold leading-[normal] relative shrink-0 text-[#16734c] text-[12px] whitespace-nowrap" data-node-id="25:225">
                CS 315 · 3 CREDITS
              </p>
              <p className="font-semibold leading-[1.3] min-w-full relative shrink-0 text-[#18332b] text-[18px] w-[min-content]" data-node-id="25:226"><Link href="/ratings" className="hover:underline underline-offset-4">
                Human–Computer Interaction
              </Link></p>
              <p className="font-normal leading-[normal] relative shrink-0 text-[#69756d] text-[13px] whitespace-nowrap" data-node-id="25:227">
                Prof. Alex Rivera
              </p>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start leading-[normal] not-italic overflow-clip relative shrink-0 w-[94px] whitespace-nowrap" data-node-id="25:229" data-name="Overall score">
              <p className="font-bold relative shrink-0 text-[#16734c] text-[28px]" data-node-id="25:230">
                4.6
              </p>
              <p className="font-normal relative shrink-0 text-[#69756d] text-[11px]" data-node-id="25:231">
                out of 5
              </p>
              <p className="font-normal relative shrink-0 text-[#69756d] text-[11px]" data-node-id="25:232">
                73 reviews
              </p>
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[180px]" data-node-id="25:233" data-name="Aggregate rating">
              <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-node-id="25:234" data-name="Rating label">
                <p className="[word-break:break-word] font-bold leading-[normal] not-italic relative shrink-0 text-[#16734c] text-[13px] whitespace-nowrap" data-node-id="25:235">
                  4.7 / 5
                </p>
              </div>
              <RatingScale amount={92.5} />
              <div className="[word-break:break-word] content-stretch flex font-normal items-start justify-between leading-[normal] not-italic overflow-clip relative shrink-0 text-[#69756d] text-[11px] w-full whitespace-nowrap" data-node-id="25:240" data-name="Scale endpoints">
                <p className="relative shrink-0" data-node-id="25:241">
                  1 · Solo
                </p>
                <p className="relative shrink-0" data-node-id="25:242">
                  5 · Group
                </p>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[180px]" data-node-id="25:243" data-name="Aggregate rating">
              <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-node-id="25:244" data-name="Rating label">
                <p className="[word-break:break-word] font-bold leading-[normal] not-italic relative shrink-0 text-[#16734c] text-[13px] whitespace-nowrap" data-node-id="25:245">
                  4.2 / 5
                </p>
              </div>
              <RatingScale amount={80} />
              <div className="[word-break:break-word] content-stretch flex font-normal items-start justify-between leading-[normal] not-italic overflow-clip relative shrink-0 text-[#69756d] text-[11px] w-full whitespace-nowrap" data-node-id="25:250" data-name="Scale endpoints">
                <p className="relative shrink-0" data-node-id="25:251">
                  1 · None
                </p>
                <p className="relative shrink-0" data-node-id="25:252">
                  5 · A lot
                </p>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[180px]" data-node-id="25:253" data-name="Aggregate rating">
              <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-node-id="25:254" data-name="Rating label">
                <p className="[word-break:break-word] font-bold leading-[normal] not-italic relative shrink-0 text-[#16734c] text-[13px] whitespace-nowrap" data-node-id="25:255">
                  3.2 / 5
                </p>
              </div>
              <RatingScale amount={55} />
              <div className="[word-break:break-word] content-stretch flex font-normal items-start justify-between leading-[normal] not-italic overflow-clip relative shrink-0 text-[#69756d] text-[11px] w-full whitespace-nowrap" data-node-id="25:260" data-name="Scale endpoints">
                <p className="relative shrink-0" data-node-id="25:261">
                  1 · Light
                </p>
                <p className="relative shrink-0" data-node-id="25:262">
                  5 · Heavy
                </p>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[180px]" data-node-id="25:263" data-name="Aggregate rating">
              <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-node-id="25:264" data-name="Rating label">
                <p className="[word-break:break-word] font-bold leading-[normal] not-italic relative shrink-0 text-[#16734c] text-[13px] whitespace-nowrap" data-node-id="25:265">
                  3.6 / 5
                </p>
              </div>
              <RatingScale amount={65} />
              <div className="[word-break:break-word] content-stretch flex font-normal items-start justify-between leading-[normal] not-italic overflow-clip relative shrink-0 text-[#69756d] text-[11px] w-full whitespace-nowrap" data-node-id="25:270" data-name="Scale endpoints">
                <p className="relative shrink-0" data-node-id="25:271">
                  1 · Light
                </p>
                <p className="relative shrink-0" data-node-id="25:272">
                  5 · Heavy
                </p>
              </div>
            </div>
            <Link href="/ratings" aria-label="View class ratings" className="relative shrink-0 size-[20px]">
              <Image alt="" width={20} height={20} className="absolute block inset-0 max-w-none size-full" src={imgArrowUpRight} unoptimized />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
