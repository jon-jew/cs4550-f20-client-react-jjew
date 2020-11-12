import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faTrashAlt,
  faSave,
} from "@fortawesome/free-regular-svg-icons";

const HeadingWidget = ({
  widget,
  updateParagraphPreview,
  updateHeadingPreview,
  deleteWidget,
  saveWidget,
  topicId,
}) => {
  return(
    <div className="widget">
      <div className="widget-header">
        <h3 className="widget-heading">
          <i className="fas fa-heading"></i> Heading Widget
        </h3>
        <div className="float-right">
          <a
            className="widget-header-right btn btn-success"
            onClick={() => deleteWidget(topicId, widget)}
          >
            <FontAwesomeIcon icon={faSave} />
          </a>
          <a
            className="btn btn-danger"
            onClick={() => saveWidget(topicId, widget)}
          >
            <FontAwesomeIcon icon={faTrashAlt} />
          </a>
        </div>
      </div>

      <input
        value={widget.headingText}
        onChange={(e) => updateHeadingPreview(widget, e.target.value)}
      ></input>
      {widget.text !== null && (
        <select
          value={widget.text}
          onChange={(e) => updateParagraphPreview(widget, e.target.value)}
        >
          <option>Heading 1</option>
          <option>Heading 2</option>
          <option>Heading 3</option>
          <option>Heading 4</option>
        </select>
      )}
      {widget.text == null && (
        <select
          value="Heading 1"
          onChange={(e) => updateParagraphPreview(widget, e.target.value)}
        >
          <option>Heading 1</option>
          <option>Heading 2</option>
          <option>Heading 3</option>
          <option>Heading 4</option>
        </select>
      )}
      <h5>Preview</h5>
      {widget.text === "Heading 1" && <h1>{widget.headingText}</h1>}
      {widget.text === "Heading 2" && <h2>{widget.headingText}</h2>}
      {widget.text === "Heading 3" && <h3>{widget.headingText}</h3>}
      {widget.text === "Heading 4" && <h4>{widget.headingText}</h4>}
      {widget.text === null && <h3>{widget.headingText}</h3>}
    </div>
  );
};

export default HeadingWidget;
