/*global test: false, equal: false, ok: false, Widget: false, strictEqual: false */
/*jslint browser: true, sloppy: true, forin: true, plusplus: true, maxerr: 50, indent: 4 */

test('One external event handler', function () {
    var myWidget = new Widget(),
        callbackFired = false;

    myWidget.on('action', function () {
        callbackFired = true;
    });

    myWidget.action();

    ok(callbackFired, 'Callback fired when it\'s subscribed.');
});

test('One internal event handler', function () {
    var myWidget = new Widget();

    myWidget.action();

    ok(myWidget.actionHappened, 'Internal callback fired.');
});

test('Multiple external event handlers for same event', function () {
    var myWidget = new Widget(),
        callbacksFired = 0;

    myWidget.on('action', function () {
        callbacksFired += 1;
    });

    myWidget.on('action', function () {
        callbacksFired += 1;
    });

    myWidget.action();

    strictEqual(callbacksFired, 2, 'Both callbacks fired when subscribed.');
});

test('Unbinding an external event handler', function () {
    var myWidget = new Widget(),
        callbackFired = false;

    myWidget.on('action', function () {
        callbackFired = true;
    });

    myWidget.action();
    ok(callbackFired, 'Callback fired when it\'s subscribed.');

    myWidget.unbind('action');
    callbackFired = false;
    myWidget.action();

    ok(!callbackFired, 'Callback didn\'t fire when it\'s unbound.');
});

test('External once event only fires once', function () {
    var myWidget = new Widget(),
        callbacksFired = 0;

    myWidget.once('action', function () {
        callbacksFired += 1;
    });

    myWidget.action();
    myWidget.action();

    strictEqual(callbacksFired, 1, 'Only 1 callback fired.');
});

test('Mixin to existing object', function () {
    var someObject = {},
        callbackFired = false;

    Komponent.mix(someObject);

    someObject.action = function () {
        this.fire('action');
    };

    someObject.on('action', function () {
        callbackFired = true;
    });

    someObject.action();

    ok(callbackFired, 'Callback fired on object with Komponent mixed in.')
});
