import React from 'react'
import Zoom from 'react-img-zoom'

export default function ImgZoom() {
    return (

        <Zoom
            img="https://cartzilla.createx.studio/img/nft/catalog/single.jpg"
            zoomScale={3}
            width={530}
            height={530}
        />
    )
}
