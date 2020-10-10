import React, { useState } from "react";
import { updateCourse } from "../services/CourseService";
import { Button, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-regular-svg-icons'; 
import { Link } from "react-router-dom";

function CourseRowComponent ({ key, initCourse, handleDeleteCourse }) {
  const [editing, setEditing] = useState(false);
  const [course, setCourse] = useState(initCourse);

  const updateTitle = (event) => {
    const newTitle = event.target.value;
    const newCourse = course;
    newCourse.title = newTitle;
    setCourse(newCourse);
  }

  const handleUpdate = () => {
    setEditing(false);
    updateCourse(course._id, course);
  }

  return (
    <tr>
      <td>
        {
          editing === true ?
          <FormControl onChange={updateTitle} /> :
          <Link to={`/edit/${course._id}`}>
            {course.title}
          </Link>
        }
      </td>
      <td>{course.owner}</td>
      <td>{course.lastUpdated}</td>
      <td>
        <Button className="course-list-btn btn-danger" onClick={() => handleDeleteCourse(course)}>
          Delete
        </Button>
        {
          editing ?
          <Button className="course-list-btn" onClick={() => handleUpdate()}>
            Update
          </Button> :
          <Button className="course-list-btn" onClick={() => setEditing(true)}>
            <FontAwesomeIcon icon={faEdit} />
          </Button>
        }
      </td>
    </tr>
  );
};

export default CourseRowComponent;
