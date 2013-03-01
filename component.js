/*global $: false, console: false, callbackMixins: false */
/*jslint browser: true, sloppy: true, forin: true, plusplus: true, maxerr: 50, indent: 4 */

/*

    %COMPONENT_NAME%
    VERSION 0.0.1
    AUTHOR %AUTHOR%

    DEPENDENCIES:

    - callback.js
    - jQuery 1.7.2

    TODO:

    -

*/

var %NAMESPACE% = window.%NAMESPACE% || {};

%NAMESPACE%.%COMPONENT_NAME% = function (target, options) {
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

};

%NAMESPACE%.%COMPONENT_NAME%.prototype = {
    bind: callbackMixins.bind,
    unbind: callbackMixins.unbind,
    fire: callbackMixins.fire
};
