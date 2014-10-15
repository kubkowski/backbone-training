/*global Backbone, Backbone*/

Backbone.Collections = Backbone.Collections || {};

(function () {
    'use strict';

    Backbone.Collections.Books = Backbone.Collection.extend({

        model: Backbone.Models.Book

    });

})();
