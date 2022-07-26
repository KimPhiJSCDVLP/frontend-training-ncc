import React from 'react'
import SideTabs from './SideTabs'

export default function ProfileSettingsPageTitle() {
    return (
        <>
            <div className="page-title profile-pg-title">
                <div className="page-title-container container row">
                    <div className="profile-creator col-md-7 col-sm-12 row">
                        <div className="prf-img">
                        <img src="https://cartzilla.createx.studio/img/nft/vendor/avatar.png" alt="" />
                        </div>
                        <div className="profile-settings-info">
                            <div className="profile-setting-link">
                                @foxnet_creator 
                            </div>
                            <div className="join-date">
                                Joined July 2021
                            </div>
                        </div>
                    </div>
                    <div className="interactive col-md-5 col-sm-12">
                        <div className="followers">
                            <h1 className='bdright'> 766 <p>followers</p></h1>
                        </div>
                        <div className="followings">
                            <h1> 2k <p>followings</p></h1>
                        </div>
                    </div>
                </div>
                <div className="tool-bar-profile container row">
                    <SideTabs/>
                </div>
            </div>

        </>
    )
}
