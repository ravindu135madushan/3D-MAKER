import React from 'react'
import "./Gig.scss"
import { Slider } from 'infinite-react-carousel'

const Gig = () => {
    return (
        <div className="gig">
            <div className="container">
                <div className="left">
                    <span className="breadCrumbs">3D MAKER > 3D Designing > Creater Profile</span>
                    <h1>I will Create 3D Design For you</h1>

                    <div className="user">
                        <img className='pp' src="/img/profileuser.png" alt="" />
                        <span>Ravindu Madushan</span>
                        <div className="stars">
                            <img src="/img/star.png" alt="" />
                            <img src="/img/star.png" alt="" />
                            <img src="/img/star.png" alt="" />
                            <img src="/img/star.png" alt="" />
                            <img src="/img/star.png" alt="" />
                            <span>5</span>
                        </div>
                    </div>
                    <Slider slidesToShow={1} arrowsScroll={1} className="slider">
                        <img src="/img/3d1.jpg" alt="" />
                        <img src="/img/3d2.jpg" alt="" />
                        <img src="/img/3d3.jpg" alt="" />
                    </Slider>
                    <h2>About This Gig</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quis totam sunt officia voluptate praesentium dolorem reiciendis maxime dolor, modi adipisci! Nesciunt debitis modi rem sint ratione, nobis quasi vel! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea provident ipsam excepturi commodi ducimus reiciendis nam maiores sunt. Possimus cumque autem et magni odit rem saepe non ipsa a perspiciatis. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint quisquam odio voluptatem blanditiis officiis nisi eaque ex reprehenderit saepe officia soluta, neque beatae, numquam impedit quaerat totam nihil ipsam non. Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro voluptates ullam aspernatur est. Suscipit quasi, facilis, atque qui ullam vitae animi ratione non optio ab dolore iure labore autem voluptate!</p>
                    <div className="seller">
                        <h2>About The Seller</h2>
                        <div className="user">
                            <img src="/img/profileuser.png" alt="" />
                            <div className="info">
                                <span>Ravindu Madushan</span>
                                <div className="stars">
                                    <img src="/img/star.png" alt="" />
                                    <img src="/img/star.png" alt="" />
                                    <img src="/img/star.png" alt="" />
                                    <img src="/img/star.png" alt="" />
                                    <img src="/img/star.png" alt="" />
                                    <span>5</span>
                                </div>
                                <button>Contact Me</button>
                            </div>
                        </div>
                        <div className="box">
                            <div className="items">
                                <div className="item">
                                    <span className="title"> From</span>
                                    <span className="desc">Sri Lanka</span>
                                </div>
                                <div className="item">
                                    <span className="title">Member Since</span>
                                    <span className="desc">Oct 2024</span>
                                </div>
                                <div className="item">
                                    <span className="title">Avg. Respose time</span>
                                    <span className="desc">4 hours</span>
                                </div>
                                <div className="item">
                                    <span className="title">Latest delivery</span>
                                    <span className="desc">1 Day</span>
                                </div>
                                <div className="item">
                                    <span className="title">Languages</span>
                                    <span className="desc">Sinhala,English</span>
                                </div>
                            </div>
                            <hr />
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse debitis ea perferendis odio velit laudantium nostrum? Voluptatem, harum labore, quas ut modi esse tenetur corrupti quod soluta, repellendus alias ullam? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut maiores vitae optio harum sint magni dolorum illum eos culpa adipisci omnis, cumque doloremque ratione, dignissimos tempore molestias. At, deserunt sequi.</p>
                        </div>
                    </div>
                    <div className="reviews">
                        <h2>Reviews</h2>
                        <div className="item">
                            <div className="user">
                                <img className='pp' src="/img/tharukalakshan.jpg" alt="" />
                                <div className="info">
                                    <span>Tharuka Lakshan</span>
                                    <div className="country">
                                        <img src="/img/srilanka.png" alt="" />
                                        <span>Sri Lanka</span>
                                    </div>
                                </div>
                            </div>
                            <div className="stars">
                                <img src="/img/star.png" alt="" />
                                <img src="/img/star.png" alt="" />
                                <img src="/img/star.png" alt="" />
                                <img src="/img/star.png" alt="" />
                                <img src="/img/star.png" alt="" />
                                <span>5</span>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni aliquam ad, reiciendis accusantium sunt nemo, minus fugiat itaque dolorem dolor quas nihil qui atque omnis possimus laborum nobis totam facere?</p>
                            <div className="helpful">
                                <span>Helpful?</span>
                                <img src="/img/like.png" alt="" />
                                <span>Yes</span>
                                <img src="/img/dislike.png" alt="" />
                                <span>No</span>
                            </div>
                        </div>
                        <hr />
                        <div className="item">
                            <div className="user">
                                <img className='pp' src="/img/tharukalakshan.jpg" alt="" />
                                <div className="info">
                                    <span>Tharuka Lakshan</span>
                                    <div className="country">
                                        <img src="/img/srilanka.png" alt="" />
                                        <span>Sri Lanka</span>
                                    </div>
                                </div>
                            </div>
                            <div className="stars">
                                <img src="/img/star.png" alt="" />
                                <img src="/img/star.png" alt="" />
                                <img src="/img/star.png" alt="" />
                                <img src="/img/star.png" alt="" />
                                <img src="/img/star.png" alt="" />
                                <span>5</span>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni aliquam ad, reiciendis accusantium sunt nemo, minus fugiat itaque dolorem dolor quas nihil qui atque omnis possimus laborum nobis totam facere?</p>
                            <div className="helpful">
                                <span>Helpful?</span>
                                <img src="/img/like.png" alt="" />
                                <span>Yes</span>
                                <img src="/img/dislike.png" alt="" />
                                <span>No</span>
                            </div>
                        </div>
                        <hr />
                        <div className="item">
                            <div className="user">
                                <img className='pp' src="/img/tharukalakshan.jpg" alt="" />
                                <div className="info">
                                    <span>Tharuka Lakshan</span>
                                    <div className="country">
                                        <img src="/img/srilanka.png" alt="" />
                                        <span>Sri Lanka</span>
                                    </div>
                                </div>
                            </div>
                            <div className="stars">
                                <img src="/img/star.png" alt="" />
                                <img src="/img/star.png" alt="" />
                                <img src="/img/star.png" alt="" />
                                <img src="/img/star.png" alt="" />
                                <img src="/img/star.png" alt="" />
                                <span>5</span>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni aliquam ad, reiciendis accusantium sunt nemo, minus fugiat itaque dolorem dolor quas nihil qui atque omnis possimus laborum nobis totam facere?</p>
                            <div className="helpful">
                                <span>Helpful?</span>
                                <img src="/img/like.png" alt="" />
                                <span>Yes</span>
                                <img src="/img/dislike.png" alt="" />
                                <span>No</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="price">
                        <h3>I will Create 3D Design For you</h3>
                        <h2>$ 49.99</h2>
                    </div>
                    <p>I will create a unique high quality 3D Design based on a description that you give me</p>
                    <div className="details">
                        <div className="item">
                            <img src="/img/clock.png" alt="" />
                            <span>2 days Delivery</span>
                        </div>
                        <div className="item">
                            <img src="/img/rivision.png" alt="" />
                            <span>2 days Delivery</span>
                        </div>
                    </div>
                    <div className="features">
                        <div className="item">
                            <img src="/img/checked.png" alt="" />
                            <span>3d Design</span>
                        </div>
                        <div className="item">
                            <img src="/img/checked.png" alt="" />
                            <span>3d Design</span>
                        </div>
                        <div className="item">
                            <img src="/img/checked.png" alt="" />
                            <span>3d Design</span>
                        </div>
                        <div className="item">
                            <img src="/img/checked.png" alt="" />
                            <span>3d Design</span>
                        </div>
                    </div>
                    <button>Continue</button>
                </div>
            </div>
        </div>
    );
};

export default Gig