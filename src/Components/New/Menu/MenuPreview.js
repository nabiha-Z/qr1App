import React from "react";
import "./MenuPreview.css";
import Button from "@material-ui/core/Button";

const MenuPreview = () => {
  return (
    <div className="gridItem">
      <h5>Menu Preview</h5>
      <div className="menuContainer">
        <header className="menuHeader">
          <h5>Restaurant Name </h5>
          <p>Restaurant de Fiesta</p>
          <h5>Address </h5>
          <p>Lorem ipsem is the address.</p>

          <h5 style={{ width: "50%", display: "inline-block" }}>City</h5>
          <h5 style={{ width: "50%", display: "inline-block" }}>
            Phone Number
          </h5>
          <p style={{ width: "50%", display: "inline-block" }}>Lorem ipsum</p>
          <p style={{ width: "50%", display: "inline-block" }}>+862347623</p>
        </header>
        <body className="itemList">
          <div className="MenuP3">
            <h5>Item Price</h5>
            <h5>Price</h5>
          </div>
          <div className="MenuP4">
            <h5>Burger</h5>
            <h5>$5.87</h5>
          </div>
          <div className="MenuP3">
            <h5>Coffee</h5>
            <h5>$1.34</h5>
          </div>
          <div className="MenuP4">
            <h5>Ice Tea</h5>
            <h5>$0.99</h5>
          </div>
          <div className="MenuP3">
            <h5>Pizza</h5>
            <h5>$5.65</h5>
          </div>
          <div className="MenuP4">
            <h5>Pasta</h5>
            <h5 s>$2.95</h5>
          </div>
        </body>
      </div>
      <div>
        <Button variant="contained" fullWidth id="button">
          Create Menu
        </Button>
      </div>
    </div>
  );
};

export default MenuPreview;
