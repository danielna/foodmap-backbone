
var foodmap = foodmap || {};

foodmap.MapItemList = Backbone.Collection.extend({

    model: foodmap.MapItem,

    url: "/assets/resources/eateries2.json",

    // Filter by price
    list_cost_low: function() {
        return this.filter(function(mapItem){
            return mapItem.get("price") === "low";
        });
    },
    list_cost_med: function() {
        return this.filter(function(mapItem){
            return mapItem.get("price") === "med";
        });
    },
    list_cost_high: function() {
        return this.filter(function(mapItem){
            return mapItem.get("price") === "high";
        });
    },

    // Sort by original insertion order
    comparator: function( mapItem ) {
        return mapItem.get("order");
    }

});
