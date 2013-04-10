/*jslint browser: true, sloppy: true, forin: true, plusplus: true, maxerr: 50, indent: 4 */

/*

    Komp

    A base "class" for JavaScript components.

    VERSION 0.1.0
    AUTHOR Gvn Lazar Suntop

    DEPENDENCIES:

    - jQuery 1.7.2

    TODO:

    -

*/

if (typeof window.Komp !== 'undefined') {
    throw 'Global "Komp" already in use.';
}

window.Komp = function () {};

window.Komp.prototype = {

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
            // nullify callback at specific address
            this.callbacks[eventType][id] = null;
        } else {
            // unbind all callbacks if an id is unspecified
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
