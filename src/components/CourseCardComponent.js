import React, { useState } from "react";
import { Button, FormControl, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-regular-svg-icons'; 
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons'
import { updateCourse } from "../services/CourseService";
import { Link } from "react-router-dom";

function CourseCardComponent ({ initCourse, handleDeleteCourse }) {
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

    return(
        <Col
            className="course-card-col"
            key={course._id}
            xs={12}
            sm={6}
            md={4}
            lg={3}
        >
            <div className="course-card">
                <div>
                    <Button onClick={() => handleDeleteCourse(course)} className="float-right btn-delete btn-danger"><FontAwesomeIcon icon={faTrashAlt} /></Button>
                    {
                        editing ?
                        <Button className="float-right btn-edit" onClick={() => handleUpdate()}>
                            Update
                        </Button> :
                        <Button className="float-right btn-edit" onClick={() => setEditing(true)}>
                            <FontAwesomeIcon icon={faEdit} />
                        </Button>
                    }
                </div>
                <div className="course-card-image"></div>
                <div className="course-card-footer">
                    {
                        editing === true ? (
                        <FormControl
                            onChange={(target) => updateTitle(target)}
                        /> ) : (
                        <Link to={`/edit/${course._id}`}>
                            {course.title}
                        </Link>
                        )
                    }
                    <div className="course-card-updated">
                        Last Updated <strong>{course.lastUpdated}</strong> by <strong>{course.owner}</strong>
                    </div>
                </div>
            </div>
        </Col>
    )
};

export default CourseCardComponent;
