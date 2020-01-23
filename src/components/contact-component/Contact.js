import React, { Component } from "react";
import { Combobox, ComboboxInput } from "@reach/combobox";
import { Menu, MenuList, MenuButton, MenuItem } from "@reach/menu-button";
import {
  MdPhone,
  MdPermIdentity,
  MdLocationOn,
  MdEmail,
  MdExpandMore,
  MdEvent
} from "react-icons/md";
import DatePicker from "react-datepicker";

// import Card from "../card-component/Card";

// import "@reach/combobox/styles.css";
// import "@reach/menu-button/styles.css";
// import "react-datepicker/dist/react-datepicker.css";
// import "./contact-style.css";

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      phoneNumber: "",
      userArea: "",
      userAddress: "",
      userEmail: "",
      dateOfBirth: "",
      DOB: "",
      submitted: false
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ submitted: true });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSelect = (value, name) => {
    this.setState({ [name]: value });
  };

  handleDateOfBirth = DOB => {
    let dateOfBirth = new Date(DOB);
    let mainDateOfBirth = `${dateOfBirth.getDate()}/${dateOfBirth.getMonth() +
      1}/${dateOfBirth.getFullYear()}`;
    this.setState({ dateOfBirth: mainDateOfBirth, DOB: DOB });
  };

  render() {
    return (
      <>
        <form style={{ marginTop: 20 }} onSubmit={this.handleSubmit}>
          {/* input box for name */}
          <Combobox className="form-group form-row">
            <div className="col-1 text-center">
              <label for="userName" className="col-form-label">
                <MdPermIdentity />
              </label>
            </div>
            <div className="col-11">
              <ComboboxInput
                className="form-control"
                id="userName"
                aria-label="user name"
                name="userName"
                value={this.state.userName}
                placeholder="Name"
                onChange={this.handleChange}
              />
            </div>
          </Combobox>

          {/*input box for phone number and area */}
          <div className="form-group form-row">
            <div className="col-1 text-center" aria-label="phone">
              <label for="phoneNumber" className="col-form-label">
                <MdPhone />
              </label>
            </div>
            <Combobox className="col-6">
              <ComboboxInput
                className="form-control"
                id="phoneNumber"
                aria-label="user phone number"
                name="phoneNumber"
                value={this.state.phoneNumber}
                placeholder="Phone"
                onChange={this.handleChange}
              />
            </Combobox>
            <div className="col-5">
              <Menu>
                <MenuButton aria-label="menu button for area">
                  {this.state.userArea == "" ? "Area" : this.state.userArea}{" "}
                  <span aria-hidden>
                    <MdExpandMore />
                  </span>
                </MenuButton>
                <MenuList>
                  <MenuItem
                    onSelect={() => this.handleSelect("Ajah", "userArea")}
                  >
                    Ajah
                  </MenuItem>
                  <MenuItem
                    onSelect={() => this.handleSelect("Apapa", "userArea")}
                  >
                    Apapa
                  </MenuItem>
                  <MenuItem
                    onSelect={() => this.handleSelect("Festac", "userArea")}
                  >
                    Festac
                  </MenuItem>
                  <MenuItem
                    onSelect={() => this.handleSelect("Gbagada", "userArea")}
                  >
                    Gbagada
                  </MenuItem>
                  <MenuItem
                    onSelect={() => this.handleSelect("Lekki", "userArea")}
                  >
                    Lekki
                  </MenuItem>
                  <MenuItem
                    onSelect={() =>
                      this.handleSelect("Victoria Island", "userArea")
                    }
                  >
                    Victoria Island
                  </MenuItem>
                </MenuList>
              </Menu>
            </div>
          </div>
          <Combobox className="form-group form-row">
            <div className="col-1 text-center">
              <label for="userAddress" className="col-form-label">
                <MdLocationOn />
              </label>
            </div>
            <div className="col-11">
              <ComboboxInput
                className="form-control"
                id="userAddress"
                aria-label="user house address"
                name="userAddress"
                value={this.state.userAddress}
                placeholder="Address"
                onChange={this.handleChange}
              />
            </div>
          </Combobox>
          <Combobox className="form-group form-row">
            <div className="col-1 text-center">
              <label for="userEmail" className="col-form-label">
                <MdEmail />
              </label>
            </div>
            <div className="col-11">
              <ComboboxInput
                className="form-control"
                id="userEmail"
                aria-label="user email address"
                name="userEmail"
                value={this.state.userEmail}
                placeholder="Email"
                onChange={this.handleChange}
              />
            </div>
          </Combobox>
          <div className="form-group form-row">
            <div className="col-1 text-center">
              <label for="userBirthday" className="col-form-label">
                <MdEvent />
              </label>
            </div>
            <div className="col-11 datepicker">
              <DatePicker
                className="form-control"
                id="userBirthday"
                aria-label="user birthday date"
                placeholderText="Birthday"
                selected={this.state.DOB}
                onChange={this.handleDateOfBirth}
              />
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col text-center">
                <button class="col-7 btn btn-primary">Submit</button>
              </div>
            </div>
          </div>
        </form>

        {/* {this.state.submitted == true ? (
          <div className="container-fluid">
            <Card contactDetails={this.state} />
            <button className="btn btn-danger" onClick={this.handleClose}>
              Close Card
            </button>
          </div>
        ) : null} */}
      </>
    );
  }
}

export default Contact;
