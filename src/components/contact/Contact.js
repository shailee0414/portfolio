import React from "react";
import "./Contact.css";
import "../../app.css";

const Contact = () => {
  return (
    <div className="contact-container background-dark d-flex flex-column align-items-center">
      <div className="bold-title">CONTACT ME</div>
      <form
        className="d-flex flex-column align-items-center "
        action="mailto:shaileeyadav130@gmail.com"
        method="post"
        encType="text/plain"
      >
        <div className="d-flex gap-5 flex-row align-items-end input-cont">
          <div className="flex-g">
            <label>Name</label>
            <input
              name="name"
              type="text"
              placeholder="Name *"
              className="input"
              required
            />
          </div>
          <div className="flex-g">
            <label>Email</label>
            <input
              name="email"
              type="email"
              placeholder="Email *"
              className="input"
              required
            />
          </div>
        </div>
        <div className="textarea flex-grow-1 ">
          <label>Message</label>
          <textarea
            name="comment"
            type="text"
            className="input"
            placeholder="Message *"
            size="500"
          ></textarea>
        </div>
        <input
          className="send-message thin-title"
          type="submit"
          value="Send Message"
        />
      </form>
    </div>
  );
};

export default Contact;
