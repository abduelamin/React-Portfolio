import React from "react";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <div className="contactContainer">
      <div className="container mt-5">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-8 col-lg-6 text-center moveTarget">
            <div className="card">
              <div className="card-body">
                <h1 className="card-title text-center mb-4">Contact Me</h1>
                <form
                  action="https://api.web3forms.com/submit"
                  method="POST"
                  id="form"
                >
                  <input
                    type="hidden"
                    name="access_key"
                    value="Y368843df-858b-4fb1-8781-4ad6ff13f3d8"
                  />
                  <input
                    type="hidden"
                    name="subject"
                    value="New Submission from Web3Forms"
                  />
                  <input
                    type="checkbox"
                    name="botcheck"
                    id=""
                    style={{ display: "none" }}
                  />

                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="John Doe"
                      required
                      className="form-control"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="you@company.com"
                      required
                      className="form-control"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">
                      Your Message
                    </label>
                    <textarea
                      rows="5"
                      name="message"
                      id="message"
                      placeholder="Your Message"
                      className="form-control"
                      required
                    ></textarea>
                  </div>
                  <div className="mb-3">
                    <button type="submit" className="btn btn-primary w-100">
                      Send Message
                    </button>
                  </div>
                  <p className="text-muted text-center" id="result"></p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
