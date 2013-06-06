
var foodmap = foodmap || {};

foodmap.ListingView = Backbone.View.extend({

    tagName: 'div',
    className: "listing",
    // !! remember to append data-id after render

    template: _.template( $("#template-listing").html() ),
    
    events: {
        ".listing click": "clickListing"
    },

    initialize: function() {
        // this.listenTo(foodmap.list, "filter", this.loadFilter);
        // this.listenTo(foodmap.list, "reset", this.loadAll);
    },

    // reset
    // load all listings
    render: function() {
        // console.log("model:", this.model.toJSON());
        this.$el.html( this.template( this.model.toJSON() ));
        return this;
    }


});
