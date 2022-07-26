import React from 'react'

export default function CarouselCard() {
    return (
        <div className="bottom-carousel-card">
            <a href="">
                <img
                    src="https://cartzilla.createx.studio/img/nft/blog/01.jpg"
                    alt=""
                />
            </a>
            <div className="blog-entry-meta-link-and-date">
                <div className="blog-entry-meta-link">
                    <a href="">by Wade Warren</a>
                </div>
                <div className="date">
                    <a href="">Aug 15</a>
                </div>
            </div>
            <div className="blog-entry-title">
                <a href="">
                    The complete guide to NFTs art for creators and investors
                </a>
            </div>
        </div>
    )
}
