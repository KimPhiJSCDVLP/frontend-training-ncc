import React from 'react'
import { Link } from "react-router-dom";

export default function Card() {
    return (
        <>
            <div className="card">
                <Link to="/Single-item">
                    <div className="card-img">
                        <img
                            src="https://cartzilla.createx.studio/img/nft/catalog/12.jpg"
                            alt=""
                        />
                        <div className="add-to-favorite">
                            <i className="fa-solid fa-heart" />
                        </div>
                    </div>
                    <div className="card-title">Astronaut surrounded by lights</div>



                    <h5>Reserve price:</h5>
                    <div className="value">0.1 EHT (≈ $ 400.19)</div>
                    <div className="user">
                        <div className="user-img">
                            <img src="https://cartzilla.createx.studio/img/nft/catalog/avatars/12.png" alt="" />
                        </div>
                        <div className="user-contact">@Sharan_Pagadala</div>
                    </div>
                </Link>
            </div>
        </>
    )
}
