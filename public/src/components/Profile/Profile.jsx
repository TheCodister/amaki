import React from "react";
import "./Profile.css";

function Popupprofile(a){
    return(a.trigger) ? (
        <div className="popup">
            <div className="popup_background"></div>
            <div className="popup_inner">
                <button className="close" onClick={() => a.setTrigger(false)}>X</button>
                <img className="profile_avatar" src="/images/user.jpg" alt="user avatar" />
                <div className="data">
                    <div className="username_profile">
                        <h1>Username:</h1><p>Alexander</p>
                    </div>
                    <div className="email">
                        <h1>Email:</h1><p>alexanderthegreat90@gmail.com</p>
                    </div>
                    <div className="tel">
                        <h1>Tel:</h1><p>09656565656</p>
                    </div>
                    <div className="address">
                        <h1>Address:</h1><p>Baker street, D7, Queensland, Mars</p>
                    </div>
                    <div className="birthday">
                        <h1>Birthday:</h1><p>19/10/20</p>
                    </div>
                </div>
            </div>

        </div>
    ) : "";
}

export default Popupprofile