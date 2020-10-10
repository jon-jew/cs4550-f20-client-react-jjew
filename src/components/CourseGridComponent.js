import React, { useState } from "react";
import CourseRowComponent from "./CourseRowComponent";
import { Button, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl, faTh } from '@fortawesome/free-solid-svg-icons'; 
import courseService from "../services/CourseService";
import CourseCardComponent from './CourseCardComponent';
import { Link } from "react-router-dom";
import '../css/CourseGridComponent.css';

function CourseGridComponent ({ courses, handleDeleteCourse }) {

  return(
    <div className="container">
      <Row>
        {
          courses.map(course =>
            <CourseCardComponent initCourse={course} handleDeleteCourse={handleDeleteCourse} />
          )
        }
      </Row>
    </div>
  )
};

export default CourseGridComponent;
