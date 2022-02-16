import React from "react";
import { Link } from "react-router-dom";

const Signin2 = () => {
  return (
    <div>
      {/*Breadcrumb*/}
      <section>
        <div
          className="bannerimg cover-image bg-background3"
          data-bs-image-src="../assets/images/banners/banner2.jpg"
        >
          <div className="header-text mb-0">
            <div className="container">
              <div className="text-center text-white">
                <h1 className>Login</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*/Breadcrumb*/}
      {/*Login-Section*/}
      <section className="sptb">
        <div className="container customerpage">
          <div className="row">
            <div className="single-page">
              <div className="col-lg-5 col-xl-4 col-md-6 d-block mx-auto">
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
      </section>
      {/*/Login-Section*/}
    </div>
  );
};

export default Signin2;
