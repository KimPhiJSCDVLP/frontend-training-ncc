import React from 'react'

export default function Footer() {
  return (
    <div className="footer">
      <div className="mail-subscription container">
        <p className="mail-subscription-title">Never miss a drop!</p>
        <p className="mail-subscription-text">
          Subscribe to our ultra-exclusive drop list and be the first to know about
          upcoming drops.
        </p>
        <div className="input-mail-bar">
          <i className="fa-solid fa-envelope" />
          <input type="text" placeholder="Your email" />
          <div className="subscribe-btn">Subscribe*</div>
        </div>
        <div className="note">
          *Receive early discount offers, updates and new products info.
        </div>
      </div>
      <div className="footer-content ">
        <div className="footer-content-column container">
          <div className="row">
            <div className="stay-informed col-lg-4 col-sm-12">
              <h2>Stay informed</h2>
              <div className="input-mail-bar-content-footer">
                <i className="fa-solid fa-envelope" />
                <input type="text" placeholder="Your email" />
                <div className="subscribe-btn">Subscribe*</div>
              </div>
              <div className="note">
                *Subscribe to our newsletter to receive early discount offers,
                updates and new products info.
              </div>
              <ul className="list-icon">
                <li className="twitter-icon">
                  <i className="fa-brands fa-twitter" />
                </li>
                <li className="facebook-icon">
                  <i className="fa-brands fa-facebook-f" />
                </li>
                <li className="instagram-icon">
                  <i className="fa-brands fa-instagram" />
                </li>
                <li className="pinterest-icon">
                  <i className="fa-brands fa-pinterest-p" />
                </li>
                <li className="youtube-icon">
                  <i className="fa-brands fa-youtube" />
                </li>
              </ul>
            </div>
            <div className="group-list col-md-8 col-12">
              <ul className="company">
                <div>Company</div>
                <li>
                  <a href="">About Us</a>
                </li>
                <li>
                  <a href="">How It Works</a>
                </li>
                <li>
                  <a href="">Create an NFTs With Us</a>
                </li>
                <li>
                  <a href="">Support</a>
                </li>
                <li>
                  <a href="">Blog</a>
                </li>
                <li>
                  <a href="">My Account</a>
                </li>
              </ul>
              <ul className="market-place .mg-right">
                <div>Market-place</div>
                <li>
                  <a href="">All NFTs</a>
                </li>
                <li>
                  <a href="">New</a>
                </li>
                <li>
                  <a href="">Art</a>
                </li>
                <li>
                  <a href="">Music</a>
                </li>
                <li>
                  <a href="">Photography</a>
                </li>
                <li>
                  <a href="">Utility</a>
                </li>
              </ul>
              <ul className="help">
                <div>Help</div>
                <li>
                  <a href="">Terms and Conditions</a>
                </li>
                <li>
                  <a href="">Privacy Policy</a>
                </li>
                <li>
                  <a href="">FAQ</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="end-footer-container">
        <div className="end-footer container">
          <div className="text">
            © All rights reserved. Made by <a href="">Createx Studio</a>
          </div>
          <div className="link-download">
            <a href="">
              <img
                src="http://pluspng.com/img-png/get-it-on-google-play-png-download-app-1251.png"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </div>

  )
}
