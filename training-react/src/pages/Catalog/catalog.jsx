import React from 'react'
import HeaderCatalog from './components/HeaderCatalog/headerCatalog'
import ContentCatalog from './components/ContentCatalog/contentCatalog'
import FooterCatalog from './components/FooterCatalog/footerCatalog'

export default function Catalog() {
  return (
    <>
      <HeaderCatalog />
      <ContentCatalog />
      <FooterCatalog />
    </>
  )
}
