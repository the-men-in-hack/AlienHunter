

  function initMap() {
    //Styles a map in night mode.
      const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 38.500000, lng: -98.000000 },
      zoom: 5,
      disableDefaultUI: true,
      styles: [
        //{ elementType: "geometry", stylers: [{ color: "#242f3e" }] },
        { elementType: "geometry", stylers: [{ color: "#FFFFFF" }] },
        { elementType: "labels.text.stroke", stylers: [{ color: "#555555" }] },
        { elementType: "labels.text.fill", stylers: [{ color: "#EEEEEE" }] },
        //{ elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
        //{ elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
        {
          featureType: "administrative.locality",
          elementType: "labels.text.fill",
          stylers: [{ color: "#EFEFEF" }],
          //stylers: [{ color: "#d59563" }],
        },
        {
          featureType: "poi",
          elementType: "labels.text.fill",
          //stylers: [{ color: "#d59563" }],
          stylers: [{ color: "#AAAAAA" }],
        },
        {
          featureType: "poi.park",
          elementType: "geometry",
          //stylers: [{ color: "#263c3f" }],
          stylers: [{ color: "#EEEEEE" }],
        },
        {
          featureType: "poi.park",
          elementType: "labels.text.fill",
          stylers: [{ color: "#EFEFEF" }],
          //stylers: [{ color: "#6b9a76" }],
        },
        {
          featureType: "road",
          elementType: "geometry",
          stylers: [{ color: "#38414e" }],
        },
        {
          featureType: "road",
          elementType: "geometry.stroke",
          stylers: [{ color: "#212a37" }],
        },
        {
          featureType: "road",
          elementType: "labels.text.fill",
          stylers: [{ color: "#9ca5b3" }],
        },
        {
          featureType: "road.highway",
          elementType: "geometry",
          stylers: [{ color: "#746855" }],
        },
        {
          featureType: "road.highway",
          elementType: "geometry.stroke",
          stylers: [{ color: "#1f2835" }],
        },
        {
          featureType: "road.highway",
          elementType: "labels.text.fill",
          stylers: [{ color: "#f3d19c" }],
        },
        {
          featureType: "transit",
          elementType: "geometry",
          stylers: [{ color: "#2f3948" }],
        },
        {
          featureType: "transit.station",
          elementType: "labels.text.fill",
          stylers: [{ color: "#EFEFEF" }],
          stylers: [{ color: "#d59563" }],
        },
        {
          featureType: "water",
          elementType: "geometry",
          stylers: [{ color: "#153B44" }],
        },
        {
          featureType: "water",
          elementType: "labels.text.fill",
          stylers: [{ color: "#515c6d" }],
        },
        {
          featureType: "water",
          elementType: "labels.text.stroke",
          stylers: [{ color: "#17263c" }],
        },
      ],
     });
  //    var pos = new google.maps.LatLng(38.500000, -98.000000 );

  //    var marker = new CustomMarker({
  //      position: pos,
  //      map: map,
  //  });

    // const myMarker = new google.maps.Marker({
    //   position: {
    //     lat: 38.500000,
    //     lng: -98.000000
    //   },
    //   map: map,
    //   title: "I'm here"
    // });
    return map;
  }

  CustomMarker.prototype = new google.maps.OverlayView();

  function CustomMarker(opts) {
      this.setValues(opts);
  }
  
  CustomMarker.prototype.draw = function() {
      var self = this;
      var div = this.div;
      if (!div) {
          div = document.createElement('div');
          div.classList.add('pulse');

          var point = this.getProjection().fromLatLngToDivPixel(this.position);
           if (point) {
               div.style.left = point.x + 'px';
               div.style.top = point.y + 'px';
           }

          var panes = this.getPanes();
          panes.overlayImage.appendChild(div);
      }
  };

  alienMap = initMap();

  function newMarker(pos)
  {
    console.log("creating new marker");
    
    // const myMarker = new google.maps.Marker({
    //   position: {
    //     lat: 38.500000,
    //     lng: -98.000000
    //   },
    //   map: alienMap,
    //   title: "I'm here"
    // });


      //var pos = new google.maps.LatLng(lng, lat);

      var marker = new CustomMarker({
        //position:  {lat: 38, lng: -98},
        position: pos,
        map: alienMap,
      })
  };

  function newUfoMarker(pos)
  {

      //var pos = new google.maps.LatLng(pos);

      var marker = new CustomMarker({
        //position:  {lat: 38, lng: -98},
        position: pos,
        map: alienMap,
        title: "selected sight",
        icon: "../images/ufo.png",
        Animation: google.maps.Animation.BOUNCE,
        draggable: true
      })
  };