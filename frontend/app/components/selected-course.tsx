"use client";

import { Suspense } from "react";
import type { ReactNode } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useCourseDetails, type CoursePageData } from "./course-provider";

export type { CoursePageData } from "./course-provider";

type Props = { children: (data: CoursePageData) => ReactNode };

export function SelectedCourse({ children }: Props) {
  return (
    <Suspense fallback={<p role="status">Loading class…</p>}>
      <CourseSelection>{children}</CourseSelection>
    </Suspense>
  );
}

function CourseSelection({ children }: Props) {
  const courseId = useSearchParams().get("courseId");
  if (!courseId || !/^[1-9]\d*$/.test(courseId)) {
    return <p><Link href="/">Choose a class</Link> to see its ratings.</p>;
  }
  return <CourseRequest key={courseId} courseId={courseId}>{children}</CourseRequest>;
}

function CourseRequest({ courseId, children }: Props & { courseId: string }) {
  const result = useCourseDetails(courseId);

  if (result === null) return <p role="status">Loading class…</p>;
  if (typeof result === "string") return <p role="alert">{result} <Link href="/">Back to classes</Link></p>;
  return children(result);
}
