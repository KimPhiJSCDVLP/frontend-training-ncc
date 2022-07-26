import React from 'react'

export default function PageTitle() {
    return (
        <>
            <div className="page-title">
                <div className="page-title-container container row">
                    <div className="text col-md-9 col-sm-12">Catalog v.1</div>
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
                        <span id="all-NFTs">All NFTs</span>
                    </div>
                </div>
                <div className="tool-bar container">
                    <div className="tool-bar-top row">
                        <div className="left-dropdown-menu col-md-3 col-sm-5 col-sm-12">
                            <div className="btn-filters">
                                <p>
                                    <span> Filters </span>
                                    <i className="fa-solid fa-caret-down" />
                                </p>
                            </div>
                        </div>
                        <div className="search-bar col-md-6 col-sm-12 col-12">
                            <input type="text" placeholder="Search collection, title or user..." />
                            <i className="fa-solid fa-magnifying-glass" />
                        </div>
                        <div className="right-dropdown-menu col-md-3 col-sm-7 col-sm-12">
                            <p>Sort by:</p>
                            <div className="btn-dropdown">
                                <span>Newest</span>
                                <i className="fa-solid fa-angle-down" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}
