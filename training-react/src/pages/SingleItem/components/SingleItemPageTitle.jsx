import React from 'react'
import ImgZoom from './imgZoom'
import ReactDOM from "react-dom";
import Countdown from "react-countdown";
import Tabs from 'rc-tabs';

export default function SingleItemPageTitle() {
  return (
    <>
      <div className="page-title">
        <div className="page-title-container container row">
          <div className="text col-md-9 col-sm-12">Single Item - Auction Live</div>
          <div className="breadcrumb col-md-3 col-sm-12">
            <i className="fa-solid fa-house" />
            <span>
              <a href=""> Home </a>
              <i className="fa-solid fa-chevron-right" />
            </span>
            <span>
              NFT <i className="fa-solid fa-chevron-right" />
            </span>
            <span>
              Marketplace <i className="fa-solid fa-chevron-right" />
            </span>
            <span id="all-NFTs">Single Project</span>
          </div>
        </div>
        <div className="tool-bar container row">
          <div className="img-zoom-container col-md-6 col-sm-12">
            <ImgZoom />
            <div className="list-btn-below-img-zoom">
              <div className="btn-heart">
                <i class="fa-solid fa-heart"></i>
              </div>
              <div className="btn-share">
                <i class="fa-solid fa-share-nodes"></i>
              </div>
              <div className="btn-flag">
                <i class="fa-solid fa-font-awesome"></i>
              </div>
            </div>
          </div>
          <div className="item-content col-md-6 col-sm-12">
            <div className="item-title">
              3d aesthetics with shapes
            </div>
            <div className="below-title">
              <p className='bdright'>Minted on Oct 29, 2021</p>
              <p className='bdright'>15 views</p>
              <p>4 favorite</p>
            </div>
            <div className="card-single-item">
              <div className="card-creator">
                <div className="card-creator-title">
                  Creator
                </div>
                <div className="card-creator-footer">
                  <div className="card-creator-img">
                    <img src="https://cartzilla.createx.studio/img/nft/catalog/avatars/01.png" alt="" />
                  </div>
                  <div className="card-creator-link">
                    @foxnet_creator
                  </div>
                </div>

              </div>
              <div className="card-collection">
                <div className="card-collection-title">
                  Collection
                </div>
                <div className="card-collection-footer">
                  <div className="card-collection-img">
                    <img src="https://cartzilla.createx.studio/img/nft/catalog/avatars/13.png" alt="" />
                  </div>
                  <div className="card-collection-link">
                    Cartzilla art collage
                  </div>
                </div>

              </div>
            </div>
            <div className="text-content-single-item">
              Hendrerit interdum sit massa lobortis. Habitant faucibus lorem dui mauris. Pellentesque nunc, tortor quam consequat odio. Sed faucibus id rhoncus, scelerisque tristique ultricies nam.
            </div>
            <div className="below-text-content">
              <div className="current-bid-collection">
                <div className="current-bid-collection-title">
                  Current bid
                </div>
                <div className="current-bid-collection-value">
                  <h1>2.80 EHT</h1>
                  <h4>(≈ $ 795.48)</h4>
                </div>
              </div>
              <div className="countdown">
                <div className="countdown-title">Auction ends in</div>
                <Countdown date={Date.now() + 10000000000} />
              </div>

            </div>
            <div className="btn-place-a-bid">
              Place a bid
            </div>
            <Tabs />
          </div>

        </div>
      </div>

    </>
  )
}
