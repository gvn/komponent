/*global Komponent: true */
/*jslint browser: true, sloppy: true, forin: true, plusplus: true, maxerr: 50, indent: 4 */

/*

    Komponent

    A driver for evented JavaScript components.

    VERSION 0.3.0
    AUTHOR Gvn Lazar Suntop

    TODO:

    -

*/

if (typeof Komponent !== 'undefined') {
    throw '"Komponent" already in use';
}

Komponent = function () {};

Komponent.mixin = {

    /**
     * Bind a callback function to a named event type.
     *
     * @method on
     * @param  {String}   eventType
     * @param  {Function} callback
     * @return {Number}
     */

    on: function (eventType, callback) {
        if (typeof this.callbacks[eventType] === 'undefined') {
            this.callbacks[eventType] = [];
        }

        this.callbacks[eventType].push(callback);

        // Return callback index in case you want to unbind only this callback
        return this.callbacks[eventType].length - 1;
    },

    /**
     * Unbind callbacks for given event type.
     * All callbacks of given type will be removed if no ID is provided.
     *
     * @method unbind
     * @param  {String} eventType
     * @param  {Number} id
     * @return {undefined}
     */

    unbind: function (eventType, id) {
        if (typeof id === 'number') {
            this.callbacks[eventType][id] = null;
        } else {
            this.callbacks[eventType] = [];
        }
    },

    /**
     * Register a callback that will unbind after it fires once
     *
     * @method once
     * @param  {String}   eventType
     * @param  {Function} callback
     * @return {undefined}
     */

    once: function (eventType, callback) {
        var id;

        id = this.on(eventType, function (eventData) {
            callback.call(this, eventData);
            this.unbind(eventType, id);
        });
    },

    /**
     * Fires callbacks registered for given event type with optional event metadata.
     *
     * @method fire
     * @param  {String} eventType
     * @param  {Object} eventData
     * @return {undefined}
     */

    fire: function (eventType, eventData) {
        var i,
            ii;

        if (typeof this.callbacks[eventType] !== 'undefined') {
            for (i = 0, ii = this.callbacks[eventType].length; i < ii; i++) {
                // Run callbacks for non-null values
                if (this.callbacks[eventType][i]) {
                    this.callbacks[eventType][i].call(this, eventData);
                }
            }
        }
    }

};

/**
 * Mixin the Komponent methods to an existing object.
 * @method mix
 * @param  {Object} target
 * @return {undefined}
 */

Komponent.mix = function (target) {
    var method;

    // Target object needs a place to store callback references
    target.callbacks = {};

    for (method in Komponent.mixin) {
        target[method] = Komponent.mixin[method];
    }
};

// Objects created using the 'new' operator only get the event methods and not 'mix' since it's a utility

Komponent.prototype = Komponent.mixin;
