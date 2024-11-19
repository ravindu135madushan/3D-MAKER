import React from 'react'
import "./Featured.scss"

const Featured = () => {
    return (
        <div className="featured">
            <div className="container">
                <div className="left">
                    <h1>Advanced modeling and <i>slicing</i> for 3D printing</h1>
                    <div className="search">
                        <div className="searchInput">
                            <img src="./img/search.png" alt="" className='abc'/>
                            <input type="text" placeholder='Try "building 3D design"' />
                        </div>
                        <button>Search</button>
                    </div>
                    <div className="popular">
                        <span>Popular:</span>
                        <button>3D Design</button>
                        <button>3D Modeling</button>
                        <button>3D Printer</button>
                    </div>
                </div>
                <div className="right">
                    <img src="./img/321.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Featured