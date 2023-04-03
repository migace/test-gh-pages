import { getCoordinates } from "./utils/getGeolocation";
import URL from "./constants";

getCoordinates(function (coordinates) {
  console.log(coordinates);
});

fetch(URL)
  .then((response) => response.json())
  .then((json) => console.log(json));
