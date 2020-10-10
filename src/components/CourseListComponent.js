import React, { useState, useEffect } from "react";
import CourseRowComponent from "./CourseRowComponent";
import CourseGridComponent from './CourseGridComponent';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl, faTh } from '@fortawesome/free-solid-svg-icons'; 
import courseService from "../services/CourseService";

function CourseListComponent () {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isGrid, setIsGrid] = useState(false);
  
  const getCourses = () => {
    courseService.findAllCourses()
      .then((courses) => {
        setCourses(courses.slice(courses.length-10, courses.length-1));
        setLoading(false);
      });
  };

  const handleCreateCourse = () => {
    setLoading(true);
    const newCourse = {
      title: 'New Course',
      owner: 'me',
      lastUpdated: 'yesterday'
    };
  
    courseService.createCourse(newCourse)
      .then(() => courseService.findAllCourses()
      .then(() => getCourses())
      ).catch(error => {});
  };
  
  const handleDeleteCourse = (course) => {
    setLoading(true);
    courseService.deleteCourse(course._id)
      .then((res) => courseService.findAllCourses()
      .then(() => {
        getCourses();
      }));
  };

  const handleToggleDisplay = () => {
    setIsGrid(!isGrid);
  };

  useEffect(() => {
    getCourses();
  }, []);

  return (
    <div className="container">
      <Button
        onClick={handleToggleDisplay}
        className={ isGrid ? "btn float-right course-list-btn" : "btn btn-secondary float-right course-list-btn"}>
        { isGrid ? <FontAwesomeIcon icon={faTh} /> : <FontAwesomeIcon icon={faListUl} />}
      </Button>
      <Button
        onClick={handleCreateCourse}
        className="btn btn-success float-right course-list-btn">
        Create Course
      </Button>
      <h1>Course List</h1>
      { loading ? <div>Loading...</div> : 
        isGrid ? (
          <CourseGridComponent
            courses={courses}
            loading={loading}
            handleDeleteCourse={handleDeleteCourse}
          />
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Owner</th>
                <th>Last Updated</th>
              </tr>
            </thead>
            <tbody>
            {
              courses.map(course =>
                <CourseRowComponent
                  key={course._id}
                  handleDeleteCourse={handleDeleteCourse}
                  initCourse={course}/>
              )
            }
            </tbody>
          </table>
        ) 
      }
    </div>
  );
};

export default CourseListComponent;
