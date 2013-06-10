
var foodmap = foodmap || {};

foodmap.TagsView = Backbone.View.extend({
    
    el: "#left-container",

    template: _.template( $("#template-tag").html() ),

    initialize: function() {
        this.collection.bind("reset", _.bind(this.render, this));
    },

    render: function() {
        this.$("#container-tags").html( this.template({ tags: this.collection.tags() }) );
        this.$("#container-ethnicities").html( this.template({ tags: this.collection.ethnicities() }) );
    }


});
