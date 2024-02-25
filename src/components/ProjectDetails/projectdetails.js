import React, { useState } from "react";
import "./projectdetails.css";
import MLProjects from "./mlprojects";
import WebProjects from "./webprojects";
import OthrProjects from "./othrprojects";


export default function ProjectDetails() {

    const [cuurentCat, setCurrentCat] = useState("ML");

    const RenderProjects = () => {
        if (cuurentCat == "ML") {
            return <MLProjects />
        } else if (cuurentCat=="Web") {
            return <WebProjects />
        } else if (cuurentCat=="Othr") {
            return <OthrProjects />
        }
    }

    return (
        <div className="projectPage">
            <div className="projectNav">
                <div className="projectNavItem"></div>
                <div className={`projectNavItem ${cuurentCat=="ML" ? "projectActive" : null}`} onClick={() => {setCurrentCat("ML")}}>ML</div>
                <div className={`projectNavItem ${cuurentCat=="Web" ? "projectActive" : null}`} onClick={() => {setCurrentCat("Web")}}>Web</div>
                <div className={`projectNavItem ${cuurentCat=="Othr" ? "projectActive" : null}`} onClick={() => {setCurrentCat("Othr")}}>Others</div>
            </div>
            <div className="projectCategory">
                <RenderProjects />
            </div>
            {/* <div className="projectBox">
                <div className="projectInfo"></div>
            </div>
            <div className="projectBox">
                <div className="projectInfo"></div>
            </div> */}
        </div>
    )
}