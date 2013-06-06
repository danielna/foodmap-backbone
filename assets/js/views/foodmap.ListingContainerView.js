
var foodmap = foodmap || {};

foodmap.ListingContainerView = Backbone.View.extend({

    el: ".js-listing-container",

    initialize: function() {
        this.collection = new foodmap.MapItemList();
        this.collection.bind("reset", _.bind(this.render, this));
        this.collection.fetch({reset: true});
    },

    render: function() {
        this.collection.each( function(listing) {
            this.renderListing(listing);
        }, this);

        var pixel_width = foodmap._globals.listing_width * this.collection.length;
        $("#bottom-container").find(".listing-container").attr("style", "width:" + pixel_width + "px;");
    },

    renderListing: function(listing) {
        var listingView = new foodmap.ListingView({
            model: listing
        });

        this.$el.append( listingView.render().el );    
    }

});