import React, { useState, useEffect } from "react";
import "./nav.css";
import profileimg from "../../static/Nav/saurabh.jpg";
import { Link } from "react-router-dom";
import githubimg from '../../static/contact/github.svg';
import linkedinimg from '../../static/contact/linkedin.svg';
import mailimg from '../../static/contact/gmail.svg';
import instaimg from '../../static/contact/insta-01.svg';

export default function Nav() {

    const [ open, setOpen ] = useState(false);

    const handleNavClicks = () => {
        if (window.matchMedia("(max-width: 560px)").matches) {
            setOpen(!open);
        }
    }

    const handleNav = () => {
        const top = document.getElementById("topPage")?.getBoundingClientRect().top;

        top < -200 ? setOpen(true) : setOpen(false);
    }

    useEffect(() => {
        if (window.matchMedia("(max-width: 560px)").matches) {
            setOpen(false)
        } else {
            setOpen(true)
        }
    }, [window.matchMedia("(max-width: 560px)").matches])

    return (
        <div className="Nav">
            <div className="myphoto" onClick={() => {setOpen(!open)}}>
                <img src={profileimg}></img>
            </div>
            <div className={`hiddenNav ${open ? "show" : "hide"}`}>
                <div className="Navbuttons">
                    <div className="NavBut" onClick={() => {handleNavClicks()}}>
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <div>Home</div>
                        </Link>
                    </div>
                    {/* <div className="NavBut"><div>Experience</div></div> */}
                    <div className="NavBut" onClick={() => {handleNavClicks()}}>
                        <Link to="/projects" style={{ textDecoration: 'none' }}>
                            <div>Projects</div>
                        </Link>
                    </div>
                    {/* <div className="NavBut"><div>Skills</div></div> */}
                    {/* <div className="NavBut">
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <div>Contact</div>
                        </Link>
                    </div> */}
                    <div className="NavLinks">
                        <a href='mailto:saurabh.skbr@gmail.com' target="_blank" className="NavLinkItem">
                            <div className="NavLinkImg">
                                <img src={mailimg}></img>
                            </div>
                        </a>
                        <a href='https://www.linkedin.com/in/saurabh-burewar-355131185/' target="_blank" className="NavLinkItem">
                            <div className="NavLinkImg">
                                <img src={linkedinimg}></img>
                            </div>
                        </a>
                        <a href='https://github.com/saurabhburewar' target="_blank" className="NavLinkItem">
                            <div className="NavLinkImg">
                                <img src={githubimg}></img>
                            </div>
                        </a>
                        <a href='https://www.instagram.com/qwerty_pencils/' target="_blank" className="NavLinkItem">
                            <div className="NavLinkImg">
                                <img src={instaimg}></img>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}


