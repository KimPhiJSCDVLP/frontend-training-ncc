import React from 'react'
import FeaturesCard from '../../SingleItem/components/FeatureCard'

export default function CarouselFeature() {
  return (
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
  )
}
