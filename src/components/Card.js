import React from 'react';

export default function Card(props) {
    let cardBadgeText;
    if (props.openSpots === 0) {
        cardBadgeText = "SOLD OUT";
    }
    else if (props.location === "Online") {
        cardBadgeText = "ONLINE";
    }

    return (
        <div className='card'>
            {cardBadgeText && <div className="card--badge">{cardBadgeText}</div>}
            <img src={require(`../images/${props.img}`)} className="card--image" />
            <div className="card--stats">
                <img src={require("../images/star.png")} className="card--star" />
                <span>&nbsp; {props.rating}</span>
                <span className="gray">({props.reviewCount}) &bull; &nbsp;</span>
                <span className="gray">{props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price"><span className="bold"> From ${props.price} </span> / person</p>
        </div>
    )
}
