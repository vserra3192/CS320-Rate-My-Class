"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { apiUrl, fetchCourseData, sampleCourses, sampleReviews } from "./course-data";
import type { Course, Review } from "./course-data";

type CourseList = { courses: Course[]; loading: boolean; error: string | null };
const CourseContext = createContext<CourseList>({ courses: [], loading: true, error: null });

type CourseDetail = Course & {
  rating_counts?: Record<keyof Course["average_ratings"], Record<string, number>>;
};

export type CoursePageData = { course: CourseDetail; reviews: Review[] };
type CourseResult = CoursePageData | string | null;

const CourseDetailsContext = createContext<{
  results: Record<string, CourseResult>;
  loadCourse: (courseId: string) => void;
} | null>(null);

export function CourseProvider({ children }: { children: ReactNode }) {
  const [list, setList] = useState<CourseList>({
    courses: apiUrl ? [] : sampleCourses,
    loading: Boolean(apiUrl),
    error: null,
  });

  useEffect(() => {
    if (!apiUrl) return;

    const controller = new AbortController();
    fetchCourseData<Course[]>("", controller.signal)
      .then((courses) => setList({ courses, loading: false, error: null }))
      .catch(() => {
        if (!controller.signal.aborted) {
          setList({ courses: [], loading: false, error: "Could not load classes." });
        }
      });
    return () => controller.abort();
  }, []);

  const [results, setResults] = useState<Record<string, CourseResult>>({});
  // Keep in-flight and successful requests available across tab changes.
  const requests = useRef(new Map<string, Promise<CoursePageData>>());

  const loadCourse = useCallback((courseId: string) => {
    if (requests.current.has(courseId)) return;

    setResults((current) => ({ ...current, [courseId]: null }));
    const request = Promise.all([
      fetchCourseData<CourseDetail>(`${courseId}/`),
      fetchCourseData<Review[]>(`${courseId}/reviews/`),
    ]).then(([course, reviews]) => ({ course, reviews }));

    requests.current.set(courseId, request);
    request.then(
      (data) => setResults((current) => ({ ...current, [courseId]: data })),
      (error: unknown) => {
        requests.current.delete(courseId);
        const message = error instanceof Error ? error.message : "Could not load course data.";
        setResults((current) => ({ ...current, [courseId]: message }));
      },
    );
  }, []);

  return (
    <CourseContext.Provider value={list}>
      <CourseDetailsContext.Provider value={{ results, loadCourse }}>
        {children}
      </CourseDetailsContext.Provider>
    </CourseContext.Provider>
  );
}

export function useCourseList() {
  return useContext(CourseContext);
}

export function useCourses() {
  return useCourseList().courses;
}

export function useCourseDetails(courseId: string): CourseResult {
  const context = useContext(CourseDetailsContext);
  const loadCourse = context?.loadCourse;

  useEffect(() => {
    if (apiUrl) loadCourse?.(courseId);
  }, [courseId, loadCourse]);

  if (!apiUrl) {
    const course = sampleCourses.find(({ id }) => String(id) === courseId);
    return course
      ? { course, reviews: course.id === 1 ? sampleReviews : [] }
      : "Course not found.";
  }

  return context?.results[courseId] ?? null;
}
