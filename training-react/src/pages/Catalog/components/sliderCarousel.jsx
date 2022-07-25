import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

export default class ResponsiveCarousel extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <div className="sliderCarouselWrapper">
                <Slider {...settings}>
                    <div>
                        <div className="card">
                            <Link to="/Single-item">
                                <div className="card-img">
                                    <img
                                        src="https://cartzilla.createx.studio/img/nft/catalog/12.jpg"
                                        alt=""
                                    />
                                    <div className="add-to-favorite">
                                        <i className="fa-solid fa-heart" />
                                    </div>
                                </div>
                                <div className="card-title">Astronaut surrounded by lights</div>



                                <h5>Reserve price:</h5>
                                <div className="value">0.1 EHT (≈ $ 400.19)</div>
                                <div className="user">
                                    <div className="user-img">
                                        <img src="https://cartzilla.createx.studio/img/nft/catalog/avatars/12.png" alt="" />
                                    </div>
                                    <div className="user-contact">@Sharan_Pagadala</div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <div className="card">
                            <Link to="/Single-item">
                                <div className="card-img">
                                    <img
                                        src="https://cartzilla.createx.studio/img/nft/catalog/12.jpg"
                                        alt=""
                                    />
                                    <div className="add-to-favorite">
                                        <i className="fa-solid fa-heart" />
                                    </div>
                                </div>
                                <div className="card-title">Astronaut surrounded by lights</div>



                                <h5>Reserve price:</h5>
                                <div className="value">0.1 EHT (≈ $ 400.19)</div>
                                <div className="user">
                                    <div className="user-img">
                                        <img src="https://cartzilla.createx.studio/img/nft/catalog/avatars/12.png" alt="" />
                                    </div>
                                    <div className="user-contact">@Sharan_Pagadala</div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <div className="card">
                            <Link to="/Single-item">
                                <div className="card-img">
                                    <img
                                        src="https://cartzilla.createx.studio/img/nft/catalog/12.jpg"
                                        alt=""
                                    />
                                    <div className="add-to-favorite">
                                        <i className="fa-solid fa-heart" />
                                    </div>
                                </div>
                                <div className="card-title">Astronaut surrounded by lights</div>



                                <h5>Reserve price:</h5>
                                <div className="value">0.1 EHT (≈ $ 400.19)</div>
                                <div className="user">
                                    <div className="user-img">
                                        <img src="https://cartzilla.createx.studio/img/nft/catalog/avatars/12.png" alt="" />
                                    </div>
                                    <div className="user-contact">@Sharan_Pagadala</div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <div className="card">
                        <Link to="/Single-item">
                                <div className="card-img">
                                    <img
                                        src="https://cartzilla.createx.studio/img/nft/catalog/12.jpg"
                                        alt=""
                                    />
                                    <div className="add-to-favorite">
                                        <i className="fa-solid fa-heart" />
                                    </div>
                                </div>
                                <div className="card-title">Astronaut surrounded by lights</div>



                                <h5>Reserve price:</h5>
                                <div className="value">0.1 EHT (≈ $ 400.19)</div>
                                <div className="user">
                                    <div className="user-img">
                                        <img src="https://cartzilla.createx.studio/img/nft/catalog/avatars/12.png" alt="" />
                                    </div>
                                    <div className="user-contact">@Sharan_Pagadala</div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </Slider>
            </div>
        );
    }
}