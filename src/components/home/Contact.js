import React, { useState } from "react";

export const Contact = () => {
  const [emailValue, setEmailValue] = useState("");
  const [messageValue, setMessageValue] = useState("");
  const fireContact = () => {
    console.log(emailValue);
  };

  return (
    <div className="contact" id="contact">
      <h2 className="contact__title">Thinking of joining ?</h2>
      <div className="contact__form form">
        <div className="form__group contact__email">
          <label htmlFor="contact-email" className="form__label">
            Email ?
          </label>
          <input
            type="text"
            className="form__input"
            name="contact-email"
            placeholder="Enter your email"
            value={emailValue}
            onChange={(e) => setEmailValue(e.target.value)}
          />
        </div>
        <div className="form__group contact__message">
          <label htmlFor="contact-message" className="form__label">
            Tell us more about you
          </label>
          <textarea
            className="form__text-area"
            id="contact-message"
            placeholder="Tell us more about your instered for joining the 'troupe'. Do you have prior experience? What is your level of french? "
            value={messageValue}
            onChange={(e) => setMessageValue(e.target.value)}
          ></textarea>
        </div>
        <button
          className="btn form__submit contact__submit"
          onClick={fireContact}
        >
          Submit
        </button>
      </div>
    </div>
  );
};
