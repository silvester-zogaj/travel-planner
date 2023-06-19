import axios from "axios";

export function destinationSearch(activity: string, lng: number, lat: number) {
  return axios
    .get(
      `https://api.mapbox.com/search/searchbox/v1/category/${activity}?&proximity=${lng},${lat}&access_token=pk.eyJ1IjoibGFpOTYiLCJhIjoiY2xpdWVhdmQ3MHkybjNobzdnbjJwcmx6YSJ9.0CYohMf5CN77cD-BOo7mhw&limit=10&language=en`
    )
    .then((response) => {
      return response.data;
    });
}
