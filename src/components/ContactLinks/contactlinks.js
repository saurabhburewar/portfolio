import React from "react";
import "./contactlinks.css";
import githubimg from '../../static/contact/github.svg';
import linkedinimg from '../../static/contact/linkedin.svg';
import mailimg from '../../static/contact/gmail.svg';
import instaimg from '../../static/contact/insta-01.svg';

export default function ContactLinks() {
    return (
        <div className="contactList">
            <a href='mailto:saurabh.skbr@gmail.com' target="_blank" className="contactItem">
                <div className="contactImg">
                    <img src={mailimg}></img>
                </div>
                <div className="contactText mLabel"><p>Email</p> &nbsp; here</div>
            </a>
            <a href='https://www.linkedin.com/in/saurabh-burewar-355131185/' target="_blank" className="contactItem">
                <div className="contactImg">
                    <img src={linkedinimg}></img>
                </div>
                <div className="contactText lnLabel">Or connect on &nbsp; <p>LinkedIn</p></div>
            </a>
            <a href='https://github.com/saurabhburewar' target="_blank" className="contactItem">
                <div className="contactImg">
                    <img src={githubimg}></img>
                </div>
                <div className="contactText ghLabel">See more projects on &nbsp; <p>Github</p></div>
            </a>
            <a href='https://www.instagram.com/qwerty_pencils/' target="_blank" className="contactItem">
                <div className="contactImg">
                    <img src={instaimg}></img>
                </div>
                <div className="contactText iLabel">And more of my &nbsp; <p>hobbies</p> &nbsp; here!</div>
            </a>
        </div>
    )
}