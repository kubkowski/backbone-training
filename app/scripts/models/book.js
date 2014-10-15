/*global Backbone, Backbone*/

Backbone.Models = Backbone.Models || {};

(function () {
    'use strict';

    Backbone.Models.Book = Backbone.Model.extend({

        url: '',

        initialize: function() {
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
