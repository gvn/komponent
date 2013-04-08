/*global $: false, console: false, Komponent: false */
/*jslint browser: true, sloppy: true, forin: true, plusplus: true, maxerr: 50, indent: 4 */

/*

    %COMPONENT_NAME%
    VERSION 0.0.1
    AUTHOR %AUTHOR%

    DEPENDENCIES:

    - component.js
    - jQuery 1.7.2

    TODO:

    -

*/

var %NAMESPACE% = window.%NAMESPACE% || {};

%NAMESPACE%.%COMPONENT_NAME% = function (options) {
    var self = this,
        defaults;

    // Options

    defaults = {};
    $.extend(defaults, options);
    self.options = defaults;

    // Element references


    // Properties


    // Setup


    // Event Delegation


};

%NAMESPACE%.%COMPONENT_NAME%.prototype = new Komponent();
