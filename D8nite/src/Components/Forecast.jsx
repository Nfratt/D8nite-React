import React from "react";

export default function Forecast(props){
    return(
        <div className="container">
        <div className="card">
          <h5 className="card-header"><i>Weather Forecast:</i></h5>
          {/* <!-- weather --> */}
          <div className="card-body" id="weatherResults">
            ​
          </div>
        </div>
      </div>
    )
}