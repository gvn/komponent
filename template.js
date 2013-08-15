/*

    %COMPONENT_NAME%
    VERSION 0.0.1
    AUTHOR %AUTHOR%

*/

var %NAMESPACE% = window.%NAMESPACE% || {};

%NAMESPACE%.%COMPONENT_NAME% = function (options) {
    var self = this,
        defaults,
        option;

    self.callbacks = {};

    // Options ----------------------------------------------------------------

    defaults = {};

    for (option in options) {
        defaults[option] = options[option] || defaults[option];
    }

    self.options = defaults;

    // Element references -----------------------------------------------------


    // Properties -------------------------------------------------------------


    // Setup ------------------------------------------------------------------


    // Event Delegation -------------------------------------------------------


};

%NAMESPACE%.%COMPONENT_NAME%.prototype = new Komponent();
