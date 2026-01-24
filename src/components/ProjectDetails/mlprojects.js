import React from "react";
import "./projectdetails.css";
import projData from "../../static/projects/projects.json";
import linkimg from "../../static/projects/link-01.png";

export default function MLProjects() {

    const mlData = projData.Ml

    return (
        <div className="projectCatIn">
            {mlData.map(mlObj => (
                <div className="projectBox" style={{ backgroundImage: "url(" + mlObj.Pic + ")" }}>
                    <div className="projectInfo">
                        <div className="projectName">{mlObj.Title}</div>
                        <div className="projectExtras">
                            <div className="projectDates">{mlObj.Date}</div>
                            <div className="projectLinks">
                                <a href={mlObj.Link} className="projectLinkhref">
                                    <img src={linkimg} alt="link"></img>
                                </a>
                            </div>
                        </div>
                        <div className="projectDesc">{mlObj.Description}</div>
                    </div>
                </div>
            ))}
        </div>
    )

}
