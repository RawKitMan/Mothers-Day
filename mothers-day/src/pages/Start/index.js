import React, { Component } from "react";
import Button from "../../components/Button";

class Start extends Component {
    render() {
        return (
            <div>
                <div className="row" />
                <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-8">
                        <div className="jumbotron text-center mt-5">
                            <p>Happy Mother's Day Rhonda!</p>
                            <Button link={"/p1"} text={"Next"} />
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

export default Start;