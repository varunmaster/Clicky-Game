import React from "react";
import "./style.css";

function ImgCard(props) {
    const { id, name, image } = props
    return (
        <div className="col-md-3">
            <img alt={name} src={image} id={id} onClick={() => props.handleImgClick(id)}/>
        </div>
    );
}

export default ImgCard;
