
var foodmap = foodmap || {};

foodmap.ListingContainerView = Backbone.View.extend({

    el: ".js-listing-container",

    initialize: function() {
        this.collection.bind("reset", _.bind(this.render, this));
        this.collection.bind("reset", _.bind(this.setListingContainerWidth, this));  
    },

    render: function() {
        this.collection.each( function(listing) {
            this.renderListing(listing);
        }, this);
    },

    renderListing: function(listing) {
        var listingView = new foodmap.ListingView({
            model: listing
        });

        this.$el.append( listingView.render().el );    
    },

    setListingContainerWidth: function() {
        var pixel_width = foodmap._globals.listing_width * this.collection.length;
        $("#bottom-container").find(".listing-container").attr("style", "width:" + pixel_width + "px;");        
    },

    setActiveListing: function(id) {
        var $active_listing = this.$el.find("[data-id=\"" + id + "\"]");
        this.$el.find(".listing").removeClass("active");
        $active_listing.addClass("active");

        $("#bottom-container .listing-scroll").animate({scrollLeft: $active_listing[0].offsetLeft - ($(window).width()/2)}, 1200);
    }

});
