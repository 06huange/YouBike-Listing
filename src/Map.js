import React from "react";
 
const Map = props => {
  return (
    <div className="map-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        {props.content}
      </div>
    </div>
  );
};
 
export default Map;