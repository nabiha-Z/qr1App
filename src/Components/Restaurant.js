import React from "react";
import { Link } from "react-router-dom";

const Restaurant = () => {
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
                <h1 className>Restaurant Menu</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*/Breadcrumb*/}
      {/*Contact*/}
      <section className="sptb">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-md-12">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Restaurant Details</h3>
                </div>
                <div className="card-body">
                  <div className="form-group">
                    <label className="form-label text-dark">
                      Restaurant Name
                    </label>
                    <input type="text" className="form-control" placeholder />
                  </div>
                  <div className="form-group">
                    <label className="form-label text-dark">Address</label>
                    <input type="text" className="form-control" placeholder />
                  </div>
                  <div className="form-group">
                    <label className="form-label text-dark">City</label>
                    <input type="text" className="form-control" placeholder />
                  </div>
                  <div className="form-group">
                    <label className="form-label text-dark">Phone</label>
                    <input type="text" className="form-control" placeholder />
                  </div>
                  <div className="form-group">
                    <label className="form-label text-dark">Menu Name</label>
                    <input type="text" className="form-control" placeholder />
                  </div>
                  <div style={{ marginTop: "30px" }}>
                    <h3>Add menu option</h3>
                  </div>
                  <a
                    href="#"
                    className="btn text-white btn-block btn-lg"
                    style={{ marginTop: "30px", backgroundColor: "#1cb56d" }}
                  >
                    Upload Menu Items
                  </a>
                  <div style={{ marginTop: "20px", textAlign: "center" }}>
                    OR
                  </div>
                  <Link
                    to="/create-menu"
                    className="btn text-white btn-block btn-lg"
                    style={{ marginTop: "20px", backgroundColor: "#1cb56d" }}
                  >
                    Create Menu Items
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Contact*/}
    </div>
  );
};

export default Restaurant;
