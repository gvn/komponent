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

Komp.prototype = {

    // on(eventType:String, callback:Function)
    // Bind a callback function to a named event type.

    on: function (eventType, callback) {
        if (typeof this.callbacks[eventType] === 'undefined') {
            this.callbacks[eventType] = [];
        }

        this.callbacks[eventType].push(callback);
    },

    // unbind(eventType:String)
    // Unbind all callbacks for given event type.

    unbind: function (eventType) {
        this.callbacks[eventType] = [];
    },

    // TODO

    once: function (eventType, callback) {

    },

    // fire(eventType:String, eventData: Object)
    // Fires callbacks registered for given event type with optional event metadata.

    fire: function (eventType, eventData) {
        var i,
            ii;

        if (typeof this.callbacks[eventType] !== 'undefined') {
            for (i = 0, ii = this.callbacks[eventType].length; i < ii; i++) {
                this.callbacks[eventType][i].call(this, eventData);
            }
        }
    }

};
