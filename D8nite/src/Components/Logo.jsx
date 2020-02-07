import React from "react";

export default function Logo(props) {
    return (
        <div className="row">
            <div id="show" className="card">
                {/* add in scss style width 100% */}
                <h5 className="card-header"><i>Showing results for:</i></h5>
                <div className="card-body">
                    <div className="card-group">
                        <div id="userLocation" className="card">
                        </div>
                        <div id="userZip" class="card">
                        </div>
                        <div id="userDate" class="card">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}