"use client";

import {useState} from "react";
import { SelectedCourse, type CoursePageData } from "../components/selected-course";
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
    <SelectedCourse>
      {(data) => <RatingsContent {...data} />}
    </SelectedCourse>
  );
}

function RatingsContent({ course, reviews }: CoursePageData) {
  const ratings = course.average_ratings;
  const studentHref = `/ratings?courseId=${course.id}`;
  const professorHref = `/ratings/professor?courseId=${course.id}`;
  const visibleReviews = reviews.filter((review) => review.author_role !== "professor");

  const [overallRating, setOverallRating] = useState(0);
  const [groupWork, setGroupWork] = useState(3);
  const [presentationAmount, setPresentationAmount] = useState(3);
  const [classWorkload, setClassWorkload] = useState(3);
  const [outClassWorkload, setOutClassWorkload] = useState(3);

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
            / {course.code ?? course.title}
          </p>
        </div>
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="25:317" data-name="Class header">
          <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-node-id="25:318" data-name="Class identity">
            <h1 className="[word-break:break-word] font-bold leading-[normal] not-italic relative shrink-0 text-[#18332b] text-[40px] whitespace-nowrap" data-node-id="25:320">
              {course.title}
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
                    {[course.code, course.title].filter(Boolean).join(" · ")}
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
                    {overallRating} / 5
                  </p>
                </div>
                <div className="content-stretch flex gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-node-id="33:10" data-name="Score choices">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <button
                  key = {rating}
                  type = "button"
                  aria-pressed= {overallRating === rating}
                  onClick = {() => setOverallRating(rating)}
                  className={`h-[40px] flex-1 rounded-[6px] border text-[15px] font-semibold ${
                    overallRating === rating
                      ?  "border-[#16734c] bg-[#16734c] text-white"
                      : "border-[#dde4dc] bg-white text-[#18332b]"
                    }`}
                  >
                    {rating}
                  </button>
                  ))}
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
                      {groupWork.toFixed(1)} / 5
                    </p>
                  </div>
                  <div className="w-full">
                    <input
                      type="range"
                      aria-label="Group vs solo work"
                      min={1}
                      max={5}
                      step={1}
                      value={groupWork}
                      onChange={(event) => setGroupWork(event.currentTarget.valueAsNumber)}
                      className="review-slider block w-full"
                    />

                    <div
                      className="pointer-events-none absolute inset-x-[8px] top-1/2"
                      aria-hidden="true"
                    >
                      {[1, 2, 3, 4, 5].map((number) => (
                        <span
                          key={number}
                          className="absolute top-0 h-[6px] w-px -translate-x-1/2 -translate-y-1/2 bg-[#69756d]"
                          style={{ left: `${((number - 1) / 4) * 100}%` }}
                        />
                      ))}
                    </div>
                  </div>
                  
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
                      {presentationAmount.toFixed(1)} / 5
                    </p>
                  </div>
                  <div className="w-full">
                    <input
                      type="range"
                      aria-label="Amount of Presentations"
                      min={1}
                      max={5}
                      step={1}
                      value={presentationAmount}
                      onChange={(event) => setPresentationAmount(event.currentTarget.valueAsNumber)}
                      className="review-slider block w-full"
                    />

                    <div
                      className="pointer-events-none absolute inset-x-[8px] top-1/2"
                      aria-hidden="true"
                    >
                      {[1, 2, 3, 4, 5].map((number) => (
                        <span
                          key={number}
                          className="absolute top-0 h-[6px] w-px -translate-x-1/2 -translate-y-1/2 bg-[#69756d]"
                          style={{ left: `${((number - 1) / 4) * 100}%` }}
                        />
                      ))}
                    </div>
                  </div>
                  
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
                      {classWorkload.toFixed(1)} / 5
                    </p>
                  </div>
                  <div className="w-full">
                    <input
                      type="range"
                      aria-label="Workload in class"
                      min={1}
                      max={5}
                      step={1}
                      value={classWorkload}
                      onChange={(event) => setClassWorkload(event.currentTarget.valueAsNumber)}
                      className="review-slider block w-full"
                    />

                    <div
                      className="pointer-events-none absolute inset-x-[8px] top-1/2"
                      aria-hidden="true"
                    >
                      {[1, 2, 3, 4, 5].map((number) => (
                        <span
                          key={number}
                          className="absolute top-0 h-[6px] w-px -translate-x-1/2 -translate-y-1/2 bg-[#69756d]"
                          style={{ left: `${((number - 1) / 4) * 100}%` }}
                        />
                      ))}
                    </div>
                  </div>
                  
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
                      {outClassWorkload.toFixed(1)} / 5
                    </p>
                  </div>
                  <div className="w-full">
                    <input
                      type="range"
                      aria-label="Workload out of class"
                      min={1}
                      max={5}
                      step={1}
                      value={outClassWorkload}
                      onChange={(event) => setOutClassWorkload(event.currentTarget.valueAsNumber)}
                      className="review-slider block w-full"
                    />

                    <div
                      className="pointer-events-none absolute inset-x-[8px] top-1/2"
                      aria-hidden="true"
                    >
                      {[1, 2, 3, 4, 5].map((number) => (
                        <span
                          key={number}
                          className="absolute top-0 h-[6px] w-px -translate-x-1/2 -translate-y-1/2 bg-[#69756d]"
                          style={{ left: `${((number - 1) / 4) * 100}%` }}
                        />
                      ))}
                    </div>
                  </div>
                  
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

                  </p>
                  <p className="leading-[normal] relative shrink-0 text-[#69756d] text-[11px] whitespace-nowrap" data-node-id="25:563">
                    0 / 1,000
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
          <Link href={studentHref} aria-current="page" className="bg-white content-stretch flex h-[36px] items-center overflow-clip px-[16px] relative rounded-[6px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0" data-node-id="25:325" data-name="Student view option">
            <p className="[word-break:break-word] font-semibold leading-[normal] not-italic relative shrink-0 text-[#16734c] text-[14px] whitespace-nowrap" data-node-id="25:327">
              Student view
            </p>
          </Link>
          <Link href={professorHref} className="bg-[#eaf3ec] content-stretch flex h-[36px] items-center overflow-clip px-[16px] relative rounded-[6px] shrink-0" data-node-id="25:326" data-name="Professor view option">
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
                      {ratings.overall_rating?.toFixed(1) ?? "—"}
                    </p>
                    <p className="font-normal relative shrink-0 text-[#69756d] text-[16px]" data-node-id="25:339">
                      / 5
                    </p>
                  </div>
                  <p className="font-normal relative shrink-0 text-[#69756d] text-[13px]" data-node-id="25:340">
                    Based on {course.review_count} {course.review_count === 1 ? "review" : "reviews"}
                  </p>
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col font-normal gap-[12px] items-start min-w-px overflow-clip relative" data-node-id="25:341" data-name="Class snapshot">
                  <p className="leading-[normal] relative shrink-0 text-[#18332b] text-[20px] whitespace-nowrap" data-node-id="25:342">
                    {course.professor}
                  </p>
                  <p className="leading-[24px] min-w-full relative shrink-0 text-[#69756d] text-[16px] w-[min-content]" data-node-id="25:343">
                    {[course.code, course.credits !== null && `${course.credits} credits`].filter(Boolean).join(" · ")}
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
                      {ratings.group_vs_solo === null ? "—" : `${ratings.group_vs_solo.toFixed(1)} / 5`}
                    </p>
                  </div>
                  {ratings.group_vs_solo !== null && <RatingScale amount={(ratings.group_vs_solo - 1) * 25} />}
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
                      {ratings.presentations === null ? "—" : `${ratings.presentations.toFixed(1)} / 5`}
                    </p>
                  </div>
                  {ratings.presentations !== null && <RatingScale amount={(ratings.presentations - 1) * 25} />}
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
                      {ratings.workload_in_class === null ? "—" : `${ratings.workload_in_class.toFixed(1)} / 5`}
                    </p>
                  </div>
                  {ratings.workload_in_class !== null && <RatingScale amount={(ratings.workload_in_class - 1) * 25} />}
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
                      {ratings.workload_out_of_class === null ? "—" : `${ratings.workload_out_of_class.toFixed(1)} / 5`}
                    </p>
                  </div>
                  {ratings.workload_out_of_class !== null && <RatingScale amount={(ratings.workload_out_of_class - 1) * 25} />}
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
                  All {visibleReviews.length}
                </p>
              </div>
            </div>
            {visibleReviews.length === 0 && <p>No student reviews yet.</p>}
            {visibleReviews.map((review) => (
              <div key={review.id} className="bg-white border border-[#dde4dc] border-solid content-stretch flex flex-col gap-[16px] items-start overflow-clip p-[24px] relative rounded-[12px] shrink-0 w-full" data-node-id="25:412" data-name="Student review">
                <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-node-id="25:413" data-name="Review header">
                  <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0" data-node-id="25:414" data-name="Author">
                    <div className="bg-[#f1f3ee] content-stretch flex items-center justify-center overflow-clip relative rounded-[18px] shrink-0 size-[36px]" data-node-id="25:415" data-name="Anonymous avatar">
                      <div className="relative shrink-0 size-[18px]" data-node-id="25:944" data-name="user-round">
                        <Image alt="" width={18} height={18} className="absolute block inset-0 max-w-none size-full" src={imgUserRound} unoptimized />
                      </div>
                    </div>
                    <div className="[word-break:break-word] content-stretch flex flex-col gap-[3px] items-start leading-[normal] not-italic overflow-clip relative shrink-0 whitespace-nowrap" data-node-id="25:417" data-name="Author information">
                      <p className="font-semibold relative shrink-0 text-[#18332b] text-[14px]" data-node-id="25:418">
                        {review.author}
                      </p>
                      <p className="font-normal relative shrink-0 text-[#69756d] text-[12px]" data-node-id="25:419">
                        {[course.code, review.semester].filter(Boolean).join(" · ")}
                      </p>
                    </div>
                  </div>
                  <div className="bg-[#eaf3ec] content-stretch flex gap-[5px] items-start overflow-clip p-[8px] relative rounded-[6px] shrink-0" data-node-id="25:420" data-name="Review score">
                    <div className="relative shrink-0 size-[14px]" data-node-id="25:947" data-name="star">
                      <Image alt="" width={14} height={14} className="absolute block inset-0 max-w-none size-full" src={imgStar} unoptimized />
                    </div>
                    <p className="[word-break:break-word] font-bold leading-[normal] not-italic relative shrink-0 text-[#16734c] text-[14px] whitespace-nowrap" data-node-id="25:422">
                      {review.overall_rating === null ? "Unrated" : `${review.overall_rating} / 5`}
                    </p>
                  </div>
                </div>
                <p className="[word-break:break-word] font-normal leading-[24px] min-w-full not-italic relative shrink-0 text-[#18332b] text-[16px] w-[min-content]" data-node-id="25:423">
                  {review.comment}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </main>
  );
}
