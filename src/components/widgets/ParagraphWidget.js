import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faSave } from "@fortawesome/free-regular-svg-icons";

const ParagraphWidget = ({
  widget,
  updateParagraphPreview,
  deleteWidget,
  saveWidget,
}) => {
  <div className="widget">
    <div className="widget-header">
      <h3 className="widget-heading">
        <i className="fas fa-align-left"></i> Paragraph Widget
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
    <textarea
      className="form-control"
      onChange={(e) => updateParagraphPreview(widget, e.target.value)}
    >
      {widget.text}
    </textarea>
    <h4>Preview</h4>
    <p>{widget.text}</p>
  </div>;
};

export default ParagraphWidget;
