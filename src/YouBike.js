import React, { useState, useEffect, useRef } from 'react';
import Map from './Map';

export default function YouBike() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [mapLocation, setMapLocation] = useState('Click');
  const [mapStat, setMapStat] = useState('Click');
  const [query, setQuery] = useState('Taipei');
  const ref = useRef(null);

  const [isOpen, setIsOpen] = useState(false);
  const mapSource = 'https://www.google.com/maps/embed/v1/place?key=AIzaSyDId7Y0YTgaQiAMczyNPA8OjJevW92Uh8s&q=' + query + ',Taipei';
  const togglePopup = (event, location, stat) => {
    setMapLocation(location);
    setMapStat(stat);
    setQuery(location);
    if(!isOpen){
      event.currentTarget.classList.remove('hover');
    }
    setIsOpen(!isOpen);
  }

  const addHover = event => {
    event.currentTarget.classList.add('hover');
  }

  const removeHover = event => {
    event.currentTarget.classList.remove('hover');
  }
  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()

  useEffect(() => {

    fetch("http://localhost:8010/proxy/api/datasets/71CD1490-A2DF-4198-BEF1-318479775E8A/json/preview")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          //sort Array based on "mday"
          var obj = result;
          obj.sort((a,b) => b.mday - a.mday);
          setItems(obj);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
        )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        {isOpen && <Map
          content={<>
            <div id="mapHeaderWrapper">
              <div id="mapHeaderLocation">{mapLocation}</div>
              <div id="mapHeaderStat">Available: {mapStat}</div>
            </div>
            <iframe
            width="1005"
            height="450"
            src={mapSource}></iframe>
          </>}
          handleClose={togglePopup}
        />}
        <ul id="listing">
          {items.map(item => (
            <li key={item.sno} onClick={event => togglePopup(event, item.snaen, item.sbi)} onMouseEnter={addHover} onMouseLeave={removeHover}>
              <ul ref={ref} id="item">
                  <li>{item.snaen}</li>
                  <li>Total: {item.tot}</li>
                  <li>Available: {item.sbi}</li>
                  <li>{convertToDate(item.mday)}</li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

//convert number to Date Format
//20210516154847 -> 2021/05/16 15:48:47
function convertToDate(input){
    var year = (input / 10000000000).toFixed(0);
    var month = addLeadingZero((input / 100000000).toFixed(0) % 100);
    var day = addLeadingZero((input / 1000000).toFixed(0) % 100);

    var hour = addLeadingZero(((input / 10000) % 100).toFixed(0));
    var min = addLeadingZero(((input / 100) % 100).toFixed(0));
    var sec = addLeadingZero((input % 100).toFixed(0));
    return(year + "/" + month + "/" + day + " - " + hour + ":" + min + ":" + sec);
}

//helper function to add leading zero for fixed numeric format
function addLeadingZero(input){
    if(input / 10 < 1){
        return("0" + input)
    }
    else{
        return input;
    }
}

function testing(){
  return 'MRT SanChong St.'
}
