import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import LoginHeader from "../../Common/LoginHeader";
import PagesBody from "./FooterPagesBody";
import LoginFooter from "../../Common/LoginFooter";

const Partnership = () => {


//use state for option buttons
const [selected, setSelected] = useState("");
  const changeHandler = e => {
    setSelected(e.target.value);
  };




  return (
    <>
      <LoginHeader></LoginHeader>
      <PagesBody>
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12  footerpages-container-child common-pages-body">
          <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12">
            <h1 className="common-pages-text">
              PARTNERING WITH <strong>CEO</strong>CARD
            </h1>
            <br></br>
            <h2 className="common-pages-subtext">
              We look to partner with leading and innovative companies that will
              contribute to the<br></br>
              CeoCard community. We also work with companies looking to purchase
              multiple<br></br>
              Memberships on behalf of their employees and clients.
            </h2>
            <h2 className="common-pages-subtext">
              If you are interested in partnering with us, please complete the
              form below:
            </h2>
          </div>
          <hr class="border-blue"></hr>
          <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12 common-pages-form">
            <form action="/#">
              <div className="row">
                <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12 form-group">
                  <label style={{ marginBottom: "0" }}>
                    Are you a CeoCard Member? &nbsp;&nbsp;
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault"
                      ></input>
                      <label className="form-check-label" for="flexRadioDefault">
                        Yes
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault"
                      ></input>
                      <label className="form-check-label" for="flexRadioDefault">
                        No
                      </label>
                    </div>
                  </label>
                </div>
              </div>
              <div className="row">
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-12 form-group">
                  <input
                    autofocus="autofocus"
                    type="text"
                    className="form-control"
                    placeholder="Full Name"
                    name="name"
                    required
                  />
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-12 form-group">
                  <input
                    autofocus="autofocus"
                    type="text"
                    className="form-control"
                    placeholder="Email"
                    name="email"
                    required
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-12 form-group">
                  <input
                    autofocus="autofocus"
                    type="text"
                    className="form-control"
                    placeholder="Phone"
                    name="naphoneme"
                    required
                  />
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-12 form-group">
                  <input
                    autofocus="autofocus"
                    type="text"
                    className="form-control"
                    placeholder="Company"
                    name="company"
                    required
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12 form-group">
                  <label>
                    What would you like to discuss with our Partnerships Team? :
                  </label>

                  <div className="form-check">
                    <input 
                      className="form-check-input"
                      type="radio"
                      name="partnerships"
					  value="option1"
					  checked={selected === "option1"}
        				onChange={changeHandler}
                    ></input>
                    <label className="form-check-label" for="flexRadioDefault1">
                      Purchasing CeoCard Memberships for my Employees, Members,
                      or Customers. (Minimum quantity of 10 or more)
                    </label>
                  </div>
                  <div className="form-check">
                    <input 
                      className="form-check-input"
                      type="radio"
                      name="partnerships"
					  value="option2"
					  checked={selected === "option2"}
        				onChange={changeHandler}
                    ></input>
                    <label className="form-check-label" for="flexRadioDefault1">
                      Offering a benefit to CeoCard Members for my Company.
                    </label>
                  </div>
                  <div className="form-check">
                    <input 
                      className="form-check-input"
                      type="radio"
                      name="partnerships"
					  value="option3"
					  checked={selected === "option3"}
        				onChange={changeHandler}
                    ></input>
                    <label className="form-check-label" for="flexRadioDefault1">
                      Writing an article about CeoCard Membership on my
                      publication.
                    </label>
                  </div>
                  <div className="form-check">
                    <input 
                      className="form-check-input"
                      type="radio"
                      name="partnerships"
					  value="option4"
					  checked={selected === "option4"}
        				onChange={changeHandler}
                    ></input>
                    <label className="form-check-label" for="flexRadioDefault1">
                      Other (please explain with as much detail as possible).
                    </label>
                  </div>
                </div>
              </div>
			<div className="partenership-box">
				{/* block open on click on option 1 */}
			  <div aria-hidden={selected !== "option1" ? true : false}>
				<div className="row">
					<div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12 form-group">
					<textarea
						className="form-control"
						rows="5"
						placeholder="Please explain who you are purchasing CeoCard Memberships for."
					></textarea>
					</div>
				</div>
				<div className="row">
					<div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12 form-group">
					<textarea
						className="form-control"
						rows="5"
						placeholder="How many Memberships are you looking to purchase?"
					></textarea>
					</div>
				</div>
			  </div>


				{/* block open on click on option 2 */}
			  <div aria-hidden={selected !== "option2" ? true : false}>
				<div className="row">
					<div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12 form-group">
					<textarea
						className="form-control"
						rows="5"
						placeholder="Please tell us a little about your company.."
					></textarea>
					</div>
				</div>
				<div className="row">
					<div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12 form-group">
					<textarea
						className="form-control"
						rows="5"
						placeholder="What type of offer are you prepared to extend to FoundersCard Members?"
					></textarea>
					</div>
				</div>
			  </div>

				{/* block open on click on option 3 */}
			  <div  aria-hidden={selected !== "option3" ? true : false}>
				<div className="row">
					<div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12 form-group">
					<textarea
						className="form-control"
						rows="5"
						placeholder="Please tell us a bit about your publication/audience."
					></textarea>
					</div>
				</div>
				<div className="row">
					<div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12 form-group">
					<textarea
						className="form-control"
						rows="5"
						placeholder="What type of article are you planning to prepare?"
					></textarea>
					</div>
				</div>
			  </div>


				{/* block open on click on option 4 */}
			  <div  aria-hidden={selected !== "option4" ? true : false}>
				<div className="row">
					<div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12 form-group">
					<textarea
						className="form-control"
						rows="5"
						placeholder="Please tell us how you would like to partner with CeoCard."
					></textarea>
					</div>
				</div>
			  </div>

			</div>
              <div className="form-group">
                <button className="btn btn-primary btn-submit">
                  <Link to="/" target="_blank">
                    submit
                  </Link>
                </button>
              </div>
              <div className="row">
                <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12 form-group">
                  <p className="form-group trouble-text text-center">
                    <strong>Have a question? </strong>
                    <i
                      className="bi bi-envelope-fill"
                      style={{ color: "#0d6efd" }}
                    ></i>{" "}
                    partnerships@Ceocard.com
                    <br></br>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </PagesBody>
      <LoginFooter></LoginFooter>
    </>
  );
};

export default Partnership;
