import React from 'react';
import './card-styles.css'

function Card (props) {
    const contactDetails = props.contactDetails
    return(
        <>
        <div className="cardlist row">
            <div className="col-md-3 col-sm-1"></div>
            <div className="col-md-6 col-sm-10">
                <h3 className="text-center">Saved Contact</h3>
                <ul>
                    <li>Name: {contactDetails.userName}</li>
                    <li>Phone number: {contactDetails.phoneNumber}</li>
                    <li>Area: {contactDetails.userArea}</li>
                    <li>Address: {contactDetails.userAddress}</li>
                    <li>City: {contactDetails.userCity}</li>
                    <li>State: {contactDetails.userState}</li>
                    <li>Zip Code: {contactDetails.zipCode}</li>
                    <li>Email: {contactDetails.userEmail}</li>
                    <li>Date of birth: {contactDetails.dateOfBirth}</li>
                </ul>
            </div>
            <div className="col-md-3 col-sm-1"></div>
        </div>
        </>
    )
}

export default Card;