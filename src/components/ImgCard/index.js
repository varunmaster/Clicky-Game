import React from "react";

function ImgCard(props) {
    return (
        <div className="card">
            <div className="row">
                <div className="col-md-3 img-container">
                    <img alt={props.name} src={props.image} onClick={props.reorder}/>
                </div>
            </div>
        </div>
    );
}

export default ImgCard;
