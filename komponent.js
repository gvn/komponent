/*jslint browser: true, sloppy: true, forin: true, plusplus: true, maxerr: 50, indent: 4 */

/*

    Komponent

    A base "class" for JavaScript components.

    VERSION 0.1.0
    AUTHOR Gvn Lazar Suntop

    DEPENDENCIES:

    - jQuery 1.7.2

    TODO:

    -

*/

if (typeof window.Komponent !== 'undefined') {
    throw 'Global "Komponent" already in use.';
}

var Komponent = function () {};

Komponent.prototype = {

    // on(eventType:String, callback:Function)
    // Bind a callback function to a named event type.

    on: function (eventType, callback) {
        var self = this;

        if (typeof self.callbacks[eventType] === 'undefined') {
            self.callbacks[eventType] = [];
        }

        self.callbacks[eventType].push({
            callback: callback
        });
    },

    // unbind(eventType:String)
    // Unbind all callbacks for given event type.

    unbind: function (eventType) {
        var self = this;

        self.callbacks[eventType] = [];
    },

    // TODO

    once: function (eventType, callback) {
        var self = this;


    },

    // fire(eventType:String, eventData: Object)
    // Fires callbacks registered for given event type with optional event metadata.

    fire: function (eventType, eventData) {
        var self = this,
            i,
            ii;

        if (typeof self.callbacks[eventType] !== 'undefined') {
            for (i = 0, ii = self.callbacks[eventType].length; i < ii; i++) {
                self.callbacks[eventType][i].callback.call(self, eventData);
            }
        }
    }

};
