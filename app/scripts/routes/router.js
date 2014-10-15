/*global Backbone, Backbone*/

Backbone.Routers = Backbone.Routers || {};

(function () {
    'use strict';

    Backbone.Routers.Router = Backbone.Router.extend({
    	routes: {
    		'/#/authors': 'authors'
    	}
    });

    var router = new Backbone.Routers.Router();
    var authors = new Backbone.Views.Authors()
   
   router.on('route:authors', function() {
    	authors.render();
    })

    Backbone.history.start();

})();
