/*global Backbone, Backbone*/

Backbone.Models = Backbone.Models || {};

(function () {
    'use strict';

    Backbone.Models.Authors = Backbone.Model.extend({

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
