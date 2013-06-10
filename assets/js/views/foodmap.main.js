
var foodmap = foodmap || {};

foodmap.Main = Backbone.View.extend({

    el: "body",

    events: {
        "click #js-btn-welcome": "toggleWelcome",
        "click #js-close-welcome": "toggleWelcome",
        "click #js-btn-reset": "onReset"
    },
    
    initialize: function() {
        this.$container_welcome = this.$("#container-welcome");
        this.$tags = this.$(".tags .tag");

        foodmap.MapList = new foodmap.MapItemList();
        var 
            listingContainerView = new foodmap.ListingContainerView({ collection: foodmap.MapList }),
            tagsView = new foodmap.TagsView({ collection: foodmap.MapList });        

        foodmap.MapList.fetch({reset: true});       
    },

    toggleWelcome: function() {
        this.$container_welcome.fadeToggle();
    },

    resetActiveTag: function() {
        this.$tags.removeClass("active");
    },

    onReset: function() {
        this.$container_welcome.fadeIn();
        this.resetActiveTag();
    }

});
