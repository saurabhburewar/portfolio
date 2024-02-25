import React, { useEffect, useRef, useState } from "react";
import "./home.css";
import ContactForm from '../Contactform/contactform';
import ContactLinks from "../ContactLinks/contactlinks";
import Skills from "../Skills/skills";
import Projects from "../Projects/projects";
import Experience from "../Experience/exp";
import Contacts from "../Contacts/contacts";

export default function Home() {

    return (
        <div className="Home">
            <div className="homeAbout" id="topPage">
                <div className="bcktitle"></div>
                <div className="bckmask"></div>
                <div className="desctitle">
                    <div className="titleIntro">I completed my B.Tech from IIT Jodhpur with a CS major and an AI minor. I am an Engineer who has worked on various stages of data pipeline including ETL, network analysis, ML. I am currently working at Deloitte USI as a Big Data Developer for HCSC. I am also interested in product management, have received PM training and interned as a product manager.</div>
                </div>
                <div className="title">
                    <div className="titleName">Saurabh <br /> Burewar</div>
                    <div className="titleEdu">
                        <div className="titleEdu1"><b>B.Tech</b></div>
                        <div className="titleEdu2">Computer Science, <br /> IIT Jodhpur</div>
                    </div>
                    <div className="titleEdu">
                        <div className="titleExp1"><b>Data Engineer</b></div>
                        <div className="titleExp2">Deloitte</div>
                    </div>
                </div>
            </div>
            <div className="homegap"></div>
            <div className="homeprojects">
                <Experience />
            </div>
            <div className="homegap"></div>
            <div className="homeprojects">
                <Projects />
            </div>
            <div className="homegap"></div>
            <div className="homeskills">
                <Skills />
            </div>
            <div className="homegap"></div>
            <div className="homecontact" id="contactPage">
                {/* <div className="contactForm">
                    <ContactForm />
                </div> */}
                {/* <div className="contactLinks">
                    <ContactLinks />
                </div> */}
                <Contacts />
            </div>
        </div>
    )
}