var myMap;

function initBranchesMap(restourantList, regionName) {
    //document.addEventListener('DOMContentLoaded', function () {
        
    //});
    ymaps.ready(function () {
        
    });        
    branchesMap(restourantList, regionName);
    console.error("initBranchesMap");
}
function branchesMap(restourantList, regionName) {
    
    var initLat, initLng;

    myMap = new ymaps.Map('branchesMapDiv', {
        center: [41.311081, 69.240562],
        zoom: 8,
        controls: []
    });

    console.error("Branch");
    console.log("Branch");
    //getCurrentLocation()
    //    .then(coords => {
    //        // Use the coordinates for opening the map or other operations
    //        initLat = coords.latitude;
    //        initLng = coords.longitude;
            
    //        var myAction = new ymaps.map.action.Single({
    //            center: [initLat, initLng],
    //            zoom: 12,
    //            duration: 1500,
    //            timingFunction: "ease-in"
    //        });            
    //        myMap.action.execute(myAction);

    //        // Rest of your logic
    //        // ...
    //    })
    //    .catch(error => {
    //        console.log(`Error: ${error}`);
    //        // Fallback to fetching coordinates using the region name
    //        fetchRegionCoordinates(regionName)
    //            .then(coords => {
    //                // Use the coordinates for opening the map or other operations
    //                initLat = coords.latitude;
    //                initLng = coords.longitude;
                    
    //                var myAction = new ymaps.map.action.Single({
    //                    center: [initLat, initLng],
    //                    zoom: 12,
    //                    duration: 1500,
    //                    timingFunction: "ease-in"
    //                }); 
    //                myMap.action.execute(myAction);

    //                // Rest of your logic
    //                // ...
    //            })
    //            .catch(error => {
    //                console.log(`Error: ${error}`);
    //                initLat = 41.3113;
    //                initLng = 69.279773;
    //                var myAction = new ymaps.map.action.Single({
    //                    center: [initLat, initLng],
    //                    zoom: 12,
    //                    duration: 1500,
    //                    timingFunction: "ease-in"
    //                });
    //                myMap.action.execute(myAction);

    //            });            
    //    });
    // Create a clusterer instance
    // Create a clusterer instance
    clusterer = new ymaps.Clusterer({
        gridSize: 64, // Grid size for clustering (in pixels)
        clusterIconLayout: 'default#image', // Use image layout for cluster icons
        clusterIconImageHref: '/assets/images/branchPlaceMark.svg', // Icon image URL for cluster icons
        clusterIconImageSize: [60, 50], // Icon image size for cluster icons
        clusterIconImageOffset: [-30, -25], // Icon image offset for cluster icons
        clusterDisableClickZoom: true, // Disable zooming when clicking on a cluster
        clusterOpenBalloonOnClick: false, // Disable opening balloon on cluster click
    });

    myMap.geoObjects.add(clusterer);
    var branchPlacemarks = [];


    restourantList.forEach(function (item) {
        var branchPlacemark = new ymaps.Placemark([item.latitude, item.longitude], {
            hintContent: item.displayName
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/images/branchPlaceMark.svg',
            iconImageSize: [60, 50],
            iconImageOffset: [-15, -30]
        });

        branchPlacemark.events.add('click', function (event) {
            var center = myMap.getCenter();
            dotNetHelper.invokeMethodAsync('getSelectedBranchID', item);            
            var myAction = new ymaps.map.action.Single({
                center: [item.latitude, item.longitude],
                zoom: 17,
                duration: 1500,
                timingFunction: "ease-in"
            });
            myMap.action.execute(myAction);


            isMouseDown = false;
        });
        branchPlacemarks.push(branchPlacemark);

    });


    clusterer.add(branchPlacemarks);
    

}



var restourantList = [
    {latitude: 41.311081, longitude: 69.240562, displayName: 'Restaurant 1'},
    {latitude: 41.300000, longitude: 69.250000, displayName: 'Restaurant 2'}
];
var regionName = 'Tashkent';

// Initialize the map once the Yandex API is ready
ymaps.ready(function () {
    initBranchesMap(restourantList, regionName);
});