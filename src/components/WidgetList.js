import React from "react";
import { connect } from "react-redux";
import widgetService from "../services/WidgetService";
import HeadingWidget from "./widgets/HeadingWidget";
import ParagraphWidget from "./widgets/ParagraphWidget";
import ImageWidget from "./widgets/ImageWidget";
import ListWidget from "./widgets/ListWidget";
import { Button } from "react-bootstrap";

const WidgetList = ({
  widgets = [],
  topicId,
  createWidget,
  updateParagraphPreview,
  deleteWidget,
  saveWidget,
  updateHeadingPreview,
}) => {
  return (
    <div>
      <h3>Widgets</h3>
      <ul>
        {topicId !== null &&
          widgets.map((widget) => (
            <div key={widget.id}>
              {widget.type === "HEADING" && (
                <HeadingWidget
                  updateHeadingPreview={updateHeadingPreview}
                  updateParagraphPreview={updateParagraphPreview}
                  widget={widget}
                  deleteWidget={deleteWidget}
                  saveWidget={saveWidget}
                  topicId={topicId}
                />
              )}
              {widget.type === "PARAGRAPH" && (
                <ParagraphWidget
                  updateParagraphPreview={updateParagraphPreview}
                  widget={widget}
                  deleteWidget={deleteWidget}
                  saveWidget={saveWidget}
                  topicId={topicId}
                />
              )}
              {widget.type === "IMAGE" && (
                <ImageWidget
                  updateParagraphPreview={updateParagraphPreview}
                  widget={widget}
                  deleteWidget={deleteWidget}
                  saveWidget={saveWidget}
                  topicId={topicId}
                />
              )}
              {widget.type === "LIST" && (
                <ListWidget
                  updateParagraphPreview={updateParagraphPreview}
                  widget={widget}
                  deleteWidget={deleteWidget}
                  saveWidget={saveWidget}
                  topicId={topicId}
                />
              )}
            </div>
          ))}
      </ul>

      <Button
        className="btn btn-primary"
        onClick={() => createWidget(topicId, "PARAGRAPH")}
      >
        Add Paragraph
      </Button>
      <Button
        className="btn btn-primary"
        onClick={() => createWidget(topicId, "HEADING")}
      >
        Add Header
      </Button>
    </div>
  );
};

const stateToPropMapper = (state) => ({
  widgets: state.widgetReducer.widgets,
  topicId: state.widgetReducer.topicId,
});

const dispatchMapper = (dispatch) => ({
  createWidget: (topicId, type) =>
    widgetService
      .createWidget(topicId, {
        name: "New Widget",
        type: type,
      })
      .then((widget) =>
        dispatch({
          type: "CREATE_WIDGET_FOR_TOPIC",
          widget,
        })
      ),
  deleteWidget: (topicId, widget) =>
    widgetService.deleteWidget(topicId, widget).then((widget) =>
      dispatch({
        type: "DELETE_WIDGET_FOR_TOPIC",
        widget,
      })
    ),
  saveWidget: (topicId, widget) =>
    widgetService.saveWidget(topicId, widget).then((widget) =>
      dispatch({
        type: "SAVE_WIDGET_FOR_TOPIC",
        widget,
      })
    ),
  updateParagraphPreview: (widget, e) => {
    dispatch({
      type: "UPDATE_PARAGRAPH_PREVIEW",
      widget,
      e,
    });
  },
  updateHeadingPreview: (widget, e) => {
    dispatch({
      type: "UPDATE_HEADING_PREVIEW",
      widget,
      e,
    });
  },
});

export default connect(stateToPropMapper, dispatchMapper)(WidgetList);
