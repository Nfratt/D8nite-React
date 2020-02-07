import React from "react";


export default function Restaurants(props) {
    return (
        <div className="card">
            {/* style width:100% */ }
            <h5 className="card-header"><i>Restaurants near you:</i></h5>
            <div className="card-body">
                {/* <!-- api results --> */}
                <div id="restResults">
                    <div className="card-group">
                    </div>
                </div>
            </div>
        </div>
    )
}