import React, { useState, useCallback } from "react";
import Typewriter from "./common/typewritter";
import SocialMedia from "./socialmedia";
import PeronalInfo from "./personalInfo";
import { emailServices } from "../utils/config";
import "../styles/contactMe.css";

const FormInput = ({ title, onChange, value, type, placeholder }) => {
  const onChangeEvent = (e) => {
    onChange(e.target.value);
  };
  return (
    <div className="inputContainer">
      <p className="contactTitle">{title}</p>
      {type === "textarea" ? (
        <textarea
          className="formTextArea"
          value={value}
          onChange={onChangeEvent}
        />
      ) : (
        <input
          className="formInput"
          placeholder={placeholder}
          value={value}
          onChange={onChangeEvent}
        />
      )}
    </div>
  );
};

const ContactForm = () => {
  const [name, setname] = useState("");
  const [contact, setcontact] = useState("");
  const [desc, setdesc] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = useCallback(async () => {
    if (
      !(
        name &&
        contact &&
        desc &&
        (contact.includes("@") || (Number(contact) && contact.length < 13))
      )
    ) {
      setError("Please fill all the fields. 😓");
      setTimeout(() => setError(""), 6000);
      return;
    }
    const { YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, YOUR_USER_ID } = emailServices;
    let data = {
      service_id: YOUR_SERVICE_ID,
      template_id: YOUR_TEMPLATE_ID,
      user_id: YOUR_USER_ID,
      template_params: {
        Person_Name: name,
        Contact_Info: contact,
        Message_Written: desc,
      },
    };
    setLoading(true);
    try {
      await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json",
        },
      });
      setLoading(false);
      setname("");
      setcontact("");
      setdesc("");
      setError("Thank you for your response! 😍");
    } catch (error) {
      setLoading(false);
      setError("🤕 Error submitting: ", error);
    }
    setTimeout(() => setError(""), 6000);
  }, [name, contact, desc]);

  return (
    <div data-aos="slide-right" className="formContainer">
      <div className="nameContainer">
        <FormInput
          title="Your Name"
          placeholder="What's your name?"
          value={name}
          onChange={setname}
        />
        <FormInput
          title="Your Contact"
          placeholder="Your contact info"
          value={contact}
          onChange={setcontact}
        />
      </div>
      <FormInput
        title="Message"
        placeholder="Enter your message"
        value={desc}
        type="textarea"
        onChange={setdesc}
      />
      <span id={error.includes("Thank you") ? "successMsg" : "errorMsg"}>
        {error}
      </span>
      <div className="wrapper">
        <button disabled={loading} onClick={handleSubmit} className="button">
          {loading ? "Loading..." : "Send Me"}
        </button>
      </div>
    </div>
  );
};

const ContactMe = () => {
  return (
    <div id="ContactMe" className="contactMeContainer">
      <Typewriter text={["Contact Me...", "Send me a message!"]} />
      {/* <p className="subHeading">Send me a message!</p> */}
      <div style={{ display: "flex", flexDirection: "row" }}>
        <SocialMedia />
        <ContactForm />
        <PeronalInfo />
      </div>
    </div>
  );
};

export default ContactMe;
