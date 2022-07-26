import React from 'react'

export default function ProfileSettings() {
    return (
        <>
            <div className="container">
                <div className="profile-title">
                    Profile Settings
                </div>
                <div className="change-avatar-and-delete row">
                    <div className="change-img col-lg-3 col-md-5 col-sm-12">
                        <img className='' src="https://cartzilla.createx.studio/img/nft/vendor/avatar-square.jpg" alt="" />
                    </div>
                    <div className="change-btn-with-delete-btn-and-text col-lg-9 col-md-7 col-sm-12">
                        <div className="change-btn-and-delete-btn row">
                            <div className="change-btn col-lg-6 col-md-12 col-sm-12">
                                <span>Change Avatar</span>

                            </div>
                            <div className="delete-btn col-lg-6 col-md-12 col-sm-12">

                                <span>Delete</span>
                            </div>
                            <div className="below-group-change-text col-sm-12">
                                {` We recommend an image of at least 400x400. Gifs work too :)`}
                            </div>
                        </div>


                    </div>
                </div>
                <div className="middle-input">
                    <div className="top-input">
                        <div className="full-name-and-user-name">
                            <div className="full-name">
                                <div className="full-name-title">
                                    Full Name
                                </div>
                                <input type="text" placeholder='Enter Name' />
                            </div>
                            <div className="user-name">
                                <div className="user-name-title">
                                    User Name
                                </div>
                                <input type="text" placeholder='@enter_name' />
                            </div>
                        </div>
                    </div>
                    <div className="UID-and-email">
                        <div className="UID">
                            <div className="UID-title">
                                UID
                            </div>
                            <input type="text" placeholder='xxxxxxxxx' />
                        </div>
                        <div className="email">
                            <div className="email-title">
                                Email
                            </div>
                            <input type="text" placeholder='example@gmail.com' />
                        </div>
                    </div>
                    <div className="short-bio">
                        <div className="short-bio-title">
                            Short Bio
                        </div>
                        <textarea type="text" placeholder='Tell about yourself in few words' />
                        <div className="short-bio-note">
                            0 of 500 characters used.
                        </div>
                    </div>
                </div>
                <div className="bottom-input">
                    <div className="bottom-input-title">
                        Social media profiles
                    </div>
                    <div className="website-and-twitter">
                        <div className="website">
                            <div className="website-input-title">
                                Website
                            </div>
                            <input type="text" placeholder='Enter URL' />
                        </div>
                        <div className="twitter">
                            <div className="twitter-title">
                                Twitter
                            </div>
                            <input type="text" placeholder='Enter URL' />
                        </div>
                    </div>
                    <div className="facebook-and-instagram">
                        <div className="facebook">
                            <div className="facebook-input-title">
                                Facebook
                            </div>
                            <input type="text" placeholder='Enter URL' />
                        </div>
                        <div className="instagram">
                            <div className="instagram-input-title">
                                Instagram
                            </div>
                            <input type="text" placeholder='Enter URL' />
                        </div>
                    </div>
                </div>
                <div className="btn-update-profile">
                    Update Profile
                </div>
            </div>
        </>
    )
}
