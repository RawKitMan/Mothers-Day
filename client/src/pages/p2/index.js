import React, { Component } from "react";
import Button from "../../components/Button";

class p2 extends Component {
    render() {
        return (
            <div className="jumbotron text-center mt-5">
                <p>Between us we have four amazing children who have grown well beyond anyone's expectations. It is because of you. You made the effort. You took the time to be there for them. You go to their school meetings, their birthdays, their events, everything. You strive to be the best for them.</p>
                <Button link={"/p3"} text={"Next"} />
            </div>            
        );
    };
}

export default p2;