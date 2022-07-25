import React from 'react'
import Card from '../card'
import CreatorCard from '../creatorCard'
// import CardRecommended from '../cardRecommended'
import FeaturesCard from '../featuresCard'
import CarouselCard from '../carouselCard'
import BtnSeeMore from '../btnSeeMore'
import BtnAllArticle from '../btnAllArticle'
import BtnBrowse from '../btnBrowse'
import CardRecommended from '../cardRecommended'

export default function Content() {


    // const dropdownAllCategories = () => {
    //     const dropdownBtn = document.querySelector('#all-categories')
    //     const groupCategories = document.querySelector('#group-categories')
    //     dropdownBtn.addEventListener('click', () => {
    //         groupCategories.classList.toggle('active')
    //     })
    // }
    return (
        <>
            <div className="top-content container">
                <div className="top-content-container">
                    <div className="content-title">
                        <h1>Recent Drops</h1>
                        <div className="bottom-carousel-btn">
                            <a href="">
                                All articles <i className="fa-solid fa-angle-right" />
                            </a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                            <Card />
                        </div>
                        <div className="third-dp-none col-lg-3 col-md-4 col-sm-6 col-12">
                            <Card />
                        </div>
                        <div className="second-dp-none col-lg-3 col-md-4 col-sm-6 col-12">
                            <Card />
                        </div>
                        <div className="first-dp-none col-lg-3 col-md-4 col-sm-6 col-12">
                            <Card />
                        </div>
                    </div>


                </div>
            </div>
            <div className="below-top-content">
                <div className="below-top-content-container container">
                    <div className="content-title">
                        <h1>
                            Trending in{" "}
                            <span id="all-categories">
                                All categories <i className="fa-solid fa-caret-down" />
                                <ul id="group-categories">
                                    <li>All categories</li>
                                    <li>Premium</li>
                                    <li>Art</li>
                                    <li>Photography</li>
                                    <li>Music</li>
                                    <li>Gaming</li>
                                    <li>Sports</li>
                                    <li>Collections</li>
                                    <li>Utility</li>
                                </ul>
                            </span>
                        </h1>
                    </div>
                    <div className="card-wrapper row">
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                            <Card />
                        </div>
                        <div className="third-dp-none col-lg-3 col-md-4 col-sm-6 col-12">
                            <Card />
                        </div>
                        <div className="second-dp-none col-lg-3 col-md-4 col-sm-6 col-12">
                            <Card />
                        </div>
                        <div className="first-dp-none col-lg-3 col-md-4 col-sm-6 col-12">
                            <Card />
                        </div>
                    </div>
                    <BtnBrowse />
                </div>
            </div>
            <div className="middle-content">
                <div className="top-creators container-sm">
                    <div className="top-creators-title">Top Creators</div>
                    <div className="top-creators-content">
                        <div className="card-row row">
                            <div className="card-column col-md-4 col-sm-6 col-12">
                                <CreatorCard />
                                <CreatorCard />
                                <CreatorCard />
                            </div>
                            <div className="card-column second-dsp-none col-md-4 col-sm-6 col-12">
                                <CreatorCard />
                                <CreatorCard />
                                <CreatorCard />
                            </div>
                            <div className="card-column first-dsp-none col-md-4 col-sm-6 col-12">
                                <CreatorCard />
                                <CreatorCard />
                                <CreatorCard />
                            </div>

                        </div>
                    </div>
                </div>
                <div className="recommended-collections container">
                    <div className="recommended-collections-header">
                        <div className="recommended-collections-title">
                            Recommended Collections
                        </div>
                        <BtnSeeMore />
                    </div>
                    <div className="card-recommended-collections-container row">
                        <div className="col-md-4 col-sm-6 col-12">
                            <CardRecommended/>
                        </div>
                        <div className="second-dsp-none col-md-4 col-sm-6 col-12">
                            <CardRecommended/>
                        </div>
                        <div className="first-dsp-none col-md-4 col-sm-6 col-12">
                            <CardRecommended/>
                        </div>


                    </div>
                </div>
            </div>
            <div className="bottom-content">
                <div className="bottom-content-container container">
                    <div className="bottom-banner row">
                        <div className="text col-md-5 col-sm-12">
                            <h3>
                                <span>Best App</span> for NFT Enthusiasts
                            </h3>
                            <p>
                                If you're an NFT enthusiast, or are looking to get more familiar
                                with NFTs, consider downloading our NFT App!
                            </p>
                            <div className="btn-market">
                                <div className="btn-market-wrapper">
                                    <img src="http://pluspng.com/img-png/get-it-on-google-play-png-download-app-1251.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="qr-code-img col-md-5 col-sm-12">
                            <img src="https://cartzilla.createx.studio/img/nft/mobile-app.svg" alt="" />
                        </div>
                    </div>
                    <div className="features container">
                        <div className="features-title">Begin your NFT journey with us!</div>
                        <div className="features-wrapper row">
                            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                <FeaturesCard />
                            </div>
                            <div className="third-dp-none col-lg-3 col-md-4 col-sm-6 col-12">
                                <FeaturesCard />
                            </div>
                            <div className="second-dp-none col-lg-3 col-md-4 col-sm-6 col-12">
                                <FeaturesCard />
                            </div>
                            <div className="first-dp-none col-lg-3 col-md-4 col-sm-6 col-12">
                                <FeaturesCard />
                            </div>

                        </div>
                    </div>
                </div>
                <div className="bottom-carousel">
                    <div className="bottom-carousel-container">
                        <div className="bottom-carousel-wrapper container">
                            <div className="bottom-carousel-header">
                                <div className="bottom-carousel-title">
                                    Resources for getting started
                                </div>
                                <BtnAllArticle />
                            </div>
                            <div className="bottom-carousel-content">
                                <div className="bottom-carousel-content-container row">
                                    <div className="col-md-4 col-sm-6 col-12">
                                        <CarouselCard />
                                    </div>
                                    <div className="second-dsp-none col-md-4 col-sm-6 col-12">
                                        <CarouselCard />
                                    </div>
                                    <div className="first-dsp-none col-md-4 col-sm-6 col-12">
                                        <CarouselCard />
                                    </div>

                                </div>
                                <div className="tns-nav">
                                    <div className="dot" />
                                    <div className="dot" />
                                    <div className="dot" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
