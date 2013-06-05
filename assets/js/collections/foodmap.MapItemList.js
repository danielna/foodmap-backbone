
var foodmap = foodmap || {};

var MapItemList = Backbone.Collections.extend({

    model: foodmap.MapItem,

    url: "/assets/resources/eateries2.json",

    // demo funcs
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
    }

});

foodmap.list = new MapItemList();
