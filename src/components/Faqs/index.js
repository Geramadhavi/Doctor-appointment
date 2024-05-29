import { Component } from "react";
import "./index.css";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward } from "@fortawesome/free-solid-svg-icons";
import { faIdCard } from "@fortawesome/free-solid-svg-icons";

class Faqs extends Component {
  render() {
    return (
      <div className="faqs-container">
        <h1 className="question-main-heading">Frequently Asked Questions</h1>
        <Accordion>
          <AccordionItem className="last-container">
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Which area does Dr. Dharmendra Pratap Singh practice?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Dr. Dharmendra Pratap Singh is a Dental Surgeon practicing in
              Ghazipur.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem className="last-container">
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  What is Dr. Dharmendra Pratap Singh education qualification?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Dr. Dharmendra Pratap Singh is a Dental Surgeon by training and
              has completed his BDS from Institute Of Dental Sciences
              Bareilly,MJP rohilkhand University bareilly UP in 2008.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem className="last-container">
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  What is the address of Dr. Dharmendra Pratap Singhs clinic?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Dr. Dharmendra Pratap Singh currently practices at Bala ji Dental
              Clinic which is located at: Lanka Maidan Near gate no.1, Ghazipur,
              Uttar Pradesh, Lanka maidan , Lanka maidan, Ghazipur.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem className="last-container">
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  How many years of experince Dr. Dharmendra Pratap Singh have?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Dr. Dharmendra Pratap Singh has over 15 years of clinical
              experience.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem className="last-container">
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  How to book Dr. Dharmendra Pratap Singh Dental Surgeon
                  appointment?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              To book an appointment with Dr. Dharmendra Pratap Singh, you can
              book an online appointment with Eka Care or visit his clinic
              offline at: Lanka Maidan Near gate no.1, Ghazipur, Uttar Pradesh,
              Lanka maidan , Lanka maidan, Ghazipur.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem className="last-container">
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Can I book Dr. Dharmendra Pratap Singh for online
                  counsultation?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Yes, you can book an online consultation with Dr. Dharmendra
              Pratap Singh. You can either book it through eka care website and
              your appointment will be confirmed by the doctor instantly.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem className="last-container">
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  What is the counsultion fees for Dr. Dharmendra Pratap Singh?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              The consultation fee for Dr. Dharmendra Pratap Singh may vary
              depending on the type of consultation. It is best to contact the
              clinic post your appointment for the exact charges.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem className="last-container">
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  What are the consultation timings of Dr. Dharmendra Pratap
                  Singh for an appointment?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              The consultation timings for Dr. Dharmendra Pratap Singh may vary
              depending on the location and type of consultation.You can check
              his availability on his appointment calendar for booking a slot.<br/>
              His general consultation hours are:<br/> <span className="span-last-answer">Mon - Sun</span><br/>09:00 AM - 10:00 AM<br/>
              10:00 AM - 08:00 PM
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <div className="main-last-container">
          <div className="last-container">
            <h1 className="last-container-heading">SAFETY PROTOCOLS</h1>
            <div className="last-second-container">
              <FontAwesomeIcon icon={faAward} style={{ color: "#6b6b6b" }} />
              <span className="last-second-container-heading">
                Download Vaccine Certificate
              </span>
            </div>
            <p className="last-container-para">
              Where can I download vaccine certificate for myself and my family?
              <br />
              Eka care provides the service that facilitate citizens to download
              the Co-WIN Vaccination Certificate from anywhere.
            </p>
            <button className="last-container-button">
              Download Vaccine Certificate
            </button>
          </div>
          <div className="last-container">
            <h1 className="last-container-heading">MANAGE RECORDS</h1>
            <div className="last-second-container">
              <FontAwesomeIcon icon={faIdCard} style={{ color: "#525456" }} />
              <span className="last-second-container-heading">
                Create Your Digital ABHA
              </span>
            </div>
            <p className="last-container-para">
              Where can I download vaccine certificate for myself and my family?
              <br />
              Eka care provides the service that facilitate citizens to download
              the Co-WIN Vaccination Certificate from anywhere.
            </p>
            <button className="last-container-button">
              Download Vaccine Certificate
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Faqs;
