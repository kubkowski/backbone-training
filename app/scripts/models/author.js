/*global Backbone, Backbone*/

Backbone.Models = Backbone.Models || {};

(function () {
    'use strict';

    Backbone.Models.Author = Backbone.Model.extend({

        urlRoot: 'http://safe-dusk-6297.herokuapp.com/api/authors',

        initialize: function() {
            console.log('This model has been initialized.');
        },

        defaults: {
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

})();
