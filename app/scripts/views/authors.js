/*global Backbone, Backbone, JST*/

Backbone.Views = Backbone.Views || {};

(function () {
    'use strict';

    Backbone.Views.Authors = Backbone.View.extend({

        template: JST['app/scripts/templates/authors.ejs'],

        tagName: 'div',

        id: '',

        className: 'page',

        events: {},

        initialize: function () {
            console.log("2");
            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
        }

    });

})();
