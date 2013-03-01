/*global $: false, console: false */
/*jslint browser: true, sloppy: true, forin: true, plusplus: true, maxerr: 50, indent: 4 */

/*

    Component
    VERSION 0.0.1
    AUTHOR #AUTHOR#

    DEPENDENCIES:

    - jQuery 1.7.2

    TODO:

    -

*/

var NAMESPACE = NAMESPACE || {};

NAMESPACE.Component = function (target, options) {
    var self = this,
        defaults;

    // Event subscription setup

    self.callbacks = {};

    // Options

    defaults = {};
    $.extend(defaults, options);
    self.options = defaults;

    // Element references

    self.$target = $(target);

    // Properties


    // Setup


    // Event Delegation

    // DEMO
    self.bind('actionHappened', function () {
        self.reaction();
    });
    // END: DEMO
};

NAMESPACE.Component.prototype = {

    // DEMO

    action: function () {
        var self = this;

        console.log('Action');

        self.fire('actionHappened', {time: (new Date()).toString()});
    },
    reaction: function () {
        var self = this;

        console.log('Reaction');
    },

    // END: DEMO

    // bind(eventType:String, callback:Function, scope:Object)
    // Bind a callback function to a named event type with optional callback scope.

    bind: function (eventType, callback, scope) {
        var self = this;

        if (typeof self.callbacks[eventType] === 'undefined') {
            self.callbacks[eventType] = [];
        }

        self.callbacks[eventType].push({
            callback: callback,
            scope: scope || self // Bind scope to component if unspecified
        });
    },

    // unbind(eventType:String)
    // Unbind all callbacks for given event type.

    unbind: function (eventType) {
        var self = this;

        self.callbacks[eventType] = [];
    },

    // fire(eventType:String, eventData: Object)
    // Fires callbacks registered for given event type with optional event data object.

    fire: function (eventType, eventData) {
        var self = this,
            i,
            ii;

        if (typeof self.callbacks[eventType] !== 'undefined') {
            for (i = 0, ii = self.callbacks[eventType].length; i < ii; i++) {
                self.callbacks[eventType][i].callback.call(self.callbacks[eventType][i].scope, eventData);
            }
        }
    }
};
