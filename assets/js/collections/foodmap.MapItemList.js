
var foodmap = foodmap || {};

foodmap.MapItemList = Backbone.Collection.extend({

    model: foodmap.MapItem,

    url: "/assets/resources/eateries2.json",

    initialize: function() {
        console.log("collection init");
    },

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

    tags: function() {
        var tags = [];

        this.each(function(model){
            var temp_tags = model.get("tags").split(",");
            _.each(temp_tags, function(tag){
                if (tag !== "") {
                    tags.push(tag.trim());
                }
            });
        });

        return _.uniq(tags);

    },

    // Sort by original insertion order
    comparator: function( mapItem ) {
        return mapItem.get("order");
    }

});
