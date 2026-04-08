// Map initialization

// L is stored globally through CDN 
var map = L.map('map', {
    center: [13.131126789696053, 77.58778377525103],
    zoom: 10
});


//Tile Layer is basically what u call img source ( its providing the map we see)
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


// A crude function to add Markers on clicks 
var mark = null
map.addEventListener("click",(e)=>{
    if (mark===null){
        mark=L.marker(e.latlng)
        mark.addTo(map)
    }
    else{
        mark.setLatLng(e.latlng)
    }
})


// leaflet has DistanceTo which has this function already so helper deprecated
// helper function to find radian or curved distance between two points
function HaversineDist(point1 , point2){
    //Tuple Destructing is kind of different in js as opposed to py
     var [lat1, long1]=point1;
    var [lat2,long2]=point2;

    const toRad = Math.PI / 180;

    //Radian Conversion
    lat1*=toRad
    lat2*=toRad
    long1*=toRad
    long2*=toRad

    const delta_lat=lat1-lat2;
    const delta_long=long1-long2;
    var havTheta = (1-Math.cos(delta_lat)+Math.cos(lat1)*Math.cos(lat2)*(1-Math.cos(delta_long)))
    havTheta/=2
    const theta=2*Math.asin(Math.sqrt(havTheta))

    return 6371*theta
}