
var foodmap = foodmap || {};

foodmap.TagsView = Backbone.View.extend({
    
    el: ".tags",

    template: _.template( $("#template-tag").html() ),

    initialize: function() {
        this.collection.bind("reset", _.bind(this.render, this));
    },

    render: function() {
        // TODO: Add ethnicities as tags as well
        this.$el.html( this.template({ tags: this.collection.tags() }) );
    }


});
