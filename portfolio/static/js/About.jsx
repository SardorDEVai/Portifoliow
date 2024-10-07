import React from "react";
import { AppWrap, MotionWrap } from "../../wrapper";
import './About.scss';
import { images } from "../../constants";

const About = () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img
                        src={images.me}
                        alt="Me"
                        className="a-img"
                    />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <h3><span>Name: </span> Sardorbek Khamidov</h3>
                <h3><span>Profile: </span> Data Engineer | DevOps Enthusiast </h3>
                <h3><span>Email: </span> khsardorkhan2001@gmail.com </h3>
                <h3><span>Phone: </span> +48 880-580-824 </h3>
                
                <p className="a-desc">
                    I am a passionate Data Engineer with a strong foundation in 
                    artificial intelligence and data science. I am highly skilled 
                    in tools like Docker, Kubernetes, Spark, Hadoop, and NoSQL 
                    databases such as MongoDB and Cassandra. I also have hands-on 
                    experience with Python, Flask, PostgreSQL, and data pipelines. 
                    My goal is to contribute effectively in DevOps and Data 
                    Engineering roles by applying my technical knowledge to solve 
                    real-world problems. Below, you'll find some of my key projects.
                </p>

                <a href="Sardorbek_Khamidov_CV.pdf" download="Sardorbek Khamidov's CV.pdf" className="pulsingButton">
                    Get Resume
                </a>

            </div>
        </div>
    )
}

export default AppWrap(
    MotionWrap(About, 'app__about'),
    'about',
    "app__whitebg"
);
