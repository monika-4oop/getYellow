import axios from "axios";

const URL = "https://travel-advisor.p.rapidapi.com/hotels/list-by-latlng";

export const getHotels = async (lat, lng) => {
  console.log(lat, lng);
  try {
    const {
      data: { data },
    } = await axios.get(URL, {
      params: {
        latitude: lat,
        longitude: lng,
      },
      headers: {
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
        'X-RapidAPI-Key': '62d2a5d157mshf416a46760cfab1p10b364jsn1235613969b7'
      },
    });

    return data;
  } catch (err) {
    console.log(err);
  }
};
