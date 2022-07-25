import React from 'react'
import { Link } from 'react-router-dom'

export default function StickyNav() {
    return (
        <>
            <div className="sticky-navbar">
                <div className="container">
                    <div className="sticky-navbar-container">
                        <div className="left-side-nav">
                            <div className="logo-img">
                                <a href="index.html">
                                    <img className="logo" src="https://cartzilla.createx.studio/img/logo-dark.png" alt="" />
                                </a>
                                <a href="">
                                    <img
                                        className="logoMobile"
                                        src="https://cartzilla.createx.studio/img/logo-icon.png"
                                        alt=""
                                    />
                                </a>
                            </div>
                            <ul className="navbar-menu">
                                <div className="navbar-menu-wrapper">
                                    <Link className="home" to={'/'}><li>Home</li></Link>
                                    <li className="catalog">
                                        Catalog
                                        <div className="catalog-menu-dropdown">
                                            <div className="cat">
                                                <Link to={'/catalog'}>Catalog v1</Link>
                                            </div>
                                            <div className="cat">
                                                <Link to={'/catalog'}>Catalog v1</Link>
                                            </div>
                                            <div className="cat">
                                                <Link to={'/catalog'}>Catalog v1</Link>
                                            </div>
                                            <div className="cat">
                                                <Link to={'/catalog'}>Catalog v1</Link>
                                            </div>
                                            <div className="cat">
                                                <Link to={'/catalog'}>Catalog v1</Link>
                                            </div>
                                            <div className="cat">
                                                <Link to={'/catalog'}>Catalog v1</Link>
                                            </div>
                                            <div className="cat">
                                                <Link to={'/catalog'}>Catalog v1</Link>
                                            </div>
                                            <div className="cat">
                                                <Link to={'/catalog'}>Catalog v1</Link>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="account">
                                        Account
                                        <div className="account-menu-dropdown">
                                            <Link to="/account/profile"><div className="account-menu">Profile Settings</div></Link>
                                            <div className="account-menu">My Items</div>
                                            <div className="account-menu">My Collections</div>
                                            <div className="account-menu">Favorites</div>
                                            <div className="account-menu">Notifications</div>
                                        </div>
                                    </li>
                                    <li className="BTMD">Back to main demo</li>
                                </div>
                            </ul>
                        </div>
                        <div className="the-rest">
                            <div className="search">
                                <i className="fa-solid fa-magnifying-glass" />
                            </div>
                            <div className="account">
                                <i className="fa-solid fa-user" />
                            </div>
                            <div className="toggle-nav">
                                <i className="fa-solid fa-bars" />
                            </div>
                            <div className="btn-connect-wallet">Connect Wallet</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
