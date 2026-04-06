// Map initialization

// L is stored globally through CDN 
var map = L.map('map', {
    center: [13.131126789696053, 77.58778377525103],
    zoom: 10
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


function HaversineDist(point1 , point2){
     var lat1, long1=point1;
    var lat2,long2=point2;

    const delta_lat=lat1-lat2;
    const delta_long=long1-long2;
    var havTheta = (1-Math.cos(delta_lat)+Math.cos(lat1)*Math.cos(lat2)*(1-cos(delta_long)))
    havTheta/=2
    const theta=2*Math.asin(Math.sqrt(havTheta))

    return 6371*theta
}