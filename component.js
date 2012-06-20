/*global $: false, console: false */
/*jslint browser: true, sloppy: true, forin: true, plusplus: true, maxerr: 50, indent: 4 */

/*

	Component Name
	VERSION 0.0.1
	AUTHOR X.X.

	DEPENDENCIES:
	
	- jQuery

	TODO:
	
	- 

*/

window.Component = function (target, options) {
	var self = this,
		defaults;

	// Event subscription setup

	self.events.parent = self;
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

window.Component.prototype = {
	events: {
		actionHappened: function (event) {
			var self = this.parent;

			self.runCallbacks('actionHappened', event);
		}
	},
	action: function () {
		var self = this;

		self.events.actionHappened({metadata: 'More event info...'});
	},
	bind: function (eventType, callback, scope) {
		var self = this;

		if (typeof self.callbacks[eventType] === 'undefined') {
			self.callbacks[eventType] = [];
		}

		self.callbacks[eventType].push({
			callback: callback,
			scope: scope
		});
	},
	unbind: function (eventType) {
		var self = this;

		self.callbacks[eventType] = [];
	},
	runCallbacks: function (eventType, eventData) {
		var self = this,
			i,
			ii;

		if (typeof self.callbacks[eventType] !== 'undefined') {
			for (i = 0, ii = self.callbacks[eventType].length; i < ii; i++) {
				self.callbacks[eventType][i].callback.call(self.callbacks[eventType][i].scope || self, eventData);
			}
		}
	}
};