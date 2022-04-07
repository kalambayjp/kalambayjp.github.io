import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./index.scss";

const Contact = () => {
  const refForm = useRef();
  // console.log(process.env.REACT_APP_TOKEN);
  console.log(process.env.REACT_APP_SERVICE_ID);

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
          // alert("Message successfully sent!");
          console.log(result.text);
          // window.location.reload(false);
        },
        (error) => {
          // alert("Failed to send message, please try again");
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>Contact Me</h1>
          <p>
            I invite you to contact me through LinkedIn via the link in the side
            bar, or by email using the form below.
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
