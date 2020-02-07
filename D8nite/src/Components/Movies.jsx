import React from "react";

export default function Movies(props){
    return(
        <div className="card">
            {/* style width 100% */}
            <h5 className="card-header"><i>Movies playing near you:</i></h5>
            <div className="card-body">
              {/* <!-- api results --> */}
              <div id="movieResults">
                <div className="card-group">

                </div>
              </div>

            </div>

          </div>
    )
}