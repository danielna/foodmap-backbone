
var foodmap = foodmap || {};

foodmap.MapItemList = Backbone.Collection.extend({

    model: foodmap.MapItem,

    url: "/assets/resources/eateries.json",

    initialize: function() {
        // console.log("collection init");
    },

    // Return unique tags for the collection as an array
    tags: function() {
        return _.uniq(this.pluckCollectionProperty("tags"));
    },

    // Return unique ethnicities for the collection as an array
    ethnicities: function() {
        return _.uniq(this.pluckCollectionProperty("ethnicity"));
    },

    // Pluck a collection property, returning an array of properties that do not include empty strings
    pluckCollectionProperty: function(property) {
        var properties = [];
         _(this.pluck(property)).each(function(tag) {
            var temp = tag.split(",");
            for ( var i=0; i < temp.length; i++ ){
                if ( temp[i] !== "" ) {
                    properties.push(temp[i].trim());
                }
            }
        });

        return properties;
    },

    // Sort by original insertion order
    comparator: function( mapItem ) {
        return mapItem.get("order");
    }
});
