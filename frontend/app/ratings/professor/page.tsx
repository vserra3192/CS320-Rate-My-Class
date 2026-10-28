import { RatingScale } from "../../components/rating-scale";
import Image from "next/image";
import Link from "next/link";
import { Header } from "../../components/header";

const assetPathPrefix = "/figma";
const imgArrowLeft = `${assetPathPrefix}/9361d.svg`;
const imgChevronDown = `${assetPathPrefix}/9bfbe.svg`;
const imgUserRound = `${assetPathPrefix}/ef811.svg`;
const imgThumbsUp = `${assetPathPrefix}/2bd10.svg`;
const imgChevronDown1 = `${assetPathPrefix}/6fe4c.svg`;
const imgCheck = `${assetPathPrefix}/b3d9c.svg`;

export default function ClassDetailProfessorView() {
  return (
    <main className="bg-[#f7f7f2] content-stretch flex flex-col items-start relative size-full" data-node-id="25:584" data-name="Class detail — Professor view">
      <Header professor />
      <div className="content-stretch flex flex-col gap-[28px] items-start overflow-clip pb-[48px] pt-[32px] px-[64px] relative shrink-0 w-full" data-node-id="37:17" data-name="Class workspace">
        <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-node-id="37:18" data-name="Breadcrumb">
          <div className="relative shrink-0 size-[16px]" data-node-id="37:19" data-name="arrow-left">
            <Image alt="" width={16} height={16} className="absolute block inset-0 max-w-none size-full" src={imgArrowLeft} unoptimized />
          </div>
          <Link href="/" className="text-[#16734c] font-semibold text-[13px] hover:underline">
            All classes
          </Link>
          <p className="[word-break:break-word] font-normal leading-[normal] not-italic relative shrink-0 text-[#69756d] text-[13px] whitespace-nowrap" data-node-id="37:22">
            / Computer Science / CS 210
          </p>
        </div>
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="37:23" data-name="Class header">
          <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-node-id="37:24" data-name="Class identity">
            <h1 className="[word-break:break-word] font-bold leading-[normal] not-italic relative shrink-0 text-[#18332b] text-[40px] whitespace-nowrap" data-node-id="37:26">
              Introduction to Data Science
            </h1>
          </div>
        </div>
        <div className="bg-[#f1f3ee] content-stretch flex gap-[4px] items-start overflow-clip p-[4px] relative rounded-[8px] shrink-0" data-node-id="37:30" data-name="Perspective switch">
          <Link href="/ratings" className="bg-[#f1f3ee] content-stretch flex h-[36px] items-center overflow-clip px-[16px] relative rounded-[6px] shrink-0" data-node-id="37:31" data-name="Student view option">
            <p className="[word-break:break-word] font-semibold leading-[normal] not-italic relative shrink-0 text-[#16734c] text-[14px] whitespace-nowrap" data-node-id="37:32">
              Student view
            </p>
          </Link>
          <Link href="/ratings/professor" aria-current="page" className="bg-white content-stretch flex h-[36px] items-center overflow-clip px-[16px] relative rounded-[6px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0" data-node-id="37:33" data-name="Professor view option">
            <p className="[word-break:break-word] font-semibold leading-[normal] not-italic relative shrink-0 text-[#16734c] text-[14px] whitespace-nowrap" data-node-id="37:34">
              Professor view
            </p>
          </Link>
        </div>
        <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-node-id="37:35" data-name="Detail columns">
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px relative" data-node-id="37:36" data-name="Class insights and reviews">
            <div className="bg-white border border-[#dde4dc] border-solid content-stretch flex flex-col gap-[24px] items-start overflow-clip p-[24px] relative rounded-[12px] shrink-0 w-full" data-node-id="37:37" data-name="Class overview">
              <div className="content-stretch flex gap-[28px] items-center overflow-clip relative shrink-0 w-full" data-node-id="37:38" data-name="Rating summary">
                <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[normal] not-italic overflow-clip relative shrink-0 w-[164px] whitespace-nowrap" data-node-id="37:39" data-name="Overall class score">
                  <p className="font-semibold relative shrink-0 text-[#69756d] text-[13px]" data-node-id="37:40">
                    Overall class rating
                  </p>
                  <div className="content-stretch flex gap-[8px] items-baseline overflow-clip relative shrink-0" data-node-id="37:41" data-name="Score">
                    <p className="font-bold relative shrink-0 text-[#16734c] text-[52px]" data-node-id="37:42">
                      4.3
                    </p>
                    <p className="font-normal relative shrink-0 text-[#69756d] text-[16px]" data-node-id="37:43">
                      / 5
                    </p>
                  </div>
                  <p className="font-normal relative shrink-0 text-[#69756d] text-[13px]" data-node-id="37:44">
                    Based on 128 reviews
                  </p>
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px overflow-clip relative" data-node-id="37:45" data-name="Class snapshot">
                  <p className="[word-break:break-word] font-normal leading-[normal] not-italic relative shrink-0 text-[#18332b] text-[20px] whitespace-nowrap" data-node-id="37:46">
                    Hands-on learning. Real-world data.
                  </p>
                  <p className="[word-break:break-word] font-normal leading-[24px] min-w-full not-italic relative shrink-0 text-[#69756d] text-[16px] w-[min-content]" data-node-id="37:47">
                    Explore Python, statistics, and data visualization through weekly labs and a final team project.
                  </p>
                  <div className="content-stretch flex gap-[8px] items-start overflow-clip relative shrink-0" data-node-id="37:48" data-name="Popular tags">
                    <div className="bg-[#eaf3ec] content-stretch flex items-start overflow-clip px-[10px] py-[5px] relative rounded-[5px] shrink-0" data-node-id="37:49" data-name="Tag">
                      <p className="[word-break:break-word] font-normal leading-[normal] not-italic relative shrink-0 text-[#16734c] text-[12px] whitespace-nowrap" data-node-id="37:50">
                        Practical skills
                      </p>
                    </div>
                    <div className="bg-[#eaf3ec] content-stretch flex items-start overflow-clip px-[10px] py-[5px] relative rounded-[5px] shrink-0" data-node-id="37:51" data-name="Tag">
                      <p className="[word-break:break-word] font-normal leading-[normal] not-italic relative shrink-0 text-[#16734c] text-[12px] whitespace-nowrap" data-node-id="37:52">
                        Project-based
                      </p>
                    </div>
                    <div className="bg-[#eaf3ec] content-stretch flex items-start overflow-clip px-[10px] py-[5px] relative rounded-[5px] shrink-0" data-node-id="37:53" data-name="Tag">
                      <p className="[word-break:break-word] font-normal leading-[normal] not-italic relative shrink-0 text-[#16734c] text-[12px] whitespace-nowrap" data-node-id="37:54">
                        Weekly labs
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="[word-break:break-word] border-[#dde4dc] border-solid border-t content-stretch flex font-normal items-start justify-between leading-[normal] not-italic overflow-clip pt-[20px] relative shrink-0 w-full whitespace-nowrap" data-node-id="37:55" data-name="Attribute heading">
                <p className="relative shrink-0 text-[#18332b] text-[17px]" data-node-id="37:56">
                  Student class ratings
                </p>
                <p className="relative shrink-0 text-[#69756d] text-[12px]" data-node-id="37:57">
                  Student ratings only · class experience, not professor rating
                </p>
              </div>
              <div className="content-stretch flex gap-[24px] items-start overflow-clip relative shrink-0 w-full" data-node-id="37:58" data-name="Attribute row">
                <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[392px]" data-node-id="37:59" data-name="Aggregate rating">
                  <div className="[word-break:break-word] content-stretch flex items-center justify-between leading-[normal] not-italic overflow-clip relative shrink-0 text-[13px] w-full whitespace-nowrap" data-node-id="37:60" data-name="Rating label">
                    <p className="font-medium relative shrink-0 text-[#18332b]" data-node-id="37:61">
                      Group vs solo work
                    </p>
                    <p className="font-bold relative shrink-0 text-[#16734c]" data-node-id="37:62">
                      3.8 / 5
                    </p>
                  </div>
                  <RatingScale amount={70} />
                  <div className="[word-break:break-word] content-stretch flex font-normal items-start justify-between leading-[normal] not-italic overflow-clip relative shrink-0 text-[#69756d] text-[11px] w-full whitespace-nowrap" data-node-id="37:67" data-name="Scale endpoints">
                    <p className="relative shrink-0" data-node-id="37:68">
                      1 · Solo
                    </p>
                    <p className="relative shrink-0" data-node-id="37:69">
                      5 · Group
                    </p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[392px]" data-node-id="37:70" data-name="Aggregate rating">
                  <div className="[word-break:break-word] content-stretch flex items-center justify-between leading-[normal] not-italic overflow-clip relative shrink-0 text-[13px] w-full whitespace-nowrap" data-node-id="37:71" data-name="Rating label">
                    <p className="font-medium relative shrink-0 text-[#18332b]" data-node-id="37:72">
                      Amount of presentations
                    </p>
                    <p className="font-bold relative shrink-0 text-[#16734c]" data-node-id="37:73">
                      2.2 / 5
                    </p>
                  </div>
                  <RatingScale amount={30} />
                  <div className="[word-break:break-word] content-stretch flex font-normal items-start justify-between leading-[normal] not-italic overflow-clip relative shrink-0 text-[#69756d] text-[11px] w-full whitespace-nowrap" data-node-id="37:78" data-name="Scale endpoints">
                    <p className="relative shrink-0" data-node-id="37:79">
                      1 · None
                    </p>
                    <p className="relative shrink-0" data-node-id="37:80">
                      5 · A lot
                    </p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[24px] items-start overflow-clip relative shrink-0 w-full" data-node-id="37:81" data-name="Attribute row">
                <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[392px]" data-node-id="37:82" data-name="Aggregate rating">
                  <div className="[word-break:break-word] content-stretch flex items-center justify-between leading-[normal] not-italic overflow-clip relative shrink-0 text-[13px] w-full whitespace-nowrap" data-node-id="37:83" data-name="Rating label">
                    <p className="font-medium relative shrink-0 text-[#18332b]" data-node-id="37:84">
                      Workload in class
                    </p>
                    <p className="font-bold relative shrink-0 text-[#16734c]" data-node-id="37:85">
                      3.1 / 5
                    </p>
                  </div>
                  <RatingScale amount={52.5} />
                  <div className="[word-break:break-word] content-stretch flex font-normal items-start justify-between leading-[normal] not-italic overflow-clip relative shrink-0 text-[#69756d] text-[11px] w-full whitespace-nowrap" data-node-id="37:90" data-name="Scale endpoints">
                    <p className="relative shrink-0" data-node-id="37:91">
                      1 · Light
                    </p>
                    <p className="relative shrink-0" data-node-id="37:92">
                      5 · Heavy
                    </p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[392px]" data-node-id="37:93" data-name="Aggregate rating">
                  <div className="[word-break:break-word] content-stretch flex items-center justify-between leading-[normal] not-italic overflow-clip relative shrink-0 text-[13px] w-full whitespace-nowrap" data-node-id="37:94" data-name="Rating label">
                    <p className="font-medium relative shrink-0 text-[#18332b]" data-node-id="37:95">
                      Workload out of class
                    </p>
                    <p className="font-bold relative shrink-0 text-[#16734c]" data-node-id="37:96">
                      4.0 / 5
                    </p>
                  </div>
                  <RatingScale amount={75} />
                  <div className="[word-break:break-word] content-stretch flex font-normal items-start justify-between leading-[normal] not-italic overflow-clip relative shrink-0 text-[#69756d] text-[11px] w-full whitespace-nowrap" data-node-id="37:101" data-name="Scale endpoints">
                    <p className="relative shrink-0" data-node-id="37:102">
                      1 · Light
                    </p>
                    <p className="relative shrink-0" data-node-id="37:103">
                      5 · Heavy
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-node-id="37:104" data-name="Review list heading">
              <p className="[word-break:break-word] font-bold leading-[normal] not-italic relative shrink-0 text-[#18332b] text-[24px] whitespace-nowrap" data-node-id="37:105">
                Professor comments
              </p>
              <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0" data-node-id="37:106" data-name="Review sort">
                <p className="[word-break:break-word] font-normal leading-[normal] not-italic relative shrink-0 text-[#69756d] text-[13px] whitespace-nowrap" data-node-id="37:107">
                  Newest first
                </p>
                <div className="relative shrink-0 size-[14px]" data-node-id="37:108" data-name="chevron-down">
                  <Image alt="" width={14} height={14} className="absolute block inset-0 max-w-none size-full" src={imgChevronDown} unoptimized />
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-node-id="37:110" data-name="Comment filters">
              <div className="bg-[#eaf3ec] border border-[#16734c] border-solid content-stretch flex items-start overflow-clip px-[14px] py-[9px] relative rounded-[8px] shrink-0" data-node-id="37:111" data-name="Comment filter">
                <p className="[word-break:break-word] font-semibold leading-[normal] not-italic relative shrink-0 text-[#16734c] text-[12px] whitespace-nowrap" data-node-id="37:112">
                  All 12
                </p>
              </div>
              <div className="bg-white border border-[#dde4dc] border-solid content-stretch flex items-start overflow-clip px-[14px] py-[9px] relative rounded-[8px] shrink-0" data-node-id="37:113" data-name="Comment filter">
                <p className="[word-break:break-word] font-semibold leading-[normal] not-italic relative shrink-0 text-[#69756d] text-[12px] whitespace-nowrap" data-node-id="37:114">
                  Dr. Maya Chen
                </p>
              </div>
            </div>
            <div className="bg-white border border-[#dde4dc] border-solid content-stretch flex flex-col gap-[16px] items-start overflow-clip p-[24px] relative rounded-[12px] shrink-0 w-full" data-node-id="37:117" data-name="Professor comment">
              <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-node-id="37:118" data-name="Comment header">
                <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0" data-node-id="37:119" data-name="Author">
                  <div className="bg-[#eaf3ec] content-stretch flex items-center justify-center overflow-clip relative rounded-[18px] shrink-0 size-[36px]" data-node-id="37:120" data-name="Professor avatar">
                    <div className="relative shrink-0 size-[18px]" data-node-id="37:121" data-name="user-round">
                      <Image alt="" width={18} height={18} className="absolute block inset-0 max-w-none size-full" src={imgUserRound} unoptimized />
                    </div>
                  </div>
                  <div className="[word-break:break-word] content-stretch flex flex-col gap-[3px] items-start leading-[normal] not-italic overflow-clip relative shrink-0 whitespace-nowrap" data-node-id="37:123" data-name="Author information">
                    <p className="font-semibold relative shrink-0 text-[#18332b] text-[14px]" data-node-id="37:124">
                      Dr. Maya Chen
                    </p>
                    <p className="font-normal relative shrink-0 text-[#69756d] text-[12px]" data-node-id="37:125">
                      CS 210 · Professor comment · Spring 2026
                    </p>
                  </div>
                </div>
                <p className="[word-break:break-word] font-normal leading-[normal] not-italic relative shrink-0 text-[#69756d] text-[13px] whitespace-nowrap" data-node-id="37:212">
                  Posted 2 days ago
                </p>
              </div>
              <p className="[word-break:break-word] font-normal leading-[24px] min-w-full not-italic relative shrink-0 text-[#18332b] text-[16px] w-[min-content]" data-node-id="37:130">
                For CS 210, I recommend starting the weekly labs early and reviewing the data cleaning steps before the final project. Office hours are available every Tuesday and Thursday for project check-ins.
              </p>
              <div className="content-stretch flex gap-[8px] items-start overflow-clip relative shrink-0" data-node-id="37:131" data-name="Comment tags">
                <div className="bg-[#f1f3ee] content-stretch flex items-start overflow-clip px-[10px] py-[5px] relative rounded-[5px] shrink-0" data-node-id="37:132" data-name="Comment tag">
                  <p className="[word-break:break-word] font-normal leading-[normal] not-italic relative shrink-0 text-[#69756d] text-[12px] whitespace-nowrap" data-node-id="37:133">
                    Project guidance
                  </p>
                </div>
                <div className="bg-[#f1f3ee] content-stretch flex items-start overflow-clip px-[10px] py-[5px] relative rounded-[5px] shrink-0" data-node-id="37:134" data-name="Comment tag">
                  <p className="[word-break:break-word] font-normal leading-[normal] not-italic relative shrink-0 text-[#69756d] text-[12px] whitespace-nowrap" data-node-id="37:135">
                    Office hours
                  </p>
                </div>
              </div>
              <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-node-id="37:138" data-name="Comment actions">
                <div className="content-stretch flex gap-[7px] items-center overflow-clip relative shrink-0" data-node-id="37:139" data-name="Helpful action">
                  <div className="relative shrink-0 size-[15px]" data-node-id="37:140" data-name="thumbs-up">
                    <Image alt="" width={15} height={15} className="absolute block inset-0 max-w-none size-full" src={imgThumbsUp} unoptimized />
                  </div>
                  <p className="[word-break:break-word] font-normal leading-[normal] not-italic relative shrink-0 text-[#69756d] text-[12px] whitespace-nowrap" data-node-id="37:142">
                    Helpful (12)
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white border border-[#dde4dc] border-solid content-stretch flex flex-col gap-[16px] items-start overflow-clip p-[24px] relative rounded-[12px] shrink-0 w-full" data-node-id="37:143" data-name="Professor comment">
              <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-node-id="37:144" data-name="Comment header">
                <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0" data-node-id="37:145" data-name="Author">
                  <div className="bg-[#eaf3ec] content-stretch flex items-center justify-center overflow-clip relative rounded-[18px] shrink-0 size-[36px]" data-node-id="37:146" data-name="Professor avatar">
                    <div className="relative shrink-0 size-[18px]" data-node-id="37:147" data-name="user-round">
                      <Image alt="" width={18} height={18} className="absolute block inset-0 max-w-none size-full" src={imgUserRound} unoptimized />
                    </div>
                  </div>
                  <div className="[word-break:break-word] content-stretch flex flex-col gap-[3px] items-start leading-[normal] not-italic overflow-clip relative shrink-0 whitespace-nowrap" data-node-id="37:149" data-name="Author information">
                    <p className="font-semibold relative shrink-0 text-[#18332b] text-[14px]" data-node-id="37:150">
                      Dr. Maya Chen
                    </p>
                    <p className="font-normal relative shrink-0 text-[#69756d] text-[12px]" data-node-id="37:151">
                      CS 210 · Professor comment · Fall 2025
                    </p>
                  </div>
                </div>
                <p className="[word-break:break-word] font-normal leading-[normal] not-italic relative shrink-0 text-[#69756d] text-[13px] whitespace-nowrap" data-node-id="37:213">
                  Posted 3 weeks ago
                </p>
              </div>
              <p className="[word-break:break-word] font-normal leading-[24px] min-w-full not-italic relative shrink-0 text-[#18332b] text-[16px] w-[min-content]" data-node-id="37:156">
                For the final project, teams should choose a dataset aligned with the course learning goals. I’ll post a rubric and example prompts in the course portal before the midpoint of the semester.
              </p>
              <div className="content-stretch flex gap-[8px] items-start overflow-clip relative shrink-0" data-node-id="37:157" data-name="Comment tags">
                <div className="bg-[#f1f3ee] content-stretch flex items-start overflow-clip px-[10px] py-[5px] relative rounded-[5px] shrink-0" data-node-id="37:158" data-name="Comment tag">
                  <p className="[word-break:break-word] font-normal leading-[normal] not-italic relative shrink-0 text-[#69756d] text-[12px] whitespace-nowrap" data-node-id="37:159">
                    Final project
                  </p>
                </div>
                <div className="bg-[#f1f3ee] content-stretch flex items-start overflow-clip px-[10px] py-[5px] relative rounded-[5px] shrink-0" data-node-id="37:160" data-name="Comment tag">
                  <p className="[word-break:break-word] font-normal leading-[normal] not-italic relative shrink-0 text-[#69756d] text-[12px] whitespace-nowrap" data-node-id="37:161">
                    Rubric
                  </p>
                </div>
              </div>
              <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-node-id="37:164" data-name="Comment actions">
                <div className="content-stretch flex gap-[7px] items-center overflow-clip relative shrink-0" data-node-id="37:165" data-name="Helpful action">
                  <div className="relative shrink-0 size-[15px]" data-node-id="37:166" data-name="thumbs-up">
                    <Image alt="" width={15} height={15} className="absolute block inset-0 max-w-none size-full" src={imgThumbsUp} unoptimized />
                  </div>
                  <p className="[word-break:break-word] font-normal leading-[normal] not-italic relative shrink-0 text-[#69756d] text-[12px] whitespace-nowrap" data-node-id="37:168">
                    Helpful (8)
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white border border-[#dde4dc] border-solid content-stretch flex h-[42px] items-center justify-center overflow-clip px-[18px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 w-full" data-node-id="37:169" data-name="Action">
              <p className="[word-break:break-word] font-semibold leading-[normal] not-italic relative shrink-0 text-[#18332b] text-[14px] whitespace-nowrap" data-node-id="37:170">
                Load more comments
              </p>
            </div>
          </div>
          <div className="bg-white border border-[#dde4dc] border-solid content-stretch flex flex-col gap-[22px] items-start overflow-clip p-[24px] relative rounded-[12px] shrink-0 w-[424px]" data-node-id="37:171" data-name="Professor comment area">
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start not-italic overflow-clip relative shrink-0 w-full" data-node-id="37:172" data-name="Form introduction">
              <p className="font-bold leading-[normal] relative shrink-0 text-[#18332b] text-[24px] whitespace-nowrap" data-node-id="37:173">
                Professor comments
              </p>
              <p className="font-normal leading-[1.5] min-w-full relative shrink-0 text-[#69756d] text-[13px] w-[min-content]" data-node-id="37:174">
                Professors can post class-specific notes, clarifications, and updates here using a professor account. Students can read these comments, but only professors can add new comments.
              </p>
            </div>
            <div className="[word-break:break-word] bg-[#eaf3ec] content-stretch flex flex-col font-normal gap-[10px] items-start not-italic overflow-clip p-[14px] relative rounded-[8px] shrink-0 text-[12px] w-full" data-node-id="37:175" data-name="Guest posting choices">
              <p className="leading-[1.5] min-w-full relative shrink-0 text-[#174d38] w-[min-content]" data-node-id="37:176">
                You’re browsing as a guest. Sign in with a professor account to post a comment.
              </p>
              <div className="content-stretch flex gap-[16px] items-start leading-[normal] overflow-clip relative shrink-0 text-[#16734c] whitespace-nowrap" data-node-id="37:177" data-name="Account links">
                <p className="relative shrink-0" data-node-id="37:178">
                  Sign in
                </p>
                <p className="relative shrink-0" data-node-id="37:179">
                  Create professor account
                </p>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-node-id="37:180" data-name="Selected context">
              <p className="[word-break:break-word] font-semibold leading-[normal] not-italic relative shrink-0 text-[#18332b] text-[13px] whitespace-nowrap" data-node-id="37:181">
                Class
              </p>
              <div className="border border-[#dde4dc] border-solid content-stretch flex items-start justify-between overflow-clip p-[12px] relative rounded-[8px] shrink-0 w-full" data-node-id="37:182" data-name="Context selector">
                <p className="[word-break:break-word] font-normal leading-[normal] not-italic relative shrink-0 text-[#18332b] text-[13px] whitespace-nowrap" data-node-id="37:183">
                  CS 210 · Introduction to Data Science
                </p>
                <div className="relative shrink-0 size-[16px]" data-node-id="37:184" data-name="chevron-down">
                  <Image alt="" width={16} height={16} className="absolute block inset-0 max-w-none size-full" src={imgChevronDown1} unoptimized />
                </div>
              </div>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start not-italic overflow-clip relative shrink-0 w-full" data-node-id="37:186" data-name="Written comment">
              <p className="font-semibold leading-[normal] relative shrink-0 text-[#18332b] text-[14px] whitespace-nowrap" data-node-id="37:187">
                Comment
              </p>
              <div className="border border-[#dde4dc] border-solid content-stretch flex flex-col font-normal h-[116px] items-start justify-between overflow-clip p-[12px] relative rounded-[8px] shrink-0 w-full" data-node-id="37:188" data-name="Comment field">
                <p className="leading-[1.5] min-w-full relative shrink-0 text-[#18332b] text-[13px] w-[min-content]" data-node-id="37:189">
                  This section is for faculty notes, clarifications, and context about the class. Students can read comments here, but only professors can post.
                </p>
                <p className="leading-[normal] relative shrink-0 text-[#69756d] text-[11px] whitespace-nowrap" data-node-id="37:190">
                  0 / 1,000
                </p>
              </div>
            </div>
            <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0" data-node-id="37:191" data-name="Anonymous posting">
              <div className="bg-[#16734c] content-stretch flex items-center justify-center overflow-clip relative rounded-[4px] shrink-0 size-[18px]" data-node-id="37:192" data-name="Selected checkbox">
                <div className="relative shrink-0 size-[14px]" data-node-id="37:193" data-name="check">
                  <Image alt="" width={14} height={14} className="absolute block inset-0 max-w-none size-full" src={imgCheck} unoptimized />
                </div>
              </div>
              <p className="[word-break:break-word] font-normal leading-[normal] not-italic relative shrink-0 text-[#18332b] text-[13px] whitespace-nowrap" data-node-id="37:195">
                Post as professor (account required)
              </p>
            </div>
            <div className="bg-white border border-[#dde4dc] border-solid content-stretch flex h-[42px] items-center justify-center overflow-clip px-[18px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 w-full" data-node-id="37:196" data-name="Action">
              <p className="[word-break:break-word] font-semibold leading-[normal] not-italic relative shrink-0 text-[#18332b] text-[14px] whitespace-nowrap" data-node-id="37:197">
                Sign in with professor account
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
