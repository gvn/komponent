/*global $: false, console: false, Komponent: false */
/*jslint browser: true, sloppy: true, forin: true, plusplus: true, maxerr: 50, indent: 4 */

/*

    Demo Komponent
    VERSION 0.0.1
    AUTHOR G.S.

    DEPENDENCIES:

    - callback.js
    - jQuery 1.7.2

    TODO:

    -

*/

var DEMO = window.DEMO || {};

DEMO.Component = function (target, options) {
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

    self.on('action', function () {
        self.reaction();
    });
};

DEMO.Component.prototype = new Komponent();

DEMO.Component.prototype.action = function () {
    var self = this;

    console.log('Action');

    self.fire('action', {time: (new Date()).toString()});
};

DEMO.Component.prototype.reaction = function () {
    var self = this;

    console.log('Reaction');
};
