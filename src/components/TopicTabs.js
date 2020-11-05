import React, { useState, useEffect } from "react";
import { findCourseById } from "../services/CourseService";
import "../css/courseEditor.css";
import moduleService from "../services/ModuleService";
import lessonService from "../services/LessonService";
import topicService from "../services/TopicService";
import ModuleList from "./ModuleList";
import { connect } from "react-redux";
import { Tabs, Button, Tab } from "react-bootstrap";
import TopicContents from "./TopicContents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faTrashAlt,
  faSave,
} from "@fortawesome/free-regular-svg-icons";

const TopicTabs = ({
  topics = [],
  deleteTopic,
  createTopicForLesson,
  lessonId,
  updateTopic,
  saveChanges,
}) => {
  const [key, setKey] = useState("home");
  return (
    <div>
      <h1>
        Topics ({topics.length})
        <Button
          className="btn-create-lesson"
          onClick={() => createTopicForLesson(lessonId)}
        >
          Create Topic
        </Button>
      </h1>
      <Tabs activeKey={key} onSelect={(k) => setKey(k)}>
        {topics.map((topic) => (
          <Tab key={topic._id} eventKey={topic._id} title={topic.title}>
            <div className="edit-bar">
              <FontAwesomeIcon
                className="lesson-btn trash"
                icon={faTrashAlt}
                onClick={() => deleteTopic(topic._id)}
              />
              {topic.editing ? (
                <span>
                  <FontAwesomeIcon
                    className="lesson-btn save"
                    icon={faSave}
                    onClick={() => updateTopic({ ...topic, editing: false })}
                  />
                  <input
                    className="lesson-title module-edit-input"
                    onChange={(event) =>
                      updateTopic({ ...topic, title: event.target.value })
                    }
                    value={topic.title}
                  />
                </span>
              ) : (
                <span>
                  <FontAwesomeIcon
                    className="lesson-btn edit"
                    icon={faEdit}
                    onClick={() => updateTopic({ ...topic, editing: true })}
                  />
                  {topic.title}
                </span>
              )}
            </div>
            <WidgetList />
          </Tab>
        ))}
      </Tabs>
    </div>
  );
};

const stateToPropertyMapper = (state) => {
  console.log(state);
  return {
    topics: state.topicReducer.topics,
    lessonId: state.topicReducer.lessonId,
  };
};

const dispatchToPropertyMapper = (dispath) => ({
  saveTopic: (topic) => topicService.saveTopic(topic),
  deleteTopic: (topicId) =>
    topicService.deleteTopic(topicId).then((status) =>
      dispath({
        type: "DELETE_TOPIC",
        topicId,
      })
    ),
  createTopicForLesson: (lessonId) =>
    topicService
      .createTopicForLesson(lessonId, { title: "New Topic" })
      .then((topic) =>
        dispath({
          type: "CREATE_TOPIC",
          topic,
        })
      ),
  updateTopic: (topic) =>
    dispath({
      type: "UPDATE_TOPIC",
      topic,
    }),
});

export default connect(
  stateToPropertyMapper,
  dispatchToPropertyMapper
)(TopicTabs);
