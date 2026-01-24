import React from "react";
import "./projectdetails.css";
import projData from "../../static/projects/projects.json";
import linkimg from "../../static/projects/link-01.png";


export default function OthrProjects() {

    const othrData = projData.Others

    return (
        <div className="projectCatIn">
            {othrData.map(othrObj => (
                <div className="projectBox" style={{ backgroundImage: "url(" + othrObj.Pic + ")" }}>
                    <div className="projectInfo">
                        <div className="projectName">{othrObj.Title}</div>
                        <div className="projectExtras">
                            <div className="projectDates">{othrObj.Date}</div>
                            <div className="projectLinks">
                                <a href={othrObj.Link} className="projectLinkhref">
                                    <img src={linkimg} alt="link"></img>
                                </a>
                            </div>
                         </div>
                        <div className="projectDesc">{othrObj.Description}</div>
                    </div>
                </div>
            ))}
        </div>
    )

}
