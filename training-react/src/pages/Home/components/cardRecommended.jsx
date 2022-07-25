import React from 'react'

export default function CardRecommended() {
    return (
        <>
            <div className="card-recommended-collections">
                <div className="card-recommended-collections-wrapper">
                    <div className="card-header">
                        <img
                            src="https://cartzilla.createx.studio/img/nft/thumbnails/01.png"
                            alt=""
                        />
                        <h3>by</h3>
                        <div className="creator-info">
                            <a href="">@Sharan</a>
                        </div>
                    </div>
                    <div className="card-img">
                        <div className="left-img">
                            <a href="">
                                <img
                                    src="https://cartzilla.createx.studio/img/nft/collections/1-1.jpg"
                                    alt=""
                                />
                            </a>
                        </div>
                        <div className="the-rest-img">
                            <a href="">
                                <img
                                    src="https://cartzilla.createx.studio/img/nft/collections/1-2.jpg"
                                    alt=""
                                />
                            </a>
                            <a href="">
                                <img
                                    className="bottom-img"
                                    src="https://cartzilla.createx.studio/img/nft/collections/1-3.jpg"
                                    alt=""
                                />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="card-recommended-text">
                    <a href="">Contemporary art collage</a>
                </div>
                <div className="card-recommended-value">$ 12180.95</div>
            </div>
        </>

    )
}
