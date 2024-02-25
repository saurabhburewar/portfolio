import React from "react";
import "./projectdetails.css";
import projData from "../../static/projects/projects.json";
import linkimg from "../../static/projects/link-01.png";


export default function WebProjects() {

    const webData = projData.Web

    return (
        <div className="projectCatIn">
            {webData.map(webObj => (
                <div className="projectBox" style={{ backgroundImage: "url(" + webObj.Pic + ")" }}>
                    <div className="projectInfo">
                        <div className="projectName">{webObj.Title}</div>
                        <div className="projectExtras">
                            <div className="projectDates">{webObj.Date}</div>
                            <div className="projectLinks">
                                <a href={webObj.Link} className="projectLinkhref">
                                    <img src={linkimg}></img>
                                </a>
                            </div>
                         </div>
                        <div className="projectDesc">{webObj.Description}</div>
                    </div>
                </div>
            ))}
        </div>
    )
}