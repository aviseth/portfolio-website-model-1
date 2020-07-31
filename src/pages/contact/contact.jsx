// package imports
import React from "react";

// component imports
import Header from "../../components/common/header/header";
import { ContactMe } from "../../constants/icons";
import ContactBody from "../../components/contact/contact-body";

// css imports
import "./contact.css";

function Contact(props) {
    return (
        <div className="contact bg-dark">
            <Header
                image={"https://i.imgur.com/EUXQxro.jpg"}
                title={"Contact Me"}
                lite={false}
            ></Header>
            <div className="contact-body-form-container">
                <ContactBody></ContactBody>
            </div>
            <div className="contact-body">
                <ContactMe></ContactMe>
            </div>
        </div>
    );
}

export default Contact;
