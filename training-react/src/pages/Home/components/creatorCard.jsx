import React from 'react'

export default function CreatorCard() {
    return (
        <>
            <div className="creator-card">
                <div className="left-card">
                    <span className="text">1.</span>
                    <img
                        src="https://cartzilla.createx.studio/img/nft/home/creators/01.png"
                        alt=""
                    />
                    <div className="creators-info">
                        <div className="contact">@freeross</div>
                        <div className="followers">569 followers</div>
                    </div>
                </div>
                <div className="btn-follow">Follow</div>
            </div>
        </>
    )
}
