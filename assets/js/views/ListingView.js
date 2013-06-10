
var foodmap = foodmap || {};

foodmap.ListingView = Backbone.View.extend({

    tagName: 'div',
    className: "listing",

    template: _.template( $("#template-listing").html() ),

    // reset
    // load all listings
    render: function() {
        this.model.attributes.price_map = foodmap._globals.price_map[this.model.get("price")];
        this.$el.html( this.template( this.model.toJSON() ));
        this.$el.attr("data-id", this.model.get("name"));
        return this;
    }

});
