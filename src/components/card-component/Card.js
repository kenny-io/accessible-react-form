import React from "react";
import "./card-styles.css";

function Card(props) {
  const contactDetails = props.contactDetails;
  return (
    <>
      <div className="cardlist row">
        <div className="col-md-3 col-sm-1"></div>
        <div className="col-md-6 col-sm-10">
          <p className="font-weight-bold">Saved Contact</p>
          <ul>
            <li className="text-monospace">
              Name: {contactDetails.userName.toUpperCase()}
            </li>
            <li class="text-monospace">
              Phone number: {contactDetails.phoneNumber}
            </li>
            <li class="text-monospace">
              Area: {contactDetails.userArea.toUpperCase()}
            </li>
            <li class="text-monospace">
              Address: {contactDetails.userAddress}
            </li>
            {/* <li>City: {contactDetails.userCity.toUpperCase()}</li>
                    <li>State: {contactDetails.userState.toUpperCase()}</li>
                    <li>Zip Code: {contactDetails.zipCode}</li> */}
            <li class="text-monospace">Email: {contactDetails.userEmail}</li>
            <li class="text-monospace">
              Date of birth: {contactDetails.dateOfBirth}
            </li>
          </ul>
        </div>
        <div className="col-md-3 col-sm-1"></div>
      </div>
    </>
  );
}

export default Card;
