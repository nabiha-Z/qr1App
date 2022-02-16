import React from "react";
import { Link } from "react-router-dom";

const CreateQR = () => {
  return (
    <div>
      {/*Breadcrumb*/}
      <div>
        <div
          className="bannerimg cover-image bg-background3"
          data-bs-image-src="../assets/images/banners/banner2.jpg"
        >
          <div className="header-text mb-0">
            <div className="container">
              <div className="text-center text-white">
                <h1 className>Create QR Code</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*/Breadcrumb*/}
      {/*Contact*/}
      <div className="sptb bg-white mb-0 pb-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-xl-12 col-md-12 d-block mb-2">
              <div className="section-title center-block text-center">
                <h2>Select One</h2>
              </div>
              <div className="row text-white">
                <div className="col-4 mb-5 ">
                  <div
                    style={{
                      cursor: "pointer",
                      borderRadius: "16px",
                      border: "13px #1cb56d solid",
                    }}
                  >
                    <div
                      className="support-service bg-primary br-2 mb-4 mb-xl-0 d-flex cursor"
                      style={{ border: 0 }}
                    >
                      <img src="../assets/images/brand/Vector.png" />
                      <Link
                        to="/restaurant"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        <h6 className="m-2">Restaurant</h6>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-4 mb-5 ">
                  <div
                    style={{
                      cursor: "pointer",
                      borderRadius: "16px",
                      border: "13px #1cb56d solid",
                    }}
                  >
                    <div
                      className="support-service bg-primary br-2 mb-4 mb-xl-0 d-flex cursor"
                      style={{ border: 0 }}
                    >
                      <img src="../assets/images/brand/Vector1.png" />
                      <Link
                        to="/survey"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        <h6 className="m-2">Survey</h6>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-4 mb-5 ">
                  <div
                    style={{
                      cursor: "pointer",
                      borderRadius: "16px",
                      border: "13px #1cb56d solid",
                    }}
                  >
                    <div
                      className="support-service bg-primary br-2 mb-4 mb-xl-0 d-flex cursor "
                      style={{ border: 0 }}
                    >
                      <img src="../assets/images/brand/Vector1.png" />
                      <h6 className="m-2">Others</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-xl-12 col-md-12 d-block">
              <div className="container">
                <div className="row">
                  <div className="col-xl-12 col-lg-12 col-md-12">
                    {/*Add lists*/}
                    <div className="mb-lg-0">
                      <div className>
                        <div className="item2-gl">
                          <div className="row">
                            <div className="form-group col-xl-12 col-lg-12 col-md-12 mb-0 bg-white">
                              <input
                                type="text"
                                className="form-control input-lg br-te-md-0 br-be-md-0"
                                id="text4"
                                placeholder="Search QR Code ..."
                              />
                            </div>
                          </div>
                          <div className="tab-content">
                            <div className="tab-pane active" id="tab-11">
                              <div className="card overflow-hidden">
                                <div className="d-md-flex">
                                  <div className="item-card9-img">
                                    <div className="item-card9-imgs">
                                      <a href="classified.html" />
                                      <img
                                        src="../assets/images/products/h4.png"
                                        alt="img"
                                        className="cover-image"
                                      />
                                    </div>
                                  </div>
                                  <div className="card border-0 mb-0">
                                    <div className="card-body">
                                      <div className="item-card9">
                                        <a href="classified.html">Restaurant</a>
                                        <a
                                          href="classified.html"
                                          className="text-dark"
                                        >
                                          <h4 className="font-weight-semibold mt-1">
                                            12 Mar 2021
                                          </h4>
                                        </a>
                                        <p className="mb-0 leading-tight">
                                          Ut enim ad minima veniam, quis nostrum
                                          exercitationem ullam corporis suscipit
                                        </p>
                                      </div>
                                    </div>
                                    <div className="card-footer pt-4 pb-4">
                                      <div className="item-card9-footer d-flex">
                                        <div className="item-card9-cost">
                                          <h4
                                            className="
                                                text-dark
                                                font-weight-semibold
                                                mb-0
                                                mt-0
                                              "
                                          >
                                            www.resturant.com
                                          </h4>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="card overflow-hidden">
                                <div className="d-md-flex">
                                  <div className="item-card9-img">
                                    <div className="item-card9-imgs">
                                      <a href="classified.html" />
                                      <img
                                        src="../assets/images/products/h4.png"
                                        alt="img"
                                        className="cover-image"
                                      />
                                    </div>
                                  </div>
                                  <div className="card border-0 mb-0">
                                    <div className="card-body">
                                      <div className="item-card9">
                                        <a href="classified.html">Survey</a>
                                        <a
                                          href="classified.html"
                                          className="text-dark"
                                        >
                                          <h4 className="font-weight-semibold mt-1">
                                            12 Mar 2021
                                          </h4>
                                        </a>
                                        <p className="mb-0 leading-tight">
                                          Ut enim ad minima veniam, quis nostrum
                                          exercitationem ullam corporis suscipit
                                        </p>
                                      </div>
                                    </div>
                                    <div className="card-footer pt-4 pb-4">
                                      <div className="item-card9-footer d-flex">
                                        <div className="item-card9-cost">
                                          <h4
                                            className="
                                                text-dark
                                                font-weight-semibold
                                                mb-0
                                                mt-0
                                              "
                                          >
                                            www.survey.com
                                          </h4>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="card overflow-hidden">
                                <div className="d-md-flex">
                                  <div className="item-card9-img">
                                    <div className="item-card9-imgs">
                                      <a href="classified.html" />
                                      <img
                                        src="../assets/images/products/h4.png"
                                        alt="img"
                                        className="cover-image"
                                      />
                                    </div>
                                  </div>
                                  <div className="card border-0 mb-0">
                                    <div className="card-body">
                                      <div className="item-card9">
                                        <a href="classified.html">Restaurant</a>
                                        <a
                                          href="classified.html"
                                          className="text-dark"
                                        >
                                          <h4 className="font-weight-semibold mt-1">
                                            12 Mar 2021
                                          </h4>
                                        </a>
                                        <p className="mb-0 leading-tight">
                                          Ut enim ad minima veniam, quis nostrum
                                          exercitationem ullam corporis suscipit
                                        </p>
                                      </div>
                                    </div>
                                    <div className="card-footer pt-4 pb-4">
                                      <div className="item-card9-footer d-flex">
                                        <div className="item-card9-cost">
                                          <h4
                                            className="
                                                text-dark
                                                font-weight-semibold
                                                mb-0
                                                mt-0
                                              "
                                          >
                                            www.resturant.com
                                          </h4>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="center-block text-center">
                            <ul className="pagination mb-5">
                              <li className="page-item page-prev disabled">
                                <a className="page-link" href="#" tabIndex={-1}>
                                  Prev
                                </a>
                              </li>
                              <li className="page-item active">
                                <a className="page-link" href="#">
                                  1
                                </a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="#">
                                  2
                                </a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="#">
                                  3
                                </a>
                              </li>
                              <li className="page-item page-next">
                                <a className="page-link" href="#">
                                  Next
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      {/*/Add lists*/}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*Contact*/}
      </div>
    </div>
  );
};

export default CreateQR;
