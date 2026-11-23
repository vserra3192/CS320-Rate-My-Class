"use client";
import { useState } from "react";
import { ClassResult } from "./components/class-result";
import Image from "next/image";
import { Header } from "./components/header";
import { useCourseList } from "./components/course-provider";

const assetPathPrefix = "/figma";
const imgSearch = `${assetPathPrefix}/eb0a0.svg`;
const imgX = `${assetPathPrefix}/04b91.svg`;
const imgSlidersHorizontal = `${assetPathPrefix}/d8b84.svg`;
const imgChevronDown = `${assetPathPrefix}/eb9cb.svg`;


export default function ClassSearchAndResults() {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const { courses, loading, error } = useCourseList();
  const matches = query
    ? courses.filter(({ code, title }) =>
        [code, title].some((value) => value?.toLowerCase().includes(query)),
      )
    : courses.slice(0, 6);

  function handleSearch() {
    setQuery(search.trim().toLowerCase());
  }

  return (
    <main className="bg-[#f7f7f2] content-stretch flex flex-col items-start relative size-full" data-node-id="25:3" data-name="Class search and results">
      <Header />
      <div className="content-stretch flex flex-col gap-[28px] items-start overflow-clip px-[64px] py-[44px] relative shrink-0 w-full" data-node-id="25:22" data-name="Search workspace">
        <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-node-id="25:27" data-name="Search controls">
          <div className="bg-white border border-[#dde4dc] border-solid content-stretch flex flex-[1_0_0] gap-[12px] h-[50px] items-center min-w-px overflow-clip px-[16px] relative rounded-[8px]" data-node-id="25:33" data-name="Search input">
            <div className="relative shrink-0 size-[18px]" data-node-id="25:893" data-name="search">
              <Image alt="" width={18} height={18} className="absolute block inset-0 max-w-none size-full" src={imgSearch} unoptimized />
            </div>
              <input
                type="text"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") handleSearch();
                }}
                placeholder="Search classes"
                aria-label="Search classes"
                className="min-w-0 flex-1 border-none bg-transparent text-[15px] text-[#18332b] outline-none placeholder:text-[#69756d]"
              />
            <div className="relative shrink-0 size-[16px]" data-node-id="25:896" data-name="x">
              <button
                type="button"
                aria-label="Clear search"
                onClick={() => {
                  setSearch("");
                  setQuery("");
                }}
                className="relative shrink-0 size-[16px] cursor-pointer"
              >
                <Image
                  alt=""
                  width={16}
                  height={16}
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgX}
                  unoptimized
                />
              </button>
            </div>
          </div>
            <button
            onClick={() => handleSearch()}
            type="button"
            className="bg-[#16734c] border border-[#16734c] flex h-[42px] items-center justify-center px-[18px] rounded-[8px] shrink-0 font-semibold text-[14px] text-white cursor-pointer"
            >
              Search Classes
            </button>
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
        {!process.env.NEXT_PUBLIC_API_URL && <p className="text-sm text-[#69756d]">Sample course data</p>}
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
          {loading && <p className="p-6" role="status">Loading classes…</p>}
          {error && <p className="p-6" role="alert">{error}</p>}
          {!loading && !error && matches.length === 0 && <p className="p-6">No courses found.</p>}
          {matches.map((course) => (
            <ClassResult
              key={course.id}
              courseId={course.id}
              code={course.code}
              title={course.title}
              professor={course.professor}
              credits={course.credits}
              reviewCount={course.review_count}
              overall={course.average_ratings.overall_rating}
              groupWork={course.average_ratings.group_vs_solo}
              presentations={course.average_ratings.presentations}
              inClassWorkload={course.average_ratings.workload_in_class}
              outOfClassWorkload={course.average_ratings.workload_out_of_class}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
