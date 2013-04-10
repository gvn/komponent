/*global $: false, console: false, Komp: false */
/*jslint browser: true, sloppy: true, forin: true, plusplus: true, maxerr: 50, indent: 4 */

/*

    Widget
    VERSION 0.0.1
    AUTHOR G.S.

    DEPENDENCIES:

    - komp.js
    - jQuery

    TODO:

    -

*/

var window = window.window || {};

window.Widget = function (options) {
    var self = this,
        defaults;

    self.callbacks = {};

    // Options

    defaults = {};
    $.extend(defaults, options);
    self.options = defaults;

    // Element references


    // Properties

    self.actionHappened = false;
    self.actionCallbacksFired = 0;

    // Setup


    // Event Delegation

    self.on('action', function () {
        self.actionHappened = true;
        self.actionCallbacksFired += 1;
    });
};

window.Widget.prototype = new Komp();

window.Widget.prototype.action = function () {
    this.fire('action');
};
