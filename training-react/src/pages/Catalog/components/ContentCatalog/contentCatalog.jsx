import React from 'react'
import BtnControl from '../btnControl'
import ResponsiveCarousel from '../sliderCarousel'
import CarouselFeature from '../carouselFeature'

export default function contentCatalog() {
  return (
    <>
      <div className="container">
        <ResponsiveCarousel/>
        <ResponsiveCarousel/>
        <ResponsiveCarousel/>
        <ResponsiveCarousel/>
        <ResponsiveCarousel/>
        <ResponsiveCarousel/>
        <ResponsiveCarousel/>
        <ResponsiveCarousel/>
        <BtnControl/>
 
      </div>
      <CarouselFeature/>

    </>
  )
}

