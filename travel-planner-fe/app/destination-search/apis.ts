import axios from 'axios'

export function destinationSearch(search_text: string){
    return axios.get(`https://api.mapbox.com/search/searchbox/v1/suggest?q=${search_text}&access_token=pk.eyJ1IjoibGFpOTYiLCJhIjoiY2xpdWVhdmQ3MHkybjNobzdnbjJwcmx6YSJ9.0CYohMf5CN77cD-BOo7mhw&session_token=ec1d4ed0-0a00-11ee-be56-0242ac120002`)
        .then((response) => {
            return response.data;
        })
}