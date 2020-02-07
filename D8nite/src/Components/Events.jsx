import React from "react";

export default function Events(props) {
    return (

        <div className="card">
            {/* add in scss style width 100% */}
            <h5 className="card-header"><i>Events near you:</i></h5>
            <div className="card-body">
                {/* <!-- api results --> */}
                <div id="eventResults">
                    <div className="card-group">
                    </div>
                </div>
            </div>
        </div>
    )
}