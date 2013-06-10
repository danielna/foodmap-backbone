
var foodmap = foodmap || {};

foodmap.ListingContainerView = Backbone.View.extend({

    el: ".js-listing-container",

    events: {
        ".listing click": "clickListing"
    },

    initialize: function() {
        this.collection.bind("reset", _.bind(this.render, this));
        this.collection.bind("reset", _.bind(this.setListingContainerWidth, this));  
    },

    render: function() {
        var _this = this;
        this.collection.each( function(listing) {
            this.renderListing(listing);
        }, this);
    },

    renderListing: function(listing) {
        var listingView = new foodmap.ListingView({
                model: listing
            }),
            listing_el = listingView.render().el,
            _this = this;

        this.$el.append( listing_el );

        var $self = $(listing_el),
            id = $self.attr("data-id");

        google.maps.event.addDomListener($self[0], "click", function(ev) {
            _this.trigger("clickListing", id);
        });
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
    },

    clickListing: function(event) {
        var $this = $(event.currentTarget),
            id = $this.attr("data-id");

        this.setActiveListing(id);
        this.trigger("clickListing", id);
    }

});
