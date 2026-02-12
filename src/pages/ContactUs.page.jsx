import React from "react";
import contactImg from "../assets/images/contact.png";

const ContactUsPage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 bg-info p-3 rounded">
          <h3>Contact Us</h3>
        </div>
      </div>
      <div className="row align-items-center mt-3">
        <div className="col-md-6 mt-3">
          <h3 className="text-primary">How to contact us</h3>
          <h5>Tel: 210000000</h5>
          <h5>Email: test@test.com</h5>
          <div className="mb-3 mt-3">
            <label for="exampleFormControlInput1" className="form-label">
              Email address:
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">
              Your Message:
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              placeholder="Type Your Message Here"
              rows="3"
            ></textarea>
          </div>
          <button className="btn btn-outline-primary ms-4">Submit</button>
        </div>

        <div className="col-md-6 text-center">
          <img
            src={contactImg}
            alt="About Image"
            className="img-fluid about-img"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
