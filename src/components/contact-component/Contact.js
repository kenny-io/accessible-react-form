import React, { Component } from 'react';
import { Combobox, ComboboxInput } from '@reach/combobox';
import { Menu, MenuList, MenuButton, MenuItem } from '@reach/menu-button';
import { MdPhone, MdPermIdentity, MdLocationOn, MdEmail, MdExpandMore, MdEvent } from 'react-icons/md';
import DatePicker from 'react-datepicker';

import Card from '../card-component/Card';

import '@reach/combobox/styles.css';
import '@reach/menu-button/styles.css';
import 'react-datepicker/dist/react-datepicker.css';
import './contact-style.css'


class Contact extends Component {
    constructor(props){
        super(props)

        this.state = {
            userName: '', phoneNumber: '', userArea: '', userAddress: '', userCity: '', userState: '',
            zipCode: '', userEmail: '', dateOfBirth: '', DOB: '',
            submitted: false
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({submitted: true})
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value })
    }

    handleSelect = (value, name) =>  {
        this.setState({ [name]: value})
    }

    handleDateOfBirth = (DOB) => {
        let dateOfBirth = new Date(DOB);
        let mainDateOfBirth = `${dateOfBirth.getDate()}/${dateOfBirth.getMonth() + 1}/${dateOfBirth.getFullYear()}`
        this.setState({dateOfBirth: mainDateOfBirth, DOB: DOB})
    }

    handleClose = (e) => {
        this.setState({  
            userName: '', phoneNumber: '', userArea: '', userAddress: '', userCity: '', userState: '',
            zipCode: '', userEmail: '', dateOfBirth: '', DOB: '', submitted : false
        })
        window.location.reload();
    }

    render() {
        return(
            <>
                <nav className="nav navbar navbar-expand-sm navbar-light row">
                    <div className="navdiv" style={{ width:'100%'}}>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon navbar-dark"></span>
                        </button>
                    <a className="" href="/">Contacts</a>
                    </div>
                </nav>
                <form onSubmit={this.handleSubmit}>
                    {/* input box for name */}
                    <Combobox className="form-group form-row">
                        <div className="col-1 text-center">
                        <label for="userName" className="col-form-label"><MdPermIdentity /></label>
                        </div>
                        <div className="col-11">
                        <ComboboxInput className="form-control"
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
                        <label for="phoneNumber" className="col-form-label"><MdPhone /></label>
                        </div>
                            <Combobox className="col-6">
                                <ComboboxInput  className="form-control" 
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
                                <MenuButton aria-label="menu button for area">{(this.state.userArea == '') ? ('Area') : (this.state.userArea)} <span aria-hidden><MdExpandMore /></span></MenuButton>
                                <MenuList> 
                                    <MenuItem onSelect={() => this.handleSelect('Ajah', 'userArea' )}>Ajah</MenuItem>
                                    <MenuItem onSelect={() => this.handleSelect('Apapa', 'userArea' )}>Apapa</MenuItem>
                                    <MenuItem onSelect={() => this.handleSelect('Festac', 'userArea' )}>Festac</MenuItem>
                                    <MenuItem onSelect={() => this.handleSelect('Gbagada', 'userArea' )}>Gbagada</MenuItem>
                                    <MenuItem onSelect={() => this.handleSelect('Lekki', 'userArea' )}>Lekki</MenuItem>
                                    <MenuItem onSelect={() => this.handleSelect('Victoria Island', 'userArea' )}>Victoria Island</MenuItem>
                                </MenuList>
                            </Menu>
                        </div>
                    </div>
                    <Combobox className="form-group form-row">
                        <div className="col-1 text-center">
                        <label for="userAddress" className="col-form-label"><MdLocationOn /></label>
                        </div>
                        <div className="col-11">
                        <ComboboxInput  className="form-control"
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
                        <label for="userCity" className="col-form-label"></label>
                        </div>
                        <div className="col-11">
                        <ComboboxInput  className="form-control" 
                                        id="userCity"
                                        aria-label="user city" 
                                        name="userCity" 
                                        value={this.state.userCity} 
                                        placeholder="City" 
                                        onChange={this.handleChange}
                        />
                        </div>
                    </Combobox>
                    <div className="form-group form-row">
                        <div className="col-1"></div>
                        <div className="col-6">
                            <Menu>
                                <MenuButton aria-label="menu button for state">
                                    {(this.state.userState == '') ? ('State') : (this.state.userState)} 
                                    <span aria-hidden><MdExpandMore /></span>
                                </MenuButton>
                                <MenuList>
                                    <MenuItem onSelect={() => this.handleSelect('Abuja', 'userState' )}>Abuja</MenuItem>
                                    <MenuItem onSelect={() => this.handleSelect('Enugu', 'userState' )}>Enugu</MenuItem>
                                    <MenuItem onSelect={() => this.handleSelect('Kano', 'userState' )}>Kano</MenuItem>
                                    <MenuItem onSelect={() => this.handleSelect('Lagos', 'userState' )}>Lagos</MenuItem>
                                    <MenuItem onSelect={() => this.handleSelect('Rivers', 'userState' )}>Rivers</MenuItem>
                                </MenuList>
                            </Menu>
                        </div>
                        <div className="col-5">
                            <Combobox>
                                <ComboboxInput  className="form-control" 
                                                aria-label="user zip code" 
                                                name="zipCode" 
                                                value={this.state.zipCode} 
                                                placeholder="Zip Code" 
                                                onChange={this.handleChange}
                                />
                            </Combobox>
                        </div>
                    </div>
                    <Combobox className="form-group form-row">
                        <div className="col-1 text-center">
                        <label for="userEmail" className="col-form-label"><MdEmail /></label>
                        </div>
                        <div className="col-11">
                            <ComboboxInput  className="form-control" 
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
                            <label for="userBirthday" className="col-form-label"><MdEvent /></label>
                        </div>
                        <div className="col-11 datepicker">
                            <DatePicker 
                                className="form-control" 
                                id="userBirthday"
                                aria-label="user birthday date" 
                                placeholderText="Birthday"
                                selected= {this.state.DOB}
                                onChange = {this.handleDateOfBirth}
                            />
                        </div>
                    </div>
                    <button className="btn btn-block" style={{border:'1px solid rebeccapurple', borderRadius:'5px'}} type="submit" aria-label="submit button" >Submit</button>
                </form>

                {
                    (this.state.submitted == true) ? 
                    (
                        <div className="container-fluid">
                            <Card contactDetails = {this.state} />
                            <button className="btn btn-danger" onClick={this.handleClose}>Close Card</button>
                        </div>
                    ) : (null)
                }
            </>
        )
    }
}

export default Contact;