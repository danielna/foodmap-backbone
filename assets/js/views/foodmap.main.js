
var foodmap = foodmap || {};

foodmap.Main = Backbone.View.extend({

    initialize: function() {
        foodmap.MapList = new foodmap.MapItemList();
        var 
            listingContainerView = new foodmap.ListingContainerView({ collection: foodmap.MapList }),
            tagsView = new foodmap.TagsView({ collection: foodmap.MapList });        

        foodmap.MapList.fetch({reset: true});       
    }

});
