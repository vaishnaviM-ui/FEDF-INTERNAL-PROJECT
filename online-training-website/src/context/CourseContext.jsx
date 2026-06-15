import { createContext, useContext, useState } from "react";

const CourseContext = createContext();

export function CourseProvider({ children }) {

  const [selectedCourseId, setSelectedCourseId] =
    useState(
      localStorage.getItem("selectedCourseId") || null
    );

  const enrollCourse = (id) => {

    localStorage.setItem(
      "selectedCourseId",
      id
    );

    setSelectedCourseId(id);
  };

  return (
    <CourseContext.Provider
      value={{
        selectedCourseId,
        enrollCourse
      }}
    >
      {children}
    </CourseContext.Provider>
  );
}

export const useCourse = () =>
  useContext(CourseContext);