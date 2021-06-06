import { Checkbox, IconButton } from "@material-ui/core";
import LabelImportantOutlinedIcon from "@material-ui/icons/LabelImportantOutlined";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import "./EmailRow.css";
import { selectMail } from "./features/mailSlice";

function EmailRow({ id, title, subject, message, time }) {
  const history = useHistory();
  const dispatch = useDispatch();

  const openMail = () => {
    dispatch(
      selectMail({
        id,
        title,
        subject,
        message,
        time,
      })
    );
    history.push("/mail");
  };

  return (
    <div className="emailRow" onClick={openMail}>
      <div className="emailRow-options">
        <Checkbox />
        <IconButton>
          <StarBorderOutlinedIcon />
        </IconButton>
        <IconButton>
          <LabelImportantOutlinedIcon />
        </IconButton>
      </div>
      <h3 className="emailRow-title">{title}</h3>
      <div className="emailRow-message">
        <h4>
          {subject} <span className="emailRow-description">- {message}</span>
        </h4>
      </div>
      <div className="emailRow-time">{time}</div>
    </div>
  );
}

export default EmailRow;
