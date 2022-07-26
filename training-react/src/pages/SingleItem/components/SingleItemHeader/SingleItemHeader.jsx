import React from 'react'
import Slider from 'react-slick'
import BtnViewMore from '../btnViewMore'
import SingleItemPageTitle from '../SingleItemPageTitle'
import StickyNav from '../singleItemStickyNav'
import ResponsiveCarousel from '../singleItemSliderCarousel'
import FeaturesCard from '../../../Home/components/featuresCard'

export default function SingleItemHeader() {
  return (
    <>
      <div>
        <StickyNav />
        <SingleItemPageTitle />
      </div>

      <div className="collection-like-this container">
        <div className="header-collection">
          <div className="header-collection-title">
            More form this collection
          </div>
          <div className="btn-view-more-collection">
            <BtnViewMore />
          </div>
        </div>
        <ResponsiveCarousel />
      </div>
      <div className="feature-content-single-item">
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

    </>
  )
}
