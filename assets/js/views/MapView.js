
var foodmap = foodmap || {};

foodmap.MapView = Backbone.Collection.extend({
    
    el: "#container-map",

    initialize: function() {
        var 
            latlng = new google.maps.LatLng(38.907649,-77.239659), //arbitrary coordinates
            my_options = {
                            zoom: foodmap._globals.initial_zoom,
                            center: latlng,
                            mapTypeId: google.maps.MapTypeId.ROADMAP,
                            mapTypeControl: false
                        },
            dom_id = this.el.substring(1, this.el.length);

        this.markerBounds = new google.maps.LatLngBounds();
        this.map = new google.maps.Map(document.getElementById(dom_id), my_options);
    }

});
