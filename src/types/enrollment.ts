
export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  difficulty: string;
  duration: string;
  thumbnail: string;
  category: string;
  enrollment_count: number;
}

export interface Enrollment {
  id: string;
  course_id: string;
  user_id: string;
  enrolled_at: string;
  progress: number;
  total_videos: number;
  videos_watched: number;
  courses?: Course;
}

export interface EnrollmentWithCourse extends Enrollment {
  courses: Course;
}
