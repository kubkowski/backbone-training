/*global Backbone, Backbone*/

Backbone.Collections = Backbone.Collections || {};

(function () {
    'use strict';

    Backbone.Collections.Publishers = Backbone.Collection.extend({

        model: Backbone.Models.Publisher

    });

})();
