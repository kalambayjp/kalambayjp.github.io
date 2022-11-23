import { useRef } from "react";
import emailjs from "@emailjs/browser";
import linkInPhoto from "../../assets/images/linkInPhoto.png";
import "./index.scss";

const Contact = () => {
  const refForm = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        refForm.current,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          alert("Message successfully sent!");
          console.log(result.text);
          window.location.reload(false);
        },
        (error) => {
          alert("Failed to send message, please try again");
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <div className="contact-header">
            <h1>Contact</h1>
            <img src={linkInPhoto} alt="profile" />
          </div>
          <p>
            You can reach me through{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/jp-kalambay-6294171b7/"
            >
              LinkedIn
            </a>
             or by email using the form below.
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </li>
                <li>
                  <textarea name="message" placeholder="Message" required />
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
