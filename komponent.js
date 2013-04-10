/*jslint browser: true, sloppy: true, forin: true, plusplus: true, maxerr: 50, indent: 4 */

/*

    Komponent

    A base "class" for JavaScript components.

    VERSION 0.2.0
    AUTHOR Gvn Lazar Suntop

    TODO:

    -

*/

if (typeof window.Komponent !== 'undefined') {
    throw 'Global "Komponent" already in use.';
}

window.Komponent = function () {};

window.Komponent.prototype = {

    // Bind a callback function to a named event type.

    // eventType:String, callback:Function

    on: function (eventType, callback) {
        if (typeof this.callbacks[eventType] === 'undefined') {
            this.callbacks[eventType] = [];
        }

        this.callbacks[eventType].push(callback);

        // Return callback index in case you want to unbind only this callback
        return this.callbacks[eventType].length - 1;
    },

    // Unbind callbacks for given event type.
    // All callbacks of given type will be removed if no ID is provided.

    // eventType:String, id:Number

    unbind: function (eventType, id) {
        if (typeof id === 'number') {
            this.callbacks[eventType][id] = null;
        } else {
            this.callbacks[eventType] = [];
        }
    },

    // Register a callback that will unbind after it fires once

    // eventType:String, callback:Function

    once: function (eventType, callback) {
        var id;

        id = this.on(eventType, function (eventData) {
            callback.call(this, eventData);
            this.unbind(eventType, id);
        });
    },

    // Fires callbacks registered for given event type with optional event metadata.

    // eventType:String, eventData: Object

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