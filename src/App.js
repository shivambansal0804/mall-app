import React from "react";
import Header from "./header";
import "./App.css";
import body_image_1 from "./body_banner.png";
import second_banner from "./second_banner.png";
import CreateAccount from "./createAccountSection";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        {/* Placeholder content for images */}
        <img src={body_image_1}></img>
        <img src={second_banner}></img>
        <CreateAccount/>
        <div className="image-container">
          <div className="image-placeholder">Image 1</div>
          <div className="image-placeholder">Image 2</div>
          <div className="image-placeholder">Image 3</div>
          <div className="image-placeholder">Image 4</div>
        </div>
      </div>
    </div>
  );
}

export default App;
