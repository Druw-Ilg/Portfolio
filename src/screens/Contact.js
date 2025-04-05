import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import Header from "../components/Header";
import Footer from "../components/Footer";

import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newSubject, setNewSubject] = useState("");
  const [newMessage, setNewMessage] = useState("");
  const messagesCollectionRef = collection(db, "messages");

  const createMessage = async () => {
    const newDate = new Date();
    const docRef = await addDoc(messagesCollectionRef, {
      name: newName,
      email: newEmail,
      subject: newSubject,
      message: newMessage,
      date: newDate,
    });

    if (docRef.id !== "") {
      document.querySelector(".sent-message").style.display = "block";
    } else {
      document.querySelector(".error-message").innerHtml =
        "Your message could not be sent. Please reload the page and try again!";
      document.querySelector(".error-message").style.display = "block";
    }
  };

  return (
    <>
      <Header page={"contact"} />
      <main id="main">
        <section id="breadcrumbs" className="breadcrumbs">
          <div className="container">
            <div className="d-flex justify-content-between align-items-center">
              <h2>Contact</h2>
              <ol>
                <li>
                  <Link to="/">{t("Home")}</Link>
                </li>
                <li>Contact</li>
              </ol>
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="container">
            <div className="row mt-5">
              <div className="col-lg-4">
                <div className="info">
                  <div className="email">
                    <i className="bi bi-envelope"></i>
                    <h4>Email:</h4>
                    <p>andruwilagou@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-8 mt-5 mt-lg-0">
                <form className="php-email-form">
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="name"
                        placeholder={t("Your Name")}
                        required
                        onChange={(event) => {
                          setNewName(event.target.value);
                        }}
                      />
                    </div>
                    <div className="col-md-6 form-group mt-3 mt-md-0">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder={t("Your Email")}
                        required
                        onChange={(event) => {
                          setNewEmail(event.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="form-group mt-3">
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      id="subject"
                      placeholder={t("Subject")}
                      required
                      onChange={(event) => {
                        setNewSubject(event.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group mt-3">
                    <textarea
                      className="form-control"
                      name="message"
                      rows="5"
                      placeholder="Message"
                      required
                      onChange={(event) => {
                        setNewMessage(event.target.value);
                      }}
                    ></textarea>
                  </div>
                  <div className="my-3">
                    <div className="loading">{t("Loading")}</div>
                    <div className="error-message"></div>
                    <div className="sent-message">{t("MessageSent")}</div>
                  </div>
                  <div className="text-center">
                    <button
                      className="submit-message"
                      onClick={(e) => {
                        e.preventDefault();
                        createMessage();
                      }}
                    >
                      {t("Send Message")}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
