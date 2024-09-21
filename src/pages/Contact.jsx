import React from "react";
import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom";
import Picture from "../components/service-list";
import { useState } from "react";
import axios from "axios";
import tick from "../../public/logo/tick.svg";
const Contact = () => {
  const l = useLocation();
  const { drone, service } = l.state || {};
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [result, setResult] = useState(0);
  const [description, setDescription] = useState("");
  const [disable, setDisable] = useState(false);
  const ACCESS_KEY = import.meta.env.VITE_REACT_APP_API_KEY;
  const handleSubmit = async (e) => {
    setDisable(true);
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.append("name", name);
    formData.append("location", location);
    formData.append("email", email);
    formData.append("number", number);
    formData.append("drone", drone);
    formData.append("service", service);
    formData.append("description", description);
    formData.append("access_key", ACCESS_KEY);
    try {
      const response = await axios.post(
        "https://api.web3forms.com/submit",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setResult(response.status);
      setDisable(false);
      setEmail("");
      setLocation("");
      setName("");
      setNumber("");
    } catch (err) {
      setResult(err.message);
      setDisable(false);
    }
  };

  return (
    <>
      <Navbar animate={0} />
      <main className="contact__main">
        <h1 className="contact__contact-title">Contact Us</h1>
        <form className="contact__from" onSubmit={handleSubmit}>
          {result !== 200 ? (
            <>
              <div className="contact__from-names">
                <input
                  className="contact__from-inputs fillable"
                  type="text"
                  placeholder="Name"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <input
                  className="contact__from-inputs fillable"
                  type="text"
                  placeholder="Location"
                  onChange={(e) => setLocation(e.target.value)}
                  required
                />
              </div>
              <div className="contact__from-names ">
                <input
                  className="contact__from-inputs fillable email"
                  type="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  className="contact__from-inputs fillable"
                  type="number"
                  placeholder="phone number"
                  onChange={(e) => setNumber(e.target.value)}
                  required
                />
              </div>
              <div className="contact__from-names">
                <input
                  className="contact__from-inputs not-fillable input-1"
                  type="text"
                  value={drone}
                  id="input-1"
                  readOnly
                />
                <label className="input__fillable input_1" htmlFor="input-1">
                  This is filled by you{" "}
                </label>
                <input
                  className="contact__from-inputs not-fillable input-2"
                  type="text"
                  value={service}
                  id="input-2"
                  readOnly
                />
                <label className="input__fillable input_2" htmlFor="input-2">
                  This is filled by you
                </label>
              </div>
              <textarea
                placeholder="Description"
                className="contact__textarea"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
              <button
                type="submit"
                className={`submit-btn ${disable ? "disable" : ""}`}
                disabled={disable}
              >
                submit
              </button>
            </>
          ) : (
            <>
              <img src={tick} alt="tick image" />
              <h1>Email sent successfully!</h1>
              <p className="contact__article-p">
                we will call you with in 24 hours
              </p>
            </>
          )}
        </form>
      </main>
      <Picture />
      <article className="contact__article">
        <h1 className="contact__article-h1">
          Welcome to UFO Drone Care – Where Drone Magic Happens!
        </h1>
        <p className="contact__article-p">
          We're India’s first and only platform dedicated to making your drones
          soar like never before. At UFO Drone Care, we're not just
          technicians—we're drone wizards, casting spells to keep your DJI,
          Autel, Parrot, and other flying companions in tip-top shape. Whether
          it's a quick fix or a full makeover, our magical touch ensures your
          drone is always ready for its next adventure. So, let’s get your drone
          enchanted with the care it deserves!
        </p>
      </article>
    </>
  );
};

export default Contact;
