import React from "react";
import imgUser from "../../assets/img.jpg";
import "./styles.scss";

export default function Card() {
  return (
    <div className="card">
      <div className="card-header">
        <img src={imgUser} alt="img-name" />
        <div className="card-user-container">
          <span className="account-name">Mike Bobsin</span>
          <span className="user-name">@mikebobsin</span>
        </div>
      </div>
      <div className="card-body">
        Lorem ipsum dolor sit amet illiet es ail consectetur adipiscing elit.
        Ultrices et pulvinar id convallis quis luctus forza a
        http://ow.ly/95IZ50z3bQP
      </div>
      <div className="card-footer">
        <p>11:44 AM · Dec 10, 2020</p>
      </div>
    </div>
  );
}
