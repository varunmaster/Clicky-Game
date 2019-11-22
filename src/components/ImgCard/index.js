import React from "react";
import "./style.css";

function ImgCard(props) {
    return (
        <div className="col-md-3">
            <img alt={props.name} src={props.image} onClick={props.reorder} />
        </div>
    );
}

export default ImgCard;
