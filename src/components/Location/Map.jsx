import React, { useEffect, useState } from "react";

import { getHotels } from "../../api/api";

import "./map.css";

const Maps = () => {
  const [coordinates, setCoordinates] = useState({});

  const [hotels, setHotels] = useState([]);

  // getting user's loaction while visiting the page
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  //
  useEffect(() => {
    getHotels(coordinates.lat, coordinates.lng).then((data) => {
      // console.log(data);
      setHotels(data);
    });
  }, [coordinates]);

  return (
    <div className="hotels">
      {hotels &&
        hotels.map((hotel) => {
          var img;

          if (hotel.photo !== undefined) {
            img = hotel.photo.images.large.url;
          }

          return (
            img && (
              <div className="list__items" key={hotel.listing_key}>
                {img && <img src={img} alt="" />}

                <h3>{hotel.name}</h3>


                <h4>Price : {hotel.price}</h4>
                <h4>Rate: {hotel.rating} star</h4>

                <h4>Location : {hotel.ranking_geo}</h4>

              </div>
            )
          );
        })}
    </div>
  );
};

export default Maps;
