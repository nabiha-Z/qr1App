import React from "react";

const CreateMenu = () => {
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
                <h1 className>Add Menu</h1>
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
                  <h3 className="card-title">Menu Details</h3>
                </div>
                <div className="card-body">
                  <div className="form-group">
                    <label className="form-label text-dark">Item Name</label>
                    <input type="text" className="form-control" placeholder />
                  </div>
                  <h4 style={{ marginTop: "30px" }}>Category</h4>
                  <div
                    className="d-md-flex ad-post-details mt-3"
                    style={{ marginTop: "30px" }}
                  >
                    <label className="custom-control form-radio mb-2 me-4">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        name="radios1"
                        defaultValue="option1"
                        defaultChecked
                      />
                      <span className="custom-control-label">
                        <a href="#" className="text-muted">
                          Vegan
                        </a>
                      </span>
                    </label>
                    <label className="custom-control form-radio mb-2">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        name="radios2"
                        defaultValue="option2"
                      />
                      <span className="custom-control-label">
                        <a href="#" className="text-muted">
                          Gulten Free
                        </a>
                      </span>
                    </label>
                    <label
                      className="custom-control form-radio mb-2 me-4"
                      style={{ marginLeft: "20px" }}
                    >
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        name="radios1"
                        defaultValue="option1"
                        defaultChecked
                      />
                      <span className="custom-control-label">
                        <a href="#" className="text-muted">
                          Spicy
                        </a>
                      </span>
                    </label>
                    <label
                      className="custom-control form-radio mb-2 me-4"
                      style={{ marginLeft: "20px" }}
                    >
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        name="radios1"
                        defaultValue="option1"
                        defaultChecked
                      />
                      <span className="custom-control-label">
                        <a href="#" className="text-muted">
                          Vegetarian{" "}
                        </a>
                      </span>
                    </label>
                    <label className="custom-control form-radio mb-2">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        name="radios2"
                        defaultValue="option2"
                      />
                      <span className="custom-control-label">
                        <a href="#" className="text-muted">
                          Non-Vegetarian
                        </a>
                      </span>
                    </label>
                  </div>
                  <div className="form-group" style={{ marginTop: "30px" }}>
                    <label className="form-label text-dark">
                      Per Quantity Price
                    </label>
                    <input type="text" className="form-control" placeholder />
                  </div>
                  <div className="form-group">
                    <label className="form-label text-dark">Description</label>
                    <textarea
                      type="text"
                      className="form-control"
                      placeholder
                      defaultValue={""}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-evenly",
                      alignItems: "center",
                    }}
                  >
                    <a
                      href="#"
                      className="btn btn-success text-center "
                      style={{
                        display: "flex",
                        justifyContent: "space-around",
                        textAlign: "center",
                        color: "#4ECB71",
                        backgroundColor: "white",
                        border: "2px solid #4ECB71",
                      }}
                    >
                      <img
                        src="../assets/images/brand/upload_header.png"
                        style={{
                          width: "38px",
                          margin: "0 5% 0 0",
                        }}
                      />
                      <span>Upload Excel/PDF/Image</span>
                    </a>
                    <a
                      href="#"
                      className="btn btn-success text-center  "
                      style={{
                        display: "flex",
                        justifyContent: "space-around",
                        textAlign: "center",
                        color: "#4ECB71",
                        backgroundColor: "white",
                        border: "2px solid #4ECB71",
                      }}
                    >
                      <img
                        src="../assets/images/brand/upload_header.png"
                        style={{
                          width: "38px",
                          margin: "auto 5% auto 0",
                        }}
                      />
                      <span>Upload Header Image</span>
                    </a>
                    <a
                      href="#"
                      className="btn btn-success text-center  "
                      style={{
                        display: "flex",
                        justifyContent: "space-around",
                        textAlign: "center",
                        color: "#4ECB71",
                        backgroundColor: "white",
                        border: "2px solid #4ECB71",
                      }}
                    >
                      <img
                        src="../assets/images/brand/upload_background.png"
                        style={{
                          width: "30px",
                          margin: "0 5% 0 0",
                        }}
                      />
                      <span> Upload Background Image</span>
                    </a>
                  </div>
                  <a
                    href="#"
                    className="btn btn-success text-center"
                    style={{
                      display: "block",
                      width: "fit-content",
                      margin: "1rem auto 0",
                      fontSize: "16px",
                    }}
                  >
                    <span>Add item</span>
                  </a>
                  <h4 style={{ marginTop: "30px" }}>Menu Preview</h4>
                  <table className="table" style={{ marginTop: "30px" }}>
                    <thead>
                      <tr>
                        <th>Sr.no</th>
                        <th>Item</th>
                        <th>Price</th>
                        <th>Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>abc</td>
                        <td>10$</td>
                        <td>Done</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>abc</td>
                        <td>10$</td>
                        <td>Done</td>
                      </tr>
                    </tbody>
                  </table>
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

export default CreateMenu;
