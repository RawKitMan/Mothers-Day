import React from "react";

function Button(props) {

    return (
        <div className="text-center">
            <a href={props.link}><button type="button" className="btn btn-primary">{props.text}</button></a>
        </div>
    )
}
export default Button;