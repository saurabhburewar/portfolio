import React from "react";
import "./projects.css";
import { Link } from "react-router-dom";
import projData from "../../static/projects/projects.json";

export default function Projects() {

    const favData1 = projData.Favourites[0]
    const favData2 = projData.Favourites[1]
    const favData3 = projData.Favourites[2]
    const favData4 = projData.Favourites[3]

    return (
        <div className="projectsSection">
            <div className="projectWindow1">
                <div className="projectCard2">
                    <a href={favData2.Link} className="projectHomeInfo">
                        <div className="projectHomeTitle">{favData2.Title}</div>
                        <div className="projectHomeDesc">{favData2.Description}</div>
                    </a>
                    <img src={favData2.Gif} alt="gif"></img>
                </div>
                <div className="projectCard1">
                    <a href={favData4.Link} className="projectHomeInfo">
                        <div className="projectHomeTitle">{favData4.Title}</div>
                        <div className="projectHomeDesc">{favData4.Description}</div>
                    </a>
                    <img src={favData4.Gif} alt="gif"></img>
                </div>
            </div>
            <div className="projectWindow2">
                <div className="projectCard4">
                    <a href={favData1.Link} className="projectHomeInfo">
                        <div className="projectHomeTitle">{favData1.Title}</div>
                        <div className="projectHomeDesc">{favData1.Description}</div>
                    </a>
                    <img src={favData1.Gif} alt="gif"></img>
                </div>
                <div className="projectCard3">
                    <a href={favData3.Link} className="projectHomeInfo">
                        <div className="projectHomeTitle">{favData3.Title}</div>
                        <div className="projectHomeDesc">{favData3.Description}</div>
                    </a>
                    <img src={favData3.Gif} alt="gif"></img>
                </div>
            </div>
            <div className="projectTitle">
                <div className="projectTitle1">Highlights</div>
                <Link to="/projects" style={{ textDecoration: 'none' }}><div className="projectLink">More Projects</div></Link>
            </div>
        </div>
    )
}

