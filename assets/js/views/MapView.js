
var foodmap = foodmap || {};

foodmap.MapView = Backbone.View.extend({
    
    el: "#container-map",

    initialize: function() {
        var 
            latlng = new google.maps.LatLng(38.907649,-77.239659), //arbitrary coordinates
            my_options = {
                            zoom: foodmap._globals.initial_zoom,
                            center: latlng,
                            mapTypeId: google.maps.MapTypeId.ROADMAP,
                            mapTypeControl: false
                        };
            dom_id = "container-map";

        this.markers = {};
        this.markerBounds = new google.maps.LatLngBounds();
        this.map = new google.maps.Map(document.getElementById(dom_id), my_options);
        
        this.collection.bind("reset", _.bind(this.parseMarkers, this));
    },

    parseMarkers: function() {
        var _this = this;
        this.collection.each(function(mapItem){
            var latLng = new google.maps.LatLng( parseFloat(mapItem.get("coordinates").lat, 10), parseFloat(mapItem.get("coordinates").lng, 10) );
            this.markerBounds.extend(latLng);

            // create map markers
            var marker = new google.maps.Marker({
                position: latLng,
                animation: google.maps.Animation.DROP,
                map: this.map,
                icon: foodmap._globals.map_icons[mapItem.get("price")],
                title: mapItem.get("name")
            });

            marker.description = mapItem.get("description");
            marker.price = mapItem.get("price");
            marker.ethnicity = mapItem.get("ethnicity");
            marker.tags = mapItem.get("tags");

            addGoogleClickListener(marker);
            this.markers[mapItem.name] = marker;
        }, this);

        function addGoogleClickListener(marker) {
            google.maps.event.addListener(marker, 'click', function() {
                foodmap._globals.container_welcome.fadeOut();

                _this.trigger("activateListing", marker.title);

                // marker_util.highlightListing(marker.title);
                // marker_util.zoomMarker(marker.title);
                // marker_util.showinfoBox(marker.title);
            });
        }
    }


});
