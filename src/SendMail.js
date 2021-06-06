import { Button } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "./features/mailSlice";
import { db } from "./firebase";
import firebase from "firebase";
import "./SendMail.css";

function SendMail() {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (formData) => {
    console.log(formData);
    db.collection("emails").add({
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    dispatch(closeSendMessage());
  };

  return (
    <div className="sendMail">
      <div className="sendMail-header">
        <h3>New message</h3>
        <CloseIcon
          className="sendMail-close"
          onClick={() => dispatch(closeSendMessage())}
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          placeholder="To"
          name="to"
          {...register("to", { required: true })}
        />

        {errors.to && <p className="sendMail-error">To is required!</p>}

        <input
          name="subject"
          type="text"
          placeholder="Subject"
          {...register("subject", { required: true })}
        />

        {errors.subject && (
          <p className="sendMail-error">Subject is required!</p>
        )}

        <textarea
          name="message"
          className="sendMail-message"
          cols="30"
          rows="10"
          {...register("message", { required: true })}
        />

        {errors.message && (
          <p className="sendMail-error">Message is required!</p>
        )}

        <div className="sendMail-options">
          <Button className="sendMail-send" type="submit">
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
