import React, { useState } from "react";
import "./contactform.css";

export default function ContactForm() {

    const [email, setEmail] = useState("");
    const [contactname, setContactname] = useState("");
    const [message, setMessage] = useState("");

    return (
        <div className="formMain">
            <div className="formtitle">Drop a message!</div>
            <div className="formcontent">
                <div className="formEmail">
                    <input className="mailInput" type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"></input>
                </div>
                <div className="formName">
                    <input className="mailInput" type="text" value={contactname} onChange={(e) => setContactname(e.target.value)} placeholder="Name"></input>
                </div>
                <div className="formBody">
                    <textarea className="mailBody" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message..."></textarea>
                </div>
            </div>
        </div>
    )
}