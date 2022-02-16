import React from "react";
import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <div>
      {/*Breadcrumb*/}
      <section style={{ width: "50%", float: "left" }}>
        <div
          className="bannerimg cover-image bg-background3"
          data-bs-image-src="../assets/images/banners/banner2.jpg"
        >
          <div className="header-text mb-0">
            <div className="container">
              <div
                className="text-center text-white "
                style={{ height: "570px" }}
              >
                {/* <h1 className>Login</h1> */}
                <section className="sptb">
                  <div className="container customerpage ">
                    <div className="row">
                      <div
                        className="single-page"
                        style={{ display: "flex", justifyContent: "center" }} ///////////
                      >
                        <div className="" style={{ width: "370px" }}>
                          <div className="wrapper wrapper2">
                            <form
                              id="login"
                              className="card-body"
                              tabIndex={500}
                            >
                              <h3>Login</h3>
                              <div className="mail">
                                <input type="email" name="mail" />
                                <label>Mail or Username</label>
                              </div>
                              <div className="passwd">
                                <input type="password" name="password" />
                                <label>Password</label>
                              </div>
                              <div className="submit">
                                <Link
                                  to="/dashboard"
                                  className="btn btn-primary btn-block"
                                >
                                  Login
                                </Link>
                              </div>
                              <p className="mb-2">
                                <a href="forgot.html">Forgot Password</a>
                              </p>
                              {/* <p className="text-dark mb-0">
                                Don't have account?
                                <Link to="/login" className="text-primary ms-1">
                                  Sign UP
                                </Link>
                              </p> */}
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
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*/Breadcrumb2*/}
      <section style={{ width: "50%", float: "right" }}>
        <div
          className="bannerimg cover-image"
          data-bs-image-src="../assets/images/banners/banner2.jpg"
          /* style={{ backgroundColor: "white" }} */
        >
          <div className="header-text mb-0">
            <div className="container">
              <div className="text-center text-white">
                {/* <h1 className>Login</h1> */}
                <section className="sptb">
                  <div className="container customerpage ">
                    <div className="row">
                      <div
                        className="single-page"
                        style={{ display: "flex", justifyContent: "center" }} ////////////////
                      >
                        <div className="" style={{ width: "370px" }}>
                          <div className="wrapper wrapper2">
                            <form
                              id="Register"
                              className="card-body"
                              tabIndex={500}
                            >
                              <h3>Register</h3>
                              <div className="name">
                                <input type="text" name="name" />
                                <label>Name</label>
                              </div>
                              <div className="mail">
                                <input type="email" name="mail" />
                                <label>Mail or Username</label>
                              </div>
                              <div className="passwd">
                                <input type="password" name="password" />
                                <label>Password</label>
                              </div>
                              <div className="submit">
                                <Link
                                  className="btn btn-primary btn-block"
                                  to="/"
                                >
                                  Register
                                </Link>
                              </div>
                              {/* <p className="text-dark mb-0">
                                Already have an account?
                                <Link to="/" className="text-primary ms-1">
                                  Sign In
                                </Link>
                              </p> */}
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
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Login-Section*/}
      {/* <section className="sptb" style={{ display: "inline-block" }}>
        <div className="container customerpage ">
          <div className="row" style={{ position: "relative", left: "50px" }}>
            <div className="single-page">
              <div className="" style={{ width: "370px" }}>
                <div className="wrapper wrapper2">
                  <form id="login" className="card-body" tabIndex={500}>
                    <h3>Login</h3>
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
                      <Link to="/register" className="text-primary ms-1">
                        Sign UP
                      </Link>
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
      </section> */}
      {/*/Login-Section*/}
    </div>
  );
};

export default Signin;
