export type Course = {
  id: number;
  code: string | null;
  title: string;
  professor: string;
  credits: number | null;
  review_count: number;
  average_ratings: {
    overall_rating: number | null;
    group_vs_solo: number | null;
    presentations: number | null;
    workload_in_class: number | null;
    workload_out_of_class: number | null;
  };
};

export type Review = {
  id: number;
  author: string;
  author_role: string | null;
  semester: string | null;
  overall_rating: number | null;
  comment: string | null;
};

export const apiUrl = process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "");

export async function fetchCourseData<T>(path: string, signal?: AbortSignal): Promise<T> {
  const response = await fetch(`${apiUrl}/api/v1/courses/${path}`, { signal });
  if (!response.ok) {
    throw new Error(response.status === 404 ? "Course not found." : "Could not load course data.");
  }
  return response.json();
}

export const sampleCourses: Course[] = [
  {
    id: 1,
    code: "CS 210",
    title: "Introduction to Data Science",
    professor: "Dr. Maya Chen",
    credits: 3,
    review_count: 2,
    average_ratings: {
      overall_rating: 4.5,
      group_vs_solo: 4,
      presentations: 2,
      workload_in_class: 3,
      workload_out_of_class: 4,
    },
  },
  {
    id: 2,
    code: "CS 320",
    title: "Software Engineering",
    professor: "Sample instructor",
    credits: 3,
    review_count: 0,
    average_ratings: {
      overall_rating: null,
      group_vs_solo: null,
      presentations: null,
      workload_in_class: null,
      workload_out_of_class: null,
    },
  },
];

export const sampleReviews: Review[] = [
  {
    id: 1,
    author: "Anonymous student",
    author_role: "student",
    semester: "Spring 2026",
    overall_rating: 4,
    comment: "The weekly labs helped me understand how to work with real data.",
  },
  {
    id: 2,
    author: "Dr. Maya Chen",
    author_role: "professor",
    semester: "Spring 2026",
    overall_rating: 5,
    comment: "Start the weekly labs early so you have time to ask questions.",
  },
];
