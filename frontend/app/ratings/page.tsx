import { FormLightbox } from "../components/form-lightbox";
import { RatingScale } from "../components/rating-scale";
import Image from "next/image";
import Link from "next/link";
import { Header } from "../components/header";

const assetPathPrefix = "/figma";
const imgArrowLeft = `${assetPathPrefix}/5f02d.svg`;
const imgChevronDown = `${assetPathPrefix}/eb9cb.svg`;
const imgUserRound = `${assetPathPrefix}/67edd.svg`;
const imgStar = `${assetPathPrefix}/40d71.svg`;
const imgChevronDown1 = `${assetPathPrefix}/d2943.svg`;
const imgCheck = `${assetPathPrefix}/5a3f7.svg`;

export default function ClassDetailStudentView() {
  return (
    <main className="bg-[#f7f7f2] content-stretch flex flex-col items-start relative size-full" data-node-id="25:293" data-name="Class detail — Student view">
      <Header />
      <div className="content-stretch flex flex-col gap-[28px] items-start overflow-clip pb-[48px] pt-[32px] px-[64px] relative shrink-0 w-full" data-node-id="25:312" data-name="Class workspace">
        <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-node-id="25:313" data-name="Breadcrumb">
          <div className="relative shrink-0 size-[16px]" data-node-id="25:938" data-name="arrow-left">
            <Image alt="" width={16} height={16} className="absolute block inset-0 max-w-none size-full" src={imgArrowLeft} unoptimized />
          </div>
          <Link href="/" className="text-[#16734c] font-semibold text-[13px] hover:underline">
            All classes
          </Link>
          <p className="[word-break:break-word] font-normal leading-[normal] not-italic relative shrink-0 text-[#69756d] text-[13px] whitespace-nowrap" data-node-id="25:316">
            / Computer Science / CS 210
          </p>
        </div>
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="25:317" data-name="Class header">
          <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-node-id="25:318" data-name="Class identity">
            <h1 className="[word-break:break-word] font-bold leading-[normal] not-italic relative shrink-0 text-[#18332b] text-[40px] whitespace-nowrap" data-node-id="25:320">
              Introduction to Data Science
            </h1>
          </div>

          <FormLightbox label="Rate this class">
            <div className="bg-white border border-[#dde4dc] border-solid content-stretch flex flex-col gap-[22px] items-start overflow-clip p-[24px] relative rounded-[12px] shrink-0 w-[424px]" data-node-id="25:467" data-name="Class review form">
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start not-italic overflow-clip relative shrink-0 w-full" data-node-id="25:468" data-name="Form introduction">
                <p className="font-bold leading-[normal] relative shrink-0 text-[#18332b] text-[24px] whitespace-nowrap" data-node-id="25:469">
                  Rate this class
                </p>
                <p className="font-normal leading-[1.5] min-w-full relative shrink-0 text-[#69756d] text-[13px] w-[min-content]" data-node-id="25:470">
                  Student accounts can rate and comment here. Professors can read; post in Professor view.
                </p>
              </div>
              <div className="[word-break:break-word] bg-[#eaf3ec] content-stretch flex flex-col font-normal gap-[10px] items-start not-italic overflow-clip p-[14px] relative rounded-[8px] shrink-0 text-[12px] w-full" data-node-id="25:568" data-name="Guest posting choices">
                <p className="leading-[1.5] min-w-full relative shrink-0 text-[#174d38] w-[min-content]" data-node-id="25:569">
                  Guests can read only. Sign in with a student account to post in Student view.
                </p>
                <div className="content-stretch flex gap-[16px] items-start leading-[normal] overflow-clip relative shrink-0 text-[#16734c] whitespace-nowrap" data-node-id="25:570" data-name="Account links">
                  <p className="relative shrink-0" data-node-id="25:571">
                    Sign in
                  </p>
                  <p className="relative shrink-0" data-node-id="25:572">
                    Create account
                  </p>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-node-id="25:471" data-name="Selected context">
                <p className="[word-break:break-word] font-semibold leading-[normal] not-italic relative shrink-0 text-[#18332b] text-[13px] whitespace-nowrap" data-node-id="25:472">
                  Class
                </p>
                <div className="border border-[#dde4dc] border-solid content-stretch flex items-start justify-between overflow-clip p-[12px] relative rounded-[8px] shrink-0 w-full" data-node-id="25:473" data-name="Context selector">
                  <p className="[word-break:break-word] font-normal leading-[normal] not-italic relative shrink-0 text-[#18332b] text-[13px] whitespace-nowrap" data-node-id="25:474">
                    CS 210 · Introduction to Data Science
                  </p>
                  <div className="relative shrink-0 size-[16px]" data-node-id="25:962" data-name="chevron-down">
                    <Image alt="" width={16} height={16} className="absolute block inset-0 max-w-none size-full" src={imgChevronDown1} unoptimized />
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip relative shrink-0 w-full" data-node-id="33:6" data-name="Overall rating">
                <div className="[word-break:break-word] content-stretch flex items-start justify-between leading-[normal] not-italic overflow-clip relative shrink-0 w-full whitespace-nowrap" data-node-id="33:7" data-name="Overall label">
                  <p className="font-semibold relative shrink-0 text-[#18332b] text-[14px]" data-node-id="33:8">
                    Overall class rating
                  </p>
                  <p className="font-bold relative shrink-0 text-[#16734c] text-[13px]" data-node-id="33:9">
                    4 / 5
                  </p>
                </div>
                <div className="content-stretch flex gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-node-id="33:10" data-name="Score choices">
                  <div className="bg-white border border-[#dde4dc] border-solid content-stretch flex flex-[1_0_0] h-[40px] items-center justify-center min-w-px overflow-clip relative rounded-[6px]" data-node-id="33:11" data-name="Score option">
                    <p className="[word-break:break-word] font-semibold leading-[normal] not-italic relative shrink-0 text-[#18332b] text-[15px] whitespace-nowrap" data-node-id="33:12">
                      1
                    </p>
                  </div>
                  <div className="bg-white border border-[#dde4dc] border-solid content-stretch flex flex-[1_0_0] h-[40px] items-center justify-center min-w-px overflow-clip relative rounded-[6px]" data-node-id="33:13" data-name="Score option">
                    <p className="[word-break:break-word] font-semibold leading-[normal] not-italic relative shrink-0 text-[#18332b] text-[15px] whitespace-nowrap" data-node-id="33:14">
                      2
                    </p>
                  </div>
                  <div className="bg-white border border-[#dde4dc] border-solid content-stretch flex flex-[1_0_0] h-[40px] items-center justify-center min-w-px overflow-clip relative rounded-[6px]" data-node-id="33:15" data-name="Score option">
                    <p className="[word-break:break-word] font-semibold leading-[normal] not-italic relative shrink-0 text-[#18332b] text-[15px] whitespace-nowrap" data-node-id="33:16">
                      3
                    </p>
                  </div>
                  <div className="bg-[#16734c] border border-[#16734c] border-solid content-stretch flex flex-[1_0_0] h-[40px] items-center justify-center min-w-px overflow-clip relative rounded-[6px]" data-node-id="33:17" data-name="Score option">
                    <p className="[word-break:break-word] font-semibold leading-[normal] not-italic relative shrink-0 text-[15px] text-white whitespace-nowrap" data-node-id="33:18">
                      4
                    </p>
                  </div>
                  <div className="bg-white border border-[#dde4dc] border-solid content-stretch flex flex-[1_0_0] h-[40px] items-center justify-center min-w-px overflow-clip relative rounded-[6px]" data-node-id="33:19" data-name="Score option">
                    <p className="[word-break:break-word] font-semibold leading-[normal] not-italic relative shrink-0 text-[#18332b] text-[15px] whitespace-nowrap" data-node-id="33:20">
                      5
                    </p>
                  </div>
                </div>
                <div className="[word-break:break-word] content-stretch flex font-normal items-start justify-between leading-[normal] not-italic overflow-clip relative shrink-0 text-[#69756d] text-[11px] w-full whitespace-nowrap" data-node-id="33:21" data-name="Overall endpoints">
                  <p className="relative shrink-0" data-node-id="33:22">
                    1 · Poor
                  </p>
                  <p className="relative shrink-0" data-node-id="33:23">
                    5 · Excellent
                  </p>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[20px] items-start overflow-clip relative shrink-0 w-full" data-node-id="25:494" data-name="Attribute inputs">
                <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[376px]" data-node-id="25:495" data-name="Rating input">
                  <div className="[word-break:break-word] content-stretch flex items-center justify-between leading-[normal] not-italic overflow-clip relative shrink-0 text-[13px] w-full whitespace-nowrap" data-node-id="25:496" data-name="Rating label">
                    <p className="font-medium relative shrink-0 text-[#18332b]" data-node-id="25:497">
                      Group vs solo work
                    </p>
                    <p className="font-bold relative shrink-0 text-[#16734c]" data-node-id="25:498">
                      4.0 / 5
                    </p>
                  </div>
                  <RatingScale amount={75} input />
                  <div className="[word-break:break-word] content-stretch flex font-normal items-start justify-between leading-[normal] not-italic overflow-clip relative shrink-0 text-[#69756d] text-[11px] w-full whitespace-nowrap" data-node-id="25:508" data-name="Scale endpoints">
                    <p className="relative shrink-0" data-node-id="25:509">
                      1 · Solo
                    </p>
                    <p className="relative shrink-0" data-node-id="25:510">
                      5 · Group
                    </p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[376px]" data-node-id="25:511" data-name="Rating input">
                  <div className="[word-break:break-word] content-stretch flex items-center justify-between leading-[normal] not-italic overflow-clip relative shrink-0 text-[13px] w-full whitespace-nowrap" data-node-id="25:512" data-name="Rating label">
                    <p className="font-medium relative shrink-0 text-[#18332b]" data-node-id="25:513">
                      Amount of presentations
                    </p>
                    <p className="font-bold relative shrink-0 text-[#16734c]" data-node-id="25:514">
                      2.0 / 5
                    </p>
                  </div>
                  <RatingScale amount={25} input />
                  <div className="[word-break:break-word] content-stretch flex font-normal items-start justify-between leading-[normal] not-italic overflow-clip relative shrink-0 text-[#69756d] text-[11px] w-full whitespace-nowrap" data-node-id="25:524" data-name="Scale endpoints">
                    <p className="relative shrink-0" data-node-id="25:525">
                      1 · None
                    </p>
                    <p className="relative shrink-0" data-node-id="25:526">
                      5 · A lot
                    </p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[376px]" data-node-id="25:527" data-name="Rating input">
                  <div className="[word-break:break-word] content-stretch flex items-center justify-between leading-[normal] not-italic overflow-clip relative shrink-0 text-[13px] w-full whitespace-nowrap" data-node-id="25:528" data-name="Rating label">
                    <p className="font-medium relative shrink-0 text-[#18332b]" data-node-id="25:529">
                      Workload in class
                    </p>
                    <p className="font-bold relative shrink-0 text-[#16734c]" data-node-id="25:530">
                      3.0 / 5
                    </p>
                  </div>
                  <RatingScale amount={50} input />
                  <div className="[word-break:break-word] content-stretch flex font-normal items-start justify-between leading-[normal] not-italic overflow-clip relative shrink-0 text-[#69756d] text-[11px] w-full whitespace-nowrap" data-node-id="25:540" data-name="Scale endpoints">
                    <p className="relative shrink-0" data-node-id="25:541">
                      1 · Light
                    </p>
                    <p className="relative shrink-0" data-node-id="25:542">
                      5 · Heavy
                    </p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[376px]" data-node-id="25:543" data-name="Rating input">
                  <div className="[word-break:break-word] content-stretch flex items-center justify-between leading-[normal] not-italic overflow-clip relative shrink-0 text-[13px] w-full whitespace-nowrap" data-node-id="25:544" data-name="Rating label">
                    <p className="font-medium relative shrink-0 text-[#18332b]" data-node-id="25:545">
                      Workload out of class
                    </p>
                    <p className="font-bold relative shrink-0 text-[#16734c]" data-node-id="25:546">
                      4.0 / 5
                    </p>
                  </div>
                  <RatingScale amount={75} input />
                  <div className="[word-break:break-word] content-stretch flex font-normal items-start justify-between leading-[normal] not-italic overflow-clip relative shrink-0 text-[#69756d] text-[11px] w-full whitespace-nowrap" data-node-id="25:556" data-name="Scale endpoints">
                    <p className="relative shrink-0" data-node-id="25:557">
                      1 · Light
                    </p>
                    <p className="relative shrink-0" data-node-id="25:558">
                      5 · Heavy
                    </p>
                  </div>
                </div>
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start not-italic overflow-clip relative shrink-0 w-full" data-node-id="25:559" data-name="Written review">
                <p className="font-semibold leading-[normal] relative shrink-0 text-[#18332b] text-[14px] whitespace-nowrap" data-node-id="25:560">
                  What should other students know?
                </p>
                <div className="border border-[#dde4dc] border-solid content-stretch flex flex-col font-normal h-[116px] items-start justify-between overflow-clip p-[12px] relative rounded-[8px] shrink-0 w-full" data-node-id="25:561" data-name="Comment field">
                  <p className="leading-[1.5] min-w-full relative shrink-0 text-[#18332b] text-[13px] w-[min-content]" data-node-id="25:562">
                    The weekly labs make the concepts click. Plan ahead for the final group project and leave time for the problem sets.
                  </p>
                  <p className="leading-[normal] relative shrink-0 text-[#69756d] text-[11px] whitespace-nowrap" data-node-id="25:563">
                    116 / 1,000
                  </p>
                </div>
              </div>
              <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0" data-node-id="25:564" data-name="Anonymous posting">
                <div className="bg-[#16734c] content-stretch flex items-center justify-center overflow-clip relative rounded-[4px] shrink-0 size-[18px]" data-node-id="25:565" data-name="Selected checkbox">
                  <div className="relative shrink-0 size-[14px]" data-node-id="25:965" data-name="check">
                    <Image alt="" width={14} height={14} className="absolute block inset-0 max-w-none size-full" src={imgCheck} unoptimized />
                  </div>
                </div>
                <p className="[word-break:break-word] font-normal leading-[normal] not-italic relative shrink-0 text-[#18332b] text-[13px] whitespace-nowrap" data-node-id="25:567">
                  Post anonymously (student account required)
                </p>
              </div>
            </div>
          </FormLightbox>
        </div>
        <div className="bg-[#f1f3ee] content-stretch flex gap-[4px] items-start overflow-clip p-[4px] relative rounded-[8px] shrink-0" data-node-id="25:324" data-name="Perspective switch">
          <Link href="/ratings" aria-current="page" className="bg-white content-stretch flex h-[36px] items-center overflow-clip px-[16px] relative rounded-[6px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0" data-node-id="25:325" data-name="Student view option">
            <p className="[word-break:break-word] font-semibold leading-[normal] not-italic relative shrink-0 text-[#16734c] text-[14px] whitespace-nowrap" data-node-id="25:327">
              Student view
            </p>
          </Link>
          <Link href="/ratings/professor" className="bg-[#eaf3ec] content-stretch flex h-[36px] items-center overflow-clip px-[16px] relative rounded-[6px] shrink-0" data-node-id="25:326" data-name="Professor view option">
            <p className="[word-break:break-word] font-semibold leading-[normal] not-italic relative shrink-0 text-[#16734c] text-[14px] whitespace-nowrap" data-node-id="25:330">
              Professor view
            </p>
          </Link>
        </div>
        <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-node-id="25:331" data-name="Detail columns">
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px relative" data-node-id="25:332" data-name="Class insights and reviews">
            <div className="bg-white border border-[#dde4dc] border-solid content-stretch flex flex-col gap-[24px] items-start overflow-clip p-[24px] relative rounded-[12px] shrink-0 w-full" data-node-id="25:333" data-name="Class overview">
              <div className="[word-break:break-word] content-stretch flex gap-[28px] items-center not-italic overflow-clip relative shrink-0 w-full" data-node-id="25:334" data-name="Rating summary">
                <div className="content-stretch flex flex-col gap-[8px] items-start leading-[normal] overflow-clip relative shrink-0 w-[164px] whitespace-nowrap" data-node-id="25:335" data-name="Overall class score">
                  <p className="font-semibold relative shrink-0 text-[#69756d] text-[13px]" data-node-id="25:336">
                    Overall class rating
                  </p>
                  <div className="content-stretch flex gap-[8px] items-baseline overflow-clip relative shrink-0" data-node-id="25:337" data-name="Score">
                    <p className="font-bold relative shrink-0 text-[#16734c] text-[52px]" data-node-id="25:338">
                      4.3
                    </p>
                    <p className="font-normal relative shrink-0 text-[#69756d] text-[16px]" data-node-id="25:339">
                      / 5
                    </p>
                  </div>
                  <p className="font-normal relative shrink-0 text-[#69756d] text-[13px]" data-node-id="25:340">
                    Based on 128 reviews
                  </p>
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col font-normal gap-[12px] items-start min-w-px overflow-clip relative" data-node-id="25:341" data-name="Class snapshot">
                  <p className="leading-[normal] relative shrink-0 text-[#18332b] text-[20px] whitespace-nowrap" data-node-id="25:342">
                    Hands-on learning. Real-world data.
                  </p>
                  <p className="leading-[24px] min-w-full relative shrink-0 text-[#69756d] text-[16px] w-[min-content]" data-node-id="25:343">
                    Explore Python, statistics, and data visualization through weekly labs and a final team project.
                  </p>
                </div>
              </div>
              <div className="[word-break:break-word] border-[#dde4dc] border-solid border-t content-stretch flex font-normal items-start justify-between leading-[normal] not-italic overflow-clip pt-[20px] relative shrink-0 w-full whitespace-nowrap" data-node-id="25:351" data-name="Attribute heading">
                <p className="relative shrink-0 text-[#18332b] text-[17px]" data-node-id="25:352">
                  What to expect
                </p>
                <p className="relative shrink-0 text-[#69756d] text-[12px]" data-node-id="25:353">
                  Average amount · not a quality score
                </p>
              </div>
              <div className="content-stretch flex gap-[24px] items-start overflow-clip relative shrink-0 w-full" data-node-id="25:354" data-name="Attribute row">
                <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[392px]" data-node-id="25:355" data-name="Aggregate rating">
                  <div className="[word-break:break-word] content-stretch flex items-center justify-between leading-[normal] not-italic overflow-clip relative shrink-0 text-[13px] w-full whitespace-nowrap" data-node-id="25:356" data-name="Rating label">
                    <p className="font-medium relative shrink-0 text-[#18332b]" data-node-id="25:357">
                      Group vs solo work
                    </p>
                    <p className="font-bold relative shrink-0 text-[#16734c]" data-node-id="25:358">
                      3.8 / 5
                    </p>
                  </div>
                  <RatingScale amount={70} />
                  <div className="[word-break:break-word] content-stretch flex font-normal items-start justify-between leading-[normal] not-italic overflow-clip relative shrink-0 text-[#69756d] text-[11px] w-full whitespace-nowrap" data-node-id="25:363" data-name="Scale endpoints">
                    <p className="relative shrink-0" data-node-id="25:364">
                      1 · Solo
                    </p>
                    <p className="relative shrink-0" data-node-id="25:365">
                      5 · Group
                    </p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[392px]" data-node-id="25:366" data-name="Aggregate rating">
                  <div className="[word-break:break-word] content-stretch flex items-center justify-between leading-[normal] not-italic overflow-clip relative shrink-0 text-[13px] w-full whitespace-nowrap" data-node-id="25:367" data-name="Rating label">
                    <p className="font-medium relative shrink-0 text-[#18332b]" data-node-id="25:368">
                      Amount of presentations
                    </p>
                    <p className="font-bold relative shrink-0 text-[#16734c]" data-node-id="25:369">
                      2.2 / 5
                    </p>
                  </div>
                  <RatingScale amount={30} />
                  <div className="[word-break:break-word] content-stretch flex font-normal items-start justify-between leading-[normal] not-italic overflow-clip relative shrink-0 text-[#69756d] text-[11px] w-full whitespace-nowrap" data-node-id="25:374" data-name="Scale endpoints">
                    <p className="relative shrink-0" data-node-id="25:375">
                      1 · None
                    </p>
                    <p className="relative shrink-0" data-node-id="25:376">
                      5 · A lot
                    </p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[24px] items-start overflow-clip relative shrink-0 w-full" data-node-id="25:377" data-name="Attribute row">
                <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[392px]" data-node-id="25:378" data-name="Aggregate rating">
                  <div className="[word-break:break-word] content-stretch flex items-center justify-between leading-[normal] not-italic overflow-clip relative shrink-0 text-[13px] w-full whitespace-nowrap" data-node-id="25:379" data-name="Rating label">
                    <p className="font-medium relative shrink-0 text-[#18332b]" data-node-id="25:380">
                      Workload in class
                    </p>
                    <p className="font-bold relative shrink-0 text-[#16734c]" data-node-id="25:381">
                      3.1 / 5
                    </p>
                  </div>
                  <RatingScale amount={52.5} />
                  <div className="[word-break:break-word] content-stretch flex font-normal items-start justify-between leading-[normal] not-italic overflow-clip relative shrink-0 text-[#69756d] text-[11px] w-full whitespace-nowrap" data-node-id="25:386" data-name="Scale endpoints">
                    <p className="relative shrink-0" data-node-id="25:387">
                      1 · Light
                    </p>
                    <p className="relative shrink-0" data-node-id="25:388">
                      5 · Heavy
                    </p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[392px]" data-node-id="25:389" data-name="Aggregate rating">
                  <div className="[word-break:break-word] content-stretch flex items-center justify-between leading-[normal] not-italic overflow-clip relative shrink-0 text-[13px] w-full whitespace-nowrap" data-node-id="25:390" data-name="Rating label">
                    <p className="font-medium relative shrink-0 text-[#18332b]" data-node-id="25:391">
                      Workload out of class
                    </p>
                    <p className="font-bold relative shrink-0 text-[#16734c]" data-node-id="25:392">
                      4.0 / 5
                    </p>
                  </div>
                  <RatingScale amount={75} />
                  <div className="[word-break:break-word] content-stretch flex font-normal items-start justify-between leading-[normal] not-italic overflow-clip relative shrink-0 text-[#69756d] text-[11px] w-full whitespace-nowrap" data-node-id="25:397" data-name="Scale endpoints">
                    <p className="relative shrink-0" data-node-id="25:398">
                      1 · Light
                    </p>
                    <p className="relative shrink-0" data-node-id="25:399">
                      5 · Heavy
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-node-id="25:400" data-name="Review list heading">
              <p className="[word-break:break-word] font-bold leading-[normal] not-italic relative shrink-0 text-[#18332b] text-[24px] whitespace-nowrap" data-node-id="25:401">
                Student reviews
              </p>
              <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0" data-node-id="25:402" data-name="Review sort">
                <p className="[word-break:break-word] font-normal leading-[normal] not-italic relative shrink-0 text-[#69756d] text-[13px] whitespace-nowrap" data-node-id="25:403">
                  Most recent
                </p>
                <div className="relative shrink-0 size-[14px]" data-node-id="25:941" data-name="chevron-down">
                  <Image alt="" width={14} height={14} className="absolute block inset-0 max-w-none size-full" src={imgChevronDown} unoptimized />
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-node-id="25:405" data-name="Review filters">
              <div className="bg-[#eaf3ec] border border-[#16734c] border-solid content-stretch flex items-start overflow-clip px-[14px] py-[9px] relative rounded-[8px] shrink-0" data-node-id="25:406" data-name="Review filter">
                <p className="[word-break:break-word] font-semibold leading-[normal] not-italic relative shrink-0 text-[#16734c] text-[12px] whitespace-nowrap" data-node-id="25:407">
                  All 128
                </p>
              </div>
              <div className="bg-white border border-[#dde4dc] border-solid content-stretch flex items-start overflow-clip px-[14px] py-[9px] relative rounded-[8px] shrink-0" data-node-id="25:408" data-name="Review filter">
                <p className="[word-break:break-word] font-semibold leading-[normal] not-italic relative shrink-0 text-[#69756d] text-[12px] whitespace-nowrap" data-node-id="25:409">
                  All semesters
                </p>
              </div>
            </div>
            <div className="bg-white border border-[#dde4dc] border-solid content-stretch flex flex-col gap-[16px] items-start overflow-clip p-[24px] relative rounded-[12px] shrink-0 w-full" data-node-id="25:412" data-name="Student review">
              <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-node-id="25:413" data-name="Review header">
                <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0" data-node-id="25:414" data-name="Author">
                  <div className="bg-[#f1f3ee] content-stretch flex items-center justify-center overflow-clip relative rounded-[18px] shrink-0 size-[36px]" data-node-id="25:415" data-name="Anonymous avatar">
                    <div className="relative shrink-0 size-[18px]" data-node-id="25:944" data-name="user-round">
                      <Image alt="" width={18} height={18} className="absolute block inset-0 max-w-none size-full" src={imgUserRound} unoptimized />
                    </div>
                  </div>
                  <div className="[word-break:break-word] content-stretch flex flex-col gap-[3px] items-start leading-[normal] not-italic overflow-clip relative shrink-0 whitespace-nowrap" data-node-id="25:417" data-name="Author information">
                    <p className="font-semibold relative shrink-0 text-[#18332b] text-[14px]" data-node-id="25:418">
                      Anonymous student
                    </p>
                    <p className="font-normal relative shrink-0 text-[#69756d] text-[12px]" data-node-id="25:419">
                      CS 210 · Spring 2026
                    </p>
                  </div>
                </div>
                <div className="bg-[#eaf3ec] content-stretch flex gap-[5px] items-start overflow-clip p-[8px] relative rounded-[6px] shrink-0" data-node-id="25:420" data-name="Review score">
                  <div className="relative shrink-0 size-[14px]" data-node-id="25:947" data-name="star">
                    <Image alt="" width={14} height={14} className="absolute block inset-0 max-w-none size-full" src={imgStar} unoptimized />
                  </div>
                  <p className="[word-break:break-word] font-bold leading-[normal] not-italic relative shrink-0 text-[#16734c] text-[14px] whitespace-nowrap" data-node-id="25:422">
                    4 / 5
                  </p>
                </div>
              </div>
              <p className="[word-break:break-word] font-normal leading-[24px] min-w-full not-italic relative shrink-0 text-[#18332b] text-[16px] w-[min-content]" data-node-id="25:423">
                The labs are the best part — you actually get to work with messy, real data. The final project is a big chunk of the grade, so find a group early. Expect about 6–8 hours of work outside class each week.
              </p>
              <div className="content-stretch flex gap-[8px] items-start overflow-clip relative shrink-0" data-node-id="25:424" data-name="Experience tags">
                <div className="bg-[#f1f3ee] content-stretch flex items-start overflow-clip px-[10px] py-[5px] relative rounded-[5px] shrink-0" data-node-id="25:425" data-name="Experience tag">
                  <p className="[word-break:break-word] font-normal leading-[normal] not-italic relative shrink-0 text-[#69756d] text-[12px] whitespace-nowrap" data-node-id="25:426">
                    Group vs solo 4/5
                  </p>
                </div>
                <div className="bg-[#f1f3ee] content-stretch flex items-start overflow-clip px-[10px] py-[5px] relative rounded-[5px] shrink-0" data-node-id="25:427" data-name="Experience tag">
                  <p className="[word-break:break-word] font-normal leading-[normal] not-italic relative shrink-0 text-[#69756d] text-[12px] whitespace-nowrap" data-node-id="25:428">
                    Presentations 2/5
                  </p>
                </div>
                <div className="bg-[#f1f3ee] content-stretch flex items-start overflow-clip px-[10px] py-[5px] relative rounded-[5px] shrink-0" data-node-id="25:429" data-name="Experience tag">
                  <p className="[word-break:break-word] font-normal leading-[normal] not-italic relative shrink-0 text-[#69756d] text-[12px] whitespace-nowrap" data-node-id="25:430">
                    Out-of-class work 4/5
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white border border-[#dde4dc] border-solid content-stretch flex flex-col gap-[16px] items-start overflow-clip p-[24px] relative rounded-[12px] shrink-0 w-full" data-node-id="25:436" data-name="Student review">
              <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-node-id="25:437" data-name="Review header">
                <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0" data-node-id="25:438" data-name="Author">
                  <div className="bg-[#f1f3ee] content-stretch flex items-center justify-center overflow-clip relative rounded-[18px] shrink-0 size-[36px]" data-node-id="25:439" data-name="Anonymous avatar">
                    <div className="relative shrink-0 size-[18px]" data-node-id="25:953" data-name="user-round">
                      <Image alt="" width={18} height={18} className="absolute block inset-0 max-w-none size-full" src={imgUserRound} unoptimized />
                    </div>
                  </div>
                  <div className="[word-break:break-word] content-stretch flex flex-col gap-[3px] items-start leading-[normal] not-italic overflow-clip relative shrink-0 whitespace-nowrap" data-node-id="25:441" data-name="Author information">
                    <p className="font-semibold relative shrink-0 text-[#18332b] text-[14px]" data-node-id="25:442">
                      Anonymous student
                    </p>
                    <p className="font-normal relative shrink-0 text-[#69756d] text-[12px]" data-node-id="25:443">
                      CS 210 · Fall 2025
                    </p>
                  </div>
                </div>
                <div className="bg-[#eaf3ec] content-stretch flex gap-[5px] items-start overflow-clip p-[8px] relative rounded-[6px] shrink-0" data-node-id="25:444" data-name="Review score">
                  <div className="relative shrink-0 size-[14px]" data-node-id="25:956" data-name="star">
                    <Image alt="" width={14} height={14} className="absolute block inset-0 max-w-none size-full" src={imgStar} unoptimized />
                  </div>
                  <p className="[word-break:break-word] font-bold leading-[normal] not-italic relative shrink-0 text-[#16734c] text-[14px] whitespace-nowrap" data-node-id="25:446">
                    5 / 5
                  </p>
                </div>
              </div>
              <p className="[word-break:break-word] font-normal leading-[24px] min-w-full not-italic relative shrink-0 text-[#18332b] text-[16px] w-[min-content]" data-node-id="25:447">
                A great first step into data science. You don’t need to be a Python expert, but keeping up with the weekly problem sets makes a huge difference. One short presentation at the end of the semester.
              </p>
              <div className="content-stretch flex gap-[8px] items-start overflow-clip relative shrink-0" data-node-id="25:448" data-name="Experience tags">
                <div className="bg-[#f1f3ee] content-stretch flex items-start overflow-clip px-[10px] py-[5px] relative rounded-[5px] shrink-0" data-node-id="25:449" data-name="Experience tag">
                  <p className="[word-break:break-word] font-normal leading-[normal] not-italic relative shrink-0 text-[#69756d] text-[12px] whitespace-nowrap" data-node-id="25:450">
                    Useful skills
                  </p>
                </div>
                <div className="bg-[#f1f3ee] content-stretch flex items-start overflow-clip px-[10px] py-[5px] relative rounded-[5px] shrink-0" data-node-id="25:451" data-name="Experience tag">
                  <p className="[word-break:break-word] font-normal leading-[normal] not-italic relative shrink-0 text-[#69756d] text-[12px] whitespace-nowrap" data-node-id="25:452">
                    Clear expectations
                  </p>
                </div>
                <div className="bg-[#f1f3ee] content-stretch flex items-start overflow-clip px-[10px] py-[5px] relative rounded-[5px] shrink-0" data-node-id="25:453" data-name="Experience tag">
                  <p className="[word-break:break-word] font-normal leading-[normal] not-italic relative shrink-0 text-[#69756d] text-[12px] whitespace-nowrap" data-node-id="25:454">
                    Weekly assignments
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white border border-[#dde4dc] border-solid content-stretch flex h-[42px] items-center justify-center overflow-clip px-[18px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 w-full" data-node-id="25:460" data-name="Action">
              <p className="[word-break:break-word] font-semibold leading-[normal] not-italic relative shrink-0 text-[#18332b] text-[14px] whitespace-nowrap" data-node-id="25:461">
                Load more reviews
              </p>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
