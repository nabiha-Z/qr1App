import React from "react";

const Survey = () => {
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
                <h1 className>Create Survey</h1>
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
                  <h3 className="card-title">Survey Details</h3>
                </div>
                <div className="card-body">
                  <div className="form-group">
                    <label className="form-label text-dark">Survey Name</label>
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
                    <label className="form-label text-dark">Description</label>
                    <textarea className="form form-control" defaultValue={""} />
                  </div>
                </div>
                <div className="card-footer text-center">
                  <a href="#" className="btn btn-success">
                    Submit Survey
                  </a>
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

export default Survey;
