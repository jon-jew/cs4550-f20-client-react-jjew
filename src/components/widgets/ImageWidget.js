import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faSave } from "@fortawesome/free-regular-svg-icons";

const ImageWidget = ({
  widget,
  updateParagraphPreview,
  deleteWidget,
  saveWidget,
  topicId,
}) => {
  return (
    <div className="widget">
      <div className="widget-header">
        <h3 className="widget-heading">
          <i className="far fa-image"></i> Image Widget
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
      <div className="image">
        <img
          src={widget.text}
          className="img-fluid"
          alt="Responsive image"
        />
      </div>
      <input
        className="form-control"
        title="Image Source"
        placeholder="Image URL"
        value={widget.text}
        onChange={(e) => updateParagraphPreview(widget, e.target.value)}
      />
    </div>
  );
};

export default ImageWidget;
