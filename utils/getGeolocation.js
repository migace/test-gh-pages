export function getCoordinates(onSuccess) {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      onSuccess({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    },
    function (error) {
      console.log(error);
    }
  );
}
