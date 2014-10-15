/*global Backbone, Backbone, JST*/

Backbone.Views = Backbone.Views || {};

(function () {
    'use strict';

    Backbone.Views.Author = Backbone.View.extend({

        template: JST['app/scripts/templates/author.ejs'],

        tagName: 'div',

        id: '',

        className: '',

        events: {},

        initialize: function () {
            console.log("1");
            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            var firstName, lastName;
            firstName  = this.model.get('first_name');
            lastName = this.model.get('last_name');
            console.log(firstName + " - " + lastName);
            this.$el.html(this.template(this.model.toJSON()));
        }

    });

})();
