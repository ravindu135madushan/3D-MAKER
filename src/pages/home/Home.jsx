import React from 'react'
import Featured from '../../components/featured/Featured'
import Slide from '../../components/Slide/Slide'
import "./Home.scss"
import { cards } from "../../data"
import CatCard from '../../components/catCard/CatCard'

const Home = () => {
    return (
        <div className="home">
            <Featured />
            <Slide slidesToShow={5} arrowsScroll={5}>
                {cards.map(card => (
                    <CatCard kay={card.id} item={card} />
                ))}
            </Slide>
            <div className="features">
                <div className="container">
                    <div className="item">
                        <h1>If you're wondering what is a 3D slicer,</h1>
                        <div className="title">
                            <img src="src\pages\home\check.png" alt="" />
                            3D Modeling
                        </div>
                        <p>
                            <b> Concept Creation:</b> Design and develop a 3D digital model using CAD software (e.g., Blender, AutoCAD). <br />
                            <b> File Formats:</b> Models are typically saved in STL, OBJ, or 3MF <br />
                        
                        </p>
                        <div className="title">
                            <img src="src\pages\home\check.png" alt="" />
                            Slicing
                        </div>
                        <p>
                            <b> Software Use:</b> Slicing software (e.g., Cura, PrusaSlicer) converts 3D models into instructions (G-code) for the printer. <br />
                            <b> Layer Settings:</b> Set layer height, infill density, print speed, and supports. <br />
                           
                        </p><div className="title">
                            <img src="src\pages\home\check.png" alt="" />
                            3D Printing
                        </div>
                        <p>
                            <b>Printer Setup:</b> Choose the material (e.g., PLA, ABS), load filament, and configure the printer. <br />
                            <b> Printing Process:</b> The printer follows the G-code to build the object layer by layer. <br />
                           
                        </p>
                    </div>
                    <div className="item">
                        <video src="src\pages\home\video.mp4" controls></video>
                    </div>
                </div>
            </div>

            <div className="features dark">
                <div className="container">
                    <div className="item">
                        <h1 >If you're wondering</h1>
                        <h1 >what is a 3D slicer,</h1>
                        <p >Models are typically saved in STL, OBJ, or 3MF</p>
                        <div className="title">
                            <img src="src\pages\home\check.png" alt="" />
                            3D Modeling
                        </div>
                        <div className="title">
                            <img src="src\pages\home\check.png" alt="" />
                            gnefnenernerne
                        </div>
                        <div className="title">
                            <img src="src\pages\home\check.png" alt="" />
                            rgwbevwrbwrbwrb
                        </div>
                        <button>Explore 3D MAKER Business</button>
                    </div>
                    <div className="item">
                        <img src="src\pages\home\weare.png" alt="" />
                    </div>
                </div>
            </div>
            <Slide slidesToShow={5} arrowsScroll={5}>
                {cards.map(card => (
                    <CatCard kay={card.id} item={card} />
                ))}
            </Slide>
        </div>
    );
};

export default Home