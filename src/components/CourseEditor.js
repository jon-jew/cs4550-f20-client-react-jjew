import React, { useState, useEffect } from "react";
import {findCourseById} from "../services/CourseService";
import '../css/courseEditor.css';
import moduleService from "../services/ModuleService";
import lessonService from "../services/LessonService"
import ModuleList from "./ModuleList";
import LessonTabs from "./LessonTabs";
import { connect } from "react-redux";

function CourseEditor (props) {
  const [course, setCourse] = useState({
    title: '',
    _id: '',
  });

  useEffect(() => {
    const courseId = window.location.pathname.split('/')[2];
    findCourseById(courseId)
      .then((actualCourse) => setCourse(actualCourse))
  }, []);

  return(
    <div className="container">
      <div className="row">
          <a href="../course-list/course-list.template.client.html">
              <i className="far fa-times-circle wbdv-course-editor wbdv-close"></i>
          </a>
          <h2 className="wbdv-course-title">{course.title}</h2>
      </div>
    <ModuleList />
    </div>
  );
};

const stateToProperty = (state) =>  {
    console.log(state);  
    return {
    course: state.moduleReducer.modules }
};

const propertyToDispatchMapper = (dispatch) => ({
    findLessonsForModule: (moduleId) => {
        lessonService.findLessonsForModule(moduleId)
        .then(lessons => dispatch({
            type: "FIND_LESSONS_FOR_MODULE",
            lessons,
            moduleId
        }))
    },
    findModulesForCourse: courseId =>
        moduleService.findModulesForCourse(courseId)
        .then(actualModules => dispatch({
            type: "FIND_MODULES_FOR_COURSE",
            modules: actualModules
        })),
    findCourseById: (courseId) => findCourseById(courseId)
        .then(actualCourse => dispatch({
        type: "FIND_COURSE_BY_ID",
        course: actualCourse
        }))
});
  
export default connect
    (stateToProperty, propertyToDispatchMapper)
    (CourseEditor);
