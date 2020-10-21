import React, { useState } from "react";
import {connect} from "react-redux";
import lessonService from "../services/LessonService"
import { Tabs, Tab, Button } from 'react-bootstrap';
import TopicTabs from './TopicTabs';

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
              <button onClick={() => deleteLesson(lesson._id)}>
                Delete
              </button>
              <button onClick={() => updateLesson({...lesson, editing: true})}>
                Edit
              </button>
              <button onClick={() => updateLesson({...lesson, editing: false})}>
                Ok
              </button>
              {
                !lesson.editing &&
                <span>{lesson.title}</span>
              }
              {
                lesson.editing &&
                <input
                  onChange={(e) => updateLesson({...lesson, title: e.target.value})}
                  value={lesson.title}/>
              }
              <button onClick={() => saveChanges(lesson)}>
                Save
              </button>
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
