import React from "react";
import { Link } from "react-router-dom";

const PopUpLogin = () => {
  return (
    <div>
      {/* Popup Login*/}
      <div id="myModal" className="modal fade">
        <div className="modal-dialog" role="document">
          <div className="modal-content ">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Login
              </h5>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="single-page customerpage ">
                <div className="wrapper wrapper2 box-shadow-0">
                  <form id="login" className="card-body" tabIndex={500}>
                    <div className="mail">
                      <input type="email" name="mail" />
                      <label>Mail or Username</label>
                    </div>
                    <div className="passwd">
                      <input type="password" name="password" />
                      <label>Password</label>
                    </div>
                    <div className="submit">
                      <a
                        className="btn btn-primary btn-block"
                        href="index.html"
                      >
                        Login
                      </a>
                    </div>
                    <p className="mb-2">
                      <a href="forgot.html">Forgot Password</a>
                    </p>
                    <p className="text-dark mb-0">
                      Don't have account?
                      <a href="register.html" className="text-primary ms-1">
                        Sign UP
                      </a>
                    </p>
                  </form>
                  <hr className="divider" />
                  <div className="card-body">
                    <div className="text-center">
                      <div className="btn-group">
                        <a
                          href="https://www.facebook.com/"
                          className="btn btn-icon me-2 brround"
                        >
                          <span className="fa fa-facebook" />
                        </a>
                      </div>
                      <div className="btn-group">
                        <a
                          href="https://www.google.com/gmail/"
                          className="btn  me-2 btn-icon brround"
                        >
                          <span className="fa fa-google" />
                        </a>
                      </div>
                      <div className="btn-group">
                        <a
                          href="https://twitter.com/"
                          className="btn  btn-icon brround"
                        >
                          <span className="fa fa-twitter" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Popup Login*/}
      {/* Popup Login*/}
      {/* <div id="registerModal" className="modal fade">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel1">
                  Register
                </h5>
                <button
                  type="button"
                  className="close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="text-center">
                  <div className="btn-group btn-block mt-2 mb-2">
                    <a
                      href="https://www.facebook.com/"
                      className="btn btn-facebook active"
                    >
                      <span className="fa fa-facebook" />
                    </a>
                    <a
                      href="https://www.facebook.com/"
                      className="btn btn-block btn-facebook"
                    >
                      Facebook
                    </a>
                  </div>
                  <div className="btn-group btn-block mt-2 mb-2">
                    <a
                      href="https://www.google.com/gmail/"
                      className="btn btn-google active"
                    >
                      <span className="fa fa-google" />
                    </a>
                    <a
                      href="https://www.google.com/gmail/"
                      className="btn btn-block btn-google"
                    >
                      Google
                    </a>
                  </div>
                </div>
                <hr className="divider" />
                <div className="form-group">
                  <label className="form-label text-dark">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter name"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label text-dark">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label text-dark">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                  />
                </div>
                <div className="form-group">
                  <label className="custom-control form-checkbox">
                    <input type="checkbox" className="custom-control-input" />
                    <span className="custom-control-label text-dark">
                      Agree the <a href="terms.html">terms and policy</a>
                    </span>
                  </label>
                </div>
                <div className="form-footer mt-2">
                  <a href="home.html" className="btn btn-primary btn-block">
                    Create New Account
                  </a>
                </div>
                <div className="text-center  mt-3 text-dark">
                  Already have account?{" "}
                  <a href="#" data-bs-dismiss="modal" aria-label="Close">
                    SignIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      {/* End Popup Login*/}
    </div>
  );
};

export default PopUpLogin;
