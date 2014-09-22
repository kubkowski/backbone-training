/*global Backbone, Backbone, JST*/

Backbone.Views = Backbone.Views || {};

(function () {
    'use strict';

    Backbone.Views.Publishers = Backbone.View.extend({

        template: JST['app/scripts/templates/publishers.ejs'],

        tagName: 'div',

        id: '',

        className: '',

        events: {},

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
        }

    });

})();
