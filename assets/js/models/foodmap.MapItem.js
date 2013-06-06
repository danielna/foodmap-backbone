
var foodmap = foodmap || {};

foodmap.MapItem = Backbone.Model.extend({

    initialize: function(){
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
