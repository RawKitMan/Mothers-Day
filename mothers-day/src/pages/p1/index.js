import React, { Component } from "react";
import Button from "../../components/Button";

class p1 extends Component {
    render() {
        return (
            <div className="jumbotron text-center mt-5">
                <p>I have known you for nearly four years. Can you believe we're already at that point? In that time, you have become an incredible mother to my boys. You've given them direction, focus, guidance, and a firm hand when needed. As a result, they have become more than they, or I, have ever thought they could be.</p>
                <Button link={"/p2"} text={"Next"} />
            </div>            
        );
    };
}

export default p1;