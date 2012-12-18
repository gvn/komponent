/*global $: false, console: false */
/*jslint browser: true, sloppy: true, forin: true, plusplus: true, maxerr: 50, indent: 4 */

/*

    Component
    VERSION 0.0.1
    AUTHOR X.X.

    DEPENDENCIES:
    
    - jQuery 1.7.2

    TODO:
    
    - 

*/

window.Component = function (target, options) {
    var base = this,
        defaults;

    // Event subscription setup

    base.events.parent = base;
    base.callbacks = {};

    // Options

    defaults = {};
    $.extend(defaults, options);
    base.options = defaults;

    // Element references

    base.$target = $(target);

    // Properties


    // Setup


    // Event Delegation


};

window.Component.prototype = {
    events: {
        actionHappened: function (event) {
            var base = this.parent;

            base.runCallbacks('actionHappened', event);
        }
    },
    action: function () {
        var base = this;

        base.events.actionHappened({metadata: 'More event info...'});
    },
    bind: function (eventType, callback, scope) {
        var base = this;

        if (typeof base.callbacks[eventType] === 'undefined') {
            base.callbacks[eventType] = [];
        }

        base.callbacks[eventType].push({
            callback: callback,
            scope: scope
        });
    },
    unbind: function (eventType) {
        var base = this;

        base.callbacks[eventType] = [];
    },
    runCallbacks: function (eventType, eventData) {
        var base = this,
            i,
            ii;

        if (typeof base.callbacks[eventType] !== 'undefined') {
            for (i = 0, ii = base.callbacks[eventType].length; i < ii; i++) {
                base.callbacks[eventType][i].callback.call(base.callbacks[eventType][i].scope || base, eventData);
            }
        }
    }
};
