/*global Backbone, Backbone*/

Backbone.Routers = Backbone.Routers || {};

(function () {
    'use strict';

    Backbone.Routers.Router = Backbone.Router.extend({
    	routes: {
    		'/authors': 'authors'
    	},
        authors: function() {
            console.log('hello');  
        }
    });

    var router = new Backbone.Routers.Router();
   
    //router.on('route:authors', function() {
    //	
    //    authors.render();
    //})

    Backbone.history.start();

})();
