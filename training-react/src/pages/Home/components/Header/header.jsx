import React from 'react'
import StickyNav from '../stickyNav'

export default function Header() {
  return (
    <>
      <header>
        <StickyNav />
        <div className="header-content-container container">
          <div className="row">
            <div className="header-content col-md-6 col-sm-12">
              <div className="header-content-text">
                <h1>Discover rare digital art and collect NFTs</h1>
                <h2>
                  The world's first and largest digital marketplace for crypto
                  collectibles and non-fungible tokens (NFTs).
                </h2>
              </div>
              <div className="header-content-btn">
                <div className="explore-marketplace">Explore Marketplace</div>
                <div className="create-your-nft">Create your NFT</div>
              </div>
            </div>
            <div className="header-content-carousel col-md-6 col-sm-12">
              <img
                src="https://cartzilla.createx.studio/img/nft/home/01.jpg"
                alt=""
              />
              <div className="current-bid-and-countdown-table">
                <div className="current-bid-and-countdown-table-border">
                  <div className="current-bid">
                    <div className="current-bid-title">Current bid:</div>
                    <div className="current-bid-value">4 hours</div>
                  </div>
                  <div className="countdown">
                    <div className="countdown-title">Ends in:</div>
                    <div className="countdown-value">18 hours</div>
                  </div>
                  <div className="start-bid-btn">Start bid</div>
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
      </header>

    </>
  )
}
