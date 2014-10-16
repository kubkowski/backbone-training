/*global Backbone, Backbone*/

Backbone.Collections = Backbone.Collections || {};

(function () {
    'use strict';

    Backbone.Collections.Authors = Backbone.Collection.extend({

        model: Backbone.Models.Author,
        url: 'http://safe-dusk-6297.herokuapp.com/api/authors'
      
    });

})();
