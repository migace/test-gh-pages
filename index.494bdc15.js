var o;o=function(o){console.log(o)},navigator.geolocation.getCurrentPosition((function(t){o({latitude:t.coords.latitude,longitude:t.coords.longitude})}),(function(o){console.log(o)})),fetch("https://jsonplaceholder.typicode.com/posts").then((o=>o.json())).then((o=>console.log(o)));
//# sourceMappingURL=index.494bdc15.js.map
