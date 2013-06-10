
var foodmap = foodmap || {};

foodmap.TagsView = Backbone.View.extend({
    
    el: "#left-container",

    template: _.template( $("#template-tag").html() ),

    events: {
        "click .tag": "clickTag"
    },

    initialize: function() {
        this.$container_tags = this.$("#container-tags");
        this.$container_ethnicities = this.$("#container-ethnicities");

        this.collection.bind("reset", _.bind(this.render, this));
    },

    render: function() {
        this.$container_tags.html( this.template({ tags: this.collection.tags() }) );
        this.$container_ethnicities.html( this.template({ tags: this.collection.ethnicities() }) );
        this.$tags = this.$(".tag");
    },

    clickTag: function(event) {
        var $this = $(event.currentTarget);
        this.$tags.removeClass("active");
        $this.addClass("active");
    }

});
