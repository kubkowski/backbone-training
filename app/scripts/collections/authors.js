/*global Backbone, Backbone*/

Backbone.Collections = Backbone.Collections || {};

(function () {
    'use strict';

    Backbone.Collections.Authors = Backbone.Collection.extend({

        model: Backbone.Models.Authors

    });

})();
