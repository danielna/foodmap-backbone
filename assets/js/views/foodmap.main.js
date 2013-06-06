
var foodmap = foodmap || {};

foodmap.Main = Backbone.View.extend({

    initialize: function() {
        foodmap.MapList = new foodmap.MapItemList();
        var 
            listingContainerView = new foodmap.ListingContainerView({ collection: foodmap.MapList }),
            tagsView = new foodmap.TagsView({ collection: foodmap.MapList });        

        foodmap.MapList.fetch({reset: true});       
    }

    // render: function() {
    //     this.collection.each( function(listing) {
    //         this.renderListing(listing);
    //     }, this);

    //     var pixel_width = foodmap._globals.listing_width * this.collection.length;
    //     $("#bottom-container").find(".listing-container").attr("style", "width:" + pixel_width + "px;");
    // },

    // renderListing: function(listing) {
    //     var listingView = new foodmap.ListingView({
    //         model: listing
    //     });

    //     this.$el.append( listingView.render().el );    
    // }

});
