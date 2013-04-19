![Komponent](https://dl.dropboxusercontent.com/u/268451/komponent-logo.png)

**A base class for event driven JavaScript components.**

Author: [Gvn Lazar Suntop](mailto:gavin@gsuntop.com)

## Installation

Komponent can be used stand-alone, but the **komp** utility makes creating components easier.

To install **komp** using [npm](https://npmjs.org/) run the following command:

`npm install -g komponent`

Afterward you can create a new component by running `komp`. It will prompt you for various metadata and create a new JavaScript component file based on the [starter template](https://github.com/gvn/komponent/blob/master/template.js).

## Typical Usage

Include **[komponent.min.js](https://github.com/gvn/komponent/raw/master/komponent.min.js)** in your project. New components inherit from `Komponent`.

Run **komp** to interactively create a new component via the command line.

All new Komponents have a basic event API for subscribing callback functions both internally and externally.

Add calls to the `fire` method wherever you want subscribable custom events. You can optionally provide event metadata to be passed to the callback function with an object literal.

```javascript
Widget.prototype.show = function () {
    this.fire('show', { visibleItems: 3 });
}
```

You can now subscribe an external callback function, which will execute after the component fires the named event.

```javascript
var myWidget = new Widget();

myWidget.on('show', function (event) {
    alert('myWidget is showing ' + event.visibleItems + ' items');
}
```

## Komponent as Mixin

You can also use Komponent's event system on existing objects as a mixin.

Komponent has a utility method, `mix`, for accomplishing this. 

```javascript
var existingObject = {};

Komponent.mix(existingObject);
```

Alternatively, you can access the Komponent event module by referencing `Komponent.mixin` directly.


## Event API

**on** ( eventType: `string`, callback: `function` )

Bind a callback function to a named event type.

**unbind** ( eventType: `string`, id: `number` - *optional* )

Unbind callbacks for given event type. All callbacks of given type will be removed if no ID is provided.

**once** ( eventType: `string`, callback: `function` )

Register a callback that will unbind after it fires once.

**fire** ( eventType: `string`, eventData: `object` - *optional* )

Fires callbacks registered for given event type with optional event metadata.
