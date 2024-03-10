import React from "react";
import "./skills.css";

import pythonImg from '../../static/skills/python-01.png';
import cImg from '../../static/skills/C.png';
import cppImg from '../../static/skills/Cpp.png';
import jsImg from '../../static/skills/js-01.png';
import javaImg from '../../static/skills/java-01.png';
import scalaImg from '../../static/skills/scala.svg';
import tfImg from '../../static/skills/tf-01.png';
import ptImg from '../../static/skills/pytorch-01.png';
import scikitImg from '../../static/skills/scikit-01.png';
import hadoopImg from '../../static/skills/hadoop-01.png';
import hiveImg from '../../static/skills/hive-01.png';
import sparkImg from '../../static/skills/spark.png';
import sqoopImg from '../../static/skills/sqoop.png';
import phoenixImg from '../../static/skills/phoenix-01.png';
import htmlImg from '../../static/skills/html.svg';
import cssImg from '../../static/skills/CSS.png';
import reactImg from '../../static/skills/React.png';
import nodeImg from '../../static/skills/node.png';
import controlImg from '../../static/skills/control.png';
import zenaImg from '../../static/skills/zena-01.png';
import sketchImg from '../../static/skills/sketch.png';
import psImg from '../../static/skills/ps.png';
import aiImg from '../../static/skills/ai.png';

export default function Skills() {
    return (
        <div className="skillsPage">
            <div className="skilltitle unselectable">SKILLS</div>
            <div className="mlSection">
                <div className="mlHead">AI & Data</div>
                <div className="mlgap"></div>
                <div className="mlList">
                    <div className="mlItem">
                        <div className="mlItemPic">
                            <img src={tfImg}></img>
                        </div>
                        <div className="mlItemName">TensorFlow</div>
                    </div>
                    <div className="mlItem">
                        <div className="mlItemPic">
                            <img src={ptImg}></img>
                        </div>
                        <div className="mlItemName">PyTorch</div>
                    </div>
                    <div className="mlItem">
                        <div className="mlItemPic">
                            <img src={scikitImg}></img>
                        </div>
                        <div className="mlItemName">Scikit</div>
                    </div>
                    <div className="mlItem"></div>
                    <div className="mlItem"></div>
                    <div className="mlItem">
                        <div className="mlItemPic">
                            <img src={hadoopImg}></img>
                        </div>
                        <div className="mlItemName">Hadoop</div>
                    </div>
                    <div className="mlItem">
                        <div className="mlItemPic">
                            <img src={hiveImg}></img>
                        </div>
                        <div className="mlItemName">Hive</div>
                    </div>
                    <div className="mlItem">
                        <div className="mlItemPic">
                            <img src={sparkImg}></img>
                        </div>
                        <div className="mlItemName">Spark</div>
                    </div>
                    <div className="mlItem">
                        <div className="mlItemPic">
                            <img src={sqoopImg}></img>
                        </div>
                        <div className="mlItemName">Sqoop</div>
                    </div>
                    <div className="mlItem">
                        <div className="mlItemPic">
                            <img src={phoenixImg}></img>
                        </div>
                        <div className="mlItemName">Phoenix</div>
                    </div>
                </div>
            </div>
            <div className="webSection">
                <div className="mlHead">Web Development</div>
                <div className="mlgap"></div>
                <div className="mlList">
                    <div className="webItem">
                        <div className="mlItemPic">
                            <img src={htmlImg}></img>
                        </div>
                        <div className="mlItemName">HTML</div>
                    </div>
                    <div className="webItem">
                        <div className="mlItemPic">
                            <img src={cssImg}></img>
                        </div>
                        <div className="mlItemName">CSS</div>
                    </div>
                    <div className="webItem">
                        <div className="mlItemPic">
                            <img src={reactImg}></img>
                        </div>
                        <div className="mlItemName">React</div>
                    </div>
                    <div className="webItem">
                        <div className="mlItemPic">
                            <img src={nodeImg}></img>
                        </div>
                        <div className="mlItemName">Nodejs</div>
                    </div>
                </div>
            </div>
            <div className="otherSection">
                <div className="mlHead">Others</div>
                <div className="mlgap"></div>
                <div className="mlList">
                    <div className="otherItem">
                        <div className="mlItemPic">
                            <img src={controlImg}></img>
                        </div>
                        <div className="mlItemName">Control-M</div>
                    </div>
                    <div className="otherItem">
                        <div className="mlItemPic">
                            <img src={zenaImg}></img>
                        </div>
                        <div className="mlItemName">ASG-Zena</div>
                    </div>
                    <div className="otherItem">
                        <div className="mlItemPic">
                            <img src={sketchImg}></img>
                        </div>
                        <div className="mlItemName">Sketch</div>
                    </div>
                    <div className="otherItem">
                        <div className="mlItemPic">
                            <img src={psImg}></img>
                        </div>
                        <div className="mlItemName">Photoshop</div>
                    </div>
                    <div className="otherItem">
                        <div className="mlItemPic">
                            <img src={aiImg}></img>
                        </div>
                        <div className="mlItemName">Illustrator</div>
                    </div>
                </div>
            </div>
            <div className="lanSection">
                <div className="lanHead">Languages</div>
                <div className="lanList">
                    <div className="lanItem">
                        <div className="lanItemPic">
                            <img src={pythonImg}></img>
                        </div>
                        <div className="lanItemName">Python</div>
                    </div>
                    <div className="lanItem">
                        <div className="lanItemPic">
                            <img src={cImg}></img>
                        </div>
                        <div className="lanItemName">C</div>
                    </div>
                    <div className="lanItem">
                        <div className="lanItemPic">
                            <img src={cppImg}></img>
                        </div>
                        <div className="lanItemName">C++</div>
                    </div>
                    <div className="lanItem">
                        <div className="lanItemPic">
                            <img src={jsImg}></img>
                        </div>
                        <div className="lanItemName">JavaScript</div>
                    </div>
                    <div className="lanItem">
                        <div className="lanItemPic">
                            <img src={javaImg}></img>
                        </div>
                        <div className="lanItemName">Java</div>
                    </div>
                    <div className="lanItem">
                        <div className="lanItemPic">
                            <img src={scalaImg}></img>
                        </div>
                        <div className="lanItemName">Scala</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
