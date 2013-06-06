
var foodmap = foodmap || {};

foodmap.TagsView = Backbone.View.extend({
    
    el: ".tags",

    template: _.template( $("#template-tag").html() ),

    initialize: function() {
        this.collection.bind("reset", _.bind(this.render, this));
    },

    render: function() {
        this.$el.html("");

        // var tags = [];
        // this.collection.each(function(model){
        //     var temp_tags = model.get("tags").split(",");
        //     _.each(temp_tags, function(tag){
        //         if (tag !== "") {
        //             tags.push(tag.trim());
        //         }
        //     });
        // });

        // tags = _.uniq(tags);
        // console.log("tags", tags);

        this.$el.html( this.template({ tags: this.collection.tags() }) );

       
        // for (var i = 0; i< tags.length; i++) {
        //     // this.$el.append( this.template( JSON.stringify({ "tag": tags[i] }) ));
        //     console.log("tag:", this.template( JSON.stringify({ "tag": tags[i] }) ));
        // }



    }


});
