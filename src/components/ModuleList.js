import React from "react";
import { connect } from "react-redux";
import '../css/courseEditor.css';
import LessonTabs from "./LessonTabs";
import { Button, FormControl, Tabs, Tab, Row, Col, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faSave } from '@fortawesome/free-regular-svg-icons'; 

import {
  DELETE_MODULE,
  CREATE_MODULE,
  UPDATE_MODULE,
  updateModule,
  createModule,
  deleteModule
} from "../actions/moduleActions";

const ModuleList = (
  { course,
    modules=[],
    deleteModule,
    createModule,
    updateModule}) =>
  <div>
    <Button className="create-module-btn" onClick={() => createModule(course, {title: "New Module"})}>
      Create Module
    </Button>
   
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <ul className="list-group">
              { modules.map((module) => 
                <Nav.Item>
                  <li className="list-group-item" key={module._id}>
                    <FontAwesomeIcon
                      className="module-btn trash"
                      icon={faTrashAlt}
                      onClick={() => deleteModule(module)}
                    />
                    {
                      module.editing ? 
                        <span>
                          <FontAwesomeIcon
                            className="module-btn save"
                            icon={faSave}
                            onClick={() => updateModule({...module, editing: false})}
                          />
                          <input
                            className="module-title module-edit-input"
                            onChange={(event) =>
                              updateModule({...module, title: event.target.value})
                            }
                            value={module.title}/>
                        </span> :
                        <span>
                          <FontAwesomeIcon
                            className="module-btn edit"
                            icon={faEdit}
                            onClick={() => updateModule({...module, editing: true})}
                          />
                          <Nav.Link
                            eventKey={module._id}
                            className="module-title"
                            to={`/edit/${course._id}/modules/${module._id}`}>
                          {module.title}
                          </Nav.Link>
                        </span>
                    }
                  </li>
                </Nav.Item>
              )}
            </ul>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            { modules.map((module) => 
              <Tab.Pane eventKey={module._id}>
                <LessonTabs />
              </Tab.Pane>
            )}
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  </div>

const stateToPropertyMapper = (state) => ({
  modules: state.moduleReducer.modules,
  course: state.courseReducer.course
})

const propertyToDispatchMapper = (dispatch) => ({
  deleteModule: (module) => deleteModule(dispatch, module),
  createModule: (course, module) => createModule(dispatch, course, module),
  updateModule: (module) => updateModule(dispatch, module)
})

export default connect
(stateToPropertyMapper,
  propertyToDispatchMapper)
(ModuleList)
