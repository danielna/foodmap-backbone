
var foodmap = foodmap || {};

foodmap.MapItem = Backbone.Model.extend({

    initialize: function(){
        console.log('INIT foodmap.MapItem');
    },

    defaults: {
        "name": "Default MapItem",
        "description": "",
        "price": "",
        "ethnicity": "",
        "tags": "",
        "coordinates": ""
    }

});
