import React, { useState } from "react";
import "./exp.css";
import deloitteimg from '../../static/exp/deloitte.jpg';
import finezzaimg from '../../static/exp/finezza.jpg';
import upraisedimg from '../../static/exp/upraised.jpg';
import expData from '../../static/exp/exp.json';

export default function Experience() {

    const data = expData;
    const [comp, setComp] = useState(data.deloitte);

    const RenderDetails = () => {
        return (
            <div dangerouslySetInnerHTML={{__html: comp}}></div>
        )
    }

    return (
        <div className="expSection">
            <div className="expTimelinebox">
                <div className="expLine"></div>
                <div className="expCurrentbox">
                    <div className="expLogos">
                        <img src={deloitteimg} onClick={() => {setComp(data.deloitte)}}></img>
                        <div className={`${comp==data.deloitte ? "expActive" : null}`}></div>
                    </div>
                    <div className="expDates"><b>Data Engineer</b></div>
                    <div className="expDates"><i>2022 - Present</i></div>
                </div>
                <div className="expPastbox1">
                    <div className="expLogos">
                        <img src={finezzaimg} onClick={() => {setComp(data.finezza)}}></img>
                        <div className={`${comp==data.finezza ? "expActive" : null}`}></div>
                    </div>
                    <div className="expDates expPast"><b>Product Manager Intern</b></div>
                    <div className="expDates expPast"><i>May 2021 - Jul 2021</i></div>
                </div>
                <div className="expPastbox2">
                    <div className="expLogos">
                        <img src={upraisedimg} onClick={() => {setComp(data.upraised)}}></img>
                        <div className={`${comp==data.upraised ? "expActive" : null}`}></div>
                    </div>
                    <div className="expDates expPast"><b>Product Manager Trainee</b></div>
                    <div className="expDates expPast"><i>Oct 2020 - Jan 2021</i></div>
                </div>
            </div>
            <div className="expDescbox">
                <div className="expDescboxin">
                    <RenderDetails />
                </div>
            </div>
        </div>
    )
}