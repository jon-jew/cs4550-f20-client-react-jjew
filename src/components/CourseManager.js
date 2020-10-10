import React from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import CourseListComponent from "./CourseListComponent";
import {CourseEditor} from "./CourseEditor";

export class CourseManager extends React.Component {
  render() {
    return(
      <Router>
        <div>

          <Link to="/courses">Course List</Link>

          <Route path="/courses" exact component={CourseListComponent}/>
          <Route path="/edit/:courseId" exact component={CourseEditor}/>
        </div>
      </Router>
    )
  }
}
