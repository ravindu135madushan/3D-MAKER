import React from 'react'
import { Link } from 'react-router-dom'
import "./Massage.scss"

const Massage = () => {
    return (
        <div className="message">
            <div className="container">
                <span className='breadcrumbs'><Link to="/Massages">MESSAGE</Link>> Tharuka Lakshan</span>
                <div className="messages">
                    <div className="item">
                        <img src="/img/tharukalakshan.jpg" alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisici</p>
                    </div>
                    <div className="item owner">
                        <img src="/img/tharukalakshan.jpg" alt="" />
                        <p>libero qui. Archis quisquam eveniet at soluta, fugiat iste.</p>
                    </div>
                    <div className="item">
                        <img src="/img/tharukalakshan.jpg" alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisici</p>
                    </div>
                    <div className="item owner">
                        <img src="/img/tharukalakshan.jpg" alt="" />
                        <p>Lorem ips andae esse libero qui. Archis quisquam eveniet at soluta, fugiat iste.</p>
                    </div>
                    <div className="item">
                        <img src="/img/tharukalakshan.jpg" alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisici</p>
                    </div>
                    <div className="item owner">
                        <img src="/img/tharukalakshan.jpg" alt="" />
                        <p> esse libero qui. Archis quisquam eveniet at soluta, fugiat iste.</p>
                    </div>
                    <div className="item">
                        <img src="/img/tharukalakshan.jpg" alt="" />
                        <p>Lorem ipsum dolor sitetur adipisici</p>
                    </div>
                    <div className="item owner">
                        <img src="/img/tharukalakshan.jpg" alt="" />
                        <p>Lorandae esse libero qui. Archis quisquam eveniet at soluta, fugiat iste.</p>
                    </div>
                    <div className="item">
                        <img src="/img/tharukalakshan.jpg" alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisici</p>
                    </div>
                    <div className="item owner">
                        <img src="/img/tharukalakshan.jpg" alt="" />
                        <p>Lorem esse libsoluta, fugiat iste.</p>
                    </div>
                    <div className="item">
                        <img src="/img/tharukalakshan.jpg" alt="" />
                        <p>Lorem ipsum dipisici</p>
                    </div>
                    <div className="item owner">
                        <img src="/img/tharukalakshan.jpg" alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur andae esse libero qui. Archis quisquam eveniet at soluta, fugiat iste.</p>
                    </div>
                    <div className="item">
                        <img src="/img/tharukalakshan.jpg" alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisici</p>
                    </div>
                    <div className="item owner">
                        <img src="/img/tharukalakshan.jpg" alt="" />
                        <p>Lor esse libero qui. Archis quisquam eveniet at soluta, fugiat iste.</p>
                    </div>
                    <div className="item">
                        <img src="/img/tharukalakshan.jpg" alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisici</p>
                    </div>
                    <div className="item owner">
                        <img src="/img/tharukalakshan.jpg" alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur andae esse libero qui. Archis quisquam eveniet at soluta, fugiat iste.</p>
                    </div>
                </div>
                <hr />
                <div className="write">
                    <textarea name="" placeholder='write a message' id="" cols="30" rows="10"></textarea>
                <button>Send</button>
                </div>
                
            </div>
        </div>
    )
}

export default Massage