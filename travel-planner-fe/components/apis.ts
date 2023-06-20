import axios from "axios";

const accessToken = process.env.NEXT_PUBLIC_ACCESS_TOKEN;

export function destinationSearch(
  activity: string,
  lng: number,
  lat: number,
  limit: number
) {
  return axios
    .get(
      `https://api.mapbox.com/search/searchbox/v1/category/${activity}?&proximity=${lng},${lat}&access_token=${accessToken}&limit=${limit}&language=en`
    )
    .then((response) => {
      return response.data;
    });
}
