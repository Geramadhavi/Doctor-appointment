import React from "react";
import { Component } from "react";
import { FaUserDoctor } from "react-icons/fa6";
import { IoVideocamOutline } from "react-icons/io5";
import "./index.css";

const DROP_IMAGE = "dropdown.png";
const UP_IMAGE = "dropup.png";

class Appointment extends Component {
  state = { isActive: false };

  onToggleIsActive = () => {
    this.setState((prevState) => ({
      isActive: !prevState.isActive,
    }));
  };

  renderDropAnswer = () => {
    const { isActive } = this.state;
    if (isActive) {
      return (
        <div className="d-flex flex-column">
          <h1 className="dropup-heading">Bala ji Dental Clinic</h1>
          <p className="dropup-para">
            Lanka Maidan Near gate no.1, Ghazipur, Uttar Pradesh,.....
          </p>
        </div>
      );
    }
    return null;
  };
  renderDropActiveImage = () => {
    const { isActive } = this.state;
    const image = isActive ? UP_IMAGE : DROP_IMAGE;
    const altText = isActive ? "drop" : "up";

    return (
      <button
        className="drop-button"
        type="button"
        onClick={this.onToggleIsActive}
      >
        <img src={image} alt={altText} className="drop-button-image" />
      </button>
    );
  };
  render() {
    return (
      <div className="d-flex flex-column">
        <h1 className="appointment-heading">Book An Appointment</h1>
        <div className="buttons-container d-flex flex-row">
          <button className="clinic-button">
            <FaUserDoctor className="doctor-icon" />
            In Clinic
          </button>
          <button className="Teleconsultation-button">
            <IoVideocamOutline className="video-icon" />
            Teleconsultation
          </button>
        </div>
        <div>
          <div className="dropdown-container">
            <div className="d-flex flex-column">
              <h1 className="dropdown-heading">Bala ji Dental Clinic</h1>
              <p className="dropdown-para">
                Lanka Maidan Near gate no.1, Ghazipur, Uttar Pradesh,.....
              </p>
            </div>
            <div className="">{this.renderDropActiveImage()}</div>
          </div>
          <div className="dropdown-answer-container">
            {this.renderDropAnswer()}
          </div>
          <div className="appointment-last-container">
            <h1 className="select-service-heading">Select service</h1>
            <div className="appointment-last-subcontainer">
              <div className="doctors-heading-container">
                <div className="doctors-heading-subcontainer">
                  <FaUserDoctor className="slot-doctor-icon" />
                  <h1 className="consulation-heading">Consultation</h1>
                </div>
                <p className="money-para">from<span className="from-span"> Rs.100</span></p>
              </div>
              <p className="slots-available">SLOTS AVAILABLE 30 NOV'23, TODAY</p>
              <div className="slots-timings">
                <h1 className="slots-timings-heading">01:15 PM</h1>
                <h1 className="slots-timings-heading">01:30 PM</h1>
                <h1 className="slots-timings-heading">01:45 PM</h1>
              </div>
              <button className="see-all-slots-button">See all Slots</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Appointment;
