import React, { useState } from "react";
import {connect} from "react-redux";
import lessonService from "../services/LessonService"
import { Tabs, Tab, Button } from 'react-bootstrap';
import TopicTabs from './TopicTabs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faSave } from '@fortawesome/free-regular-svg-icons'; 

const LessonTabs = (
  {
    lessons=[],
    deleteLesson,
    createLessonForModule,
    moduleId,
    updateLesson,
    saveChanges
  }) => {
    const [key, setKey] = useState('home');
    console.log(lessons);
    return (
    <div>
      <h1>
        Lessons ({lessons.length})
        <Button
          className="btn-create-lesson"
          onClick={() => createLessonForModule(moduleId)}
        >
          Create Lesson
        </Button>
      </h1>
      <Tabs
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        {
          lessons.map(lesson =>
            <Tab key={lesson._id} eventKey={lesson._id} title={lesson.title}>
              <div className="edit-bar">
                <FontAwesomeIcon
                  className="lesson-btn trash"
                  icon={faTrashAlt}
                  onClick={() => deleteLesson(lesson._id)}
                />
                {
                  lesson.editing ? 
                    <span>
                      <FontAwesomeIcon
                        className="lesson-btn save"
                        icon={faSave}
                        onClick={() => updateLesson({...lesson, editing: false})}
                      />
                      <input
                        className="lesson-title module-edit-input"
                        onChange={(event) =>
                          updateLesson({...lesson, title: event.target.value})
                        }
                        value={lesson.title}/>
                    </span> :
                    <span>
                      <FontAwesomeIcon
                        className="lesson-btn edit"
                        icon={faEdit}
                        onClick={() => updateLesson({...lesson, editing: true})}
                      />
                      {lesson.title}
                    </span>
                }
              </div>
              <TopicTabs />
            </Tab>
          )
        }
      </Tabs>
    </div>
    );
  }

const stateToPropertyMapper = (state) => {
  return {
    lessons: state.lessonReducer.lessons,
    moduleId: state.lessonReducer.moduleId
  }
};

const dispatchToPropertyMapper = (dispath) => ({
  saveLesson: (lesson) =>
    lessonService.saveLesson(lesson),
  deleteLesson: (lessonId) =>
    lessonService.deleteLesson(lessonId)
      .then(status => dispath({
        type: "DELETE_LESSON",
        lessonId
      })),
  createLessonForModule: (moduleId) =>
    lessonService
      .createLessonForModule(moduleId, {title: "New Lesson"})
      .then(lesson => dispath({
        type: "CREATE_LESSON",
        lesson
      })),
  updateLesson: (lesson) => dispath({
    type: "UPDATE_LESSON",
    lesson
  })
});

export default connect
(stateToPropertyMapper, dispatchToPropertyMapper)
(LessonTabs)
