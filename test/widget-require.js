/*

    Widget
    VERSION 0.0.1
    AUTHOR G.S.

    DEPENDENCIES:

    - komp.js

    TODO:

    -

*/

define(['komponent'], function (Komponent) {

    var Widget = function (options) {
        var self = this,
            defaults,
            option;

        self.callbacks = {};

        // Options ----------------------------------------------------------------

        defaults = {
            sprockets: 10
        };

        for (option in options) {
            defaults[option] = options[option] || defaults[option];
        }

        self.options = defaults;

        // Element references -----------------------------------------------------

        // Properties -------------------------------------------------------------

        self.actionHappened = false;
        self.actionCallbacksFired = 0;

        // Setup ------------------------------------------------------------------

        // Event Delegation -------------------------------------------------------

        self.on('action', function () {
            self.actionHappened = true;
            self.actionCallbacksFired += 1;
        });
    };

    Widget.prototype = new Komponent();

    Widget.prototype.action = function () {
        this.fire('action');
    };

    console.log(typeof Widget);

    return Widget;

});
