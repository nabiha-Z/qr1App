import React from "react";

const Profile = () => {
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
                <h1 className>My Dashboard</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Breadcrumb*/}
      {/*User Dashboard*/}
      <section className="sptb">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12">
              <div className="card overflow-hidden is-expanded">
                <div className="card-body item-user p-5 active">
                  <div className="profile-pic">
                    <div className="profile-pic-img">
                      <span
                        className="bg-success dots"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title
                        data-bs-original-title="online"
                        aria-label="online"
                      />
                      <img
                        src="../assets/images/faces/male/25.jpg"
                        className="brround"
                        alt="user"
                      />
                    </div>
                    <a href="userprofile.html" className="text-dark">
                      <h4 className="mt-3 mb-0 font-weight-semibold">
                        Robert McLean
                      </h4>
                    </a>
                  </div>
                </div>
                <aside className="app-sidebar doc-sidebar my-dash open">
                  <div className="app-sidebar__user clearfix is-expanded">
                    <ul className="side-menu open">
                      <li className>
                        <a className="side-menu__item" href="mydash.html">
                          {" "}
                          <div className="col-md-12">
                            <div className="form-group mb-0">
                              <label className="form-label">Upload Image</label>
                              <div className="form-file">
                                <input
                                  type="file"
                                  className="form-control example-file-input-custom"
                                  name="example-file-input-custom"
                                />
                              </div>
                            </div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </aside>
              </div>
            </div>
            <div className="col-xl-12 col-lg-12 col-md-12">
              <div className="card mb-0">
                <div className="card-header">
                  <h3 className="card-title">Edit Profile</h3>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-6 col-md-6">
                      <div className="form-group">
                        <label className="form-label">First Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="First Name"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-6">
                      <div className="form-group">
                        <label className="form-label">Last Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Last Name"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-6">
                      <div className="form-group">
                        <label className="form-label">Email address</label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-6">
                      <div className="form-group">
                        <label className="form-label">Phone Number</label>
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Number"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label className="form-label">Address</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Home Address"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-4">
                      <div className="form-group">
                        <label className="form-label">City</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="City"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-3">
                      <div className="form-group">
                        <label className="form-label">Postal Code</label>
                        <input
                          type="number"
                          className="form-control"
                          placeholder="ZIP Code"
                        />
                      </div>
                    </div>
                    <div className="col-md-5">
                      <div className="form-group">
                        <label className="form-label">Country</label>
                        <select
                          className="form-control select2-show-search border-bottom-0 w-100 select2-show-search"
                          data-placeholder="Select"
                        >
                          <optgroup label="Categories">
                            <option>--Select--</option>
                            <option value={1}>Germany</option>
                            <option value={2}>Real Estate</option>
                            <option value={3}>Canada</option>
                            <option value={4}>Usa</option>
                            <option value={5}>Afghanistan</option>
                            <option value={6}>Albania</option>
                            <option value={7}>China</option>
                            <option value={8}>Denmark</option>
                            <option value={9}>Finland</option>
                            <option value={10}>India</option>
                            <option value={11}>Kiribati</option>
                            <option value={12}>Kuwait</option>
                            <option value={13}>Mexico</option>
                            <option value={14}>Pakistan</option>
                          </optgroup>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-6">
                      <div className="form-group">
                        <label className="form-label">Facebook</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="https://www.facebook.com/"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-6">
                      <div className="form-group">
                        <label className="form-label">Google</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="https://www.google.com/"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-6">
                      <div className="form-group">
                        <label className="form-label">Twitter</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="https://twitter.com/"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-6">
                      <div className="form-group">
                        <label className="form-label">Pinterest</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="https://in.pinterest.com/"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label className="form-label">About Me</label>
                        <textarea
                          rows={5}
                          className="form-control"
                          placeholder="Enter About your description"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer text-center">
                  <button type="submit" className="btn btn-primary">
                    Updated Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*/User Dashboard*/}
    </div>
  );
};

export default Profile;
