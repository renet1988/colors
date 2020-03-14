import React from 'react'
import './color.css'

function Color(props) {
    let cardStyle = "card aling-middle bg-";
    switch (props.color) {
        case 'Red':
            cardStyle = cardStyle + 'danger';
            break;
        case 'Green':
            cardStyle = cardStyle + 'success';
            break;
        case 'Yellow':
            cardStyle = cardStyle + 'warning';
            break;
        case 'Blue':
            cardStyle = cardStyle + 'primary';
            break;
        default:
            cardStyle = cardStyle + 'dark';
            break;
    }
    return (
        <div className={cardStyle} id="cuadrant">
            <div class="card-body align-self-center">
                <h1 className="text-white">
                    {props.color}
                </h1>
            </div>
        </div>
    )
}

export default Color;
