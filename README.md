# Komponent.js

**A base class for JavaScript components.**

Author: [Gvn Lazar Suntop](mailto:gavin@gsuntop.com)


## Typical Usage

Include **komponent.min.js**. New components inherit from `Komponent`.

Run **komp** to interactively create a new component via the command line. 

All new Komponents have a basic event API for subscribing callback functions both internally and externally.

Add calls to the `fire` method wherever you want subscribable custom events. You can optionally provide event metadata to be passed to the callback function with an object literal.  

```javascript
Component.prototype.show = function () {
    this.fire('show', {visibleItems: 3});
}
```

You can now subscribe an external callback function, which will execute after the component fires the named event.

```javascript
var myComponent = new Component();

myComponent.on('show', function (event) {
    alert('myComponent is showing ' + event.visibleItems + ' items');
}
```

## Event API

**on** ( eventType: `string`, callback: `function` )

Bind a callback function to a named event type.

**unbind** ( eventType: `string`, id: `number` - *optional* )

Unbind callbacks for given event type. All callbacks of given type will be removed if no ID is provided.

**once** ( eventType: `string`, callback: `function` )

Register a callback that will unbind after it fires once.

**fire** ( eventType: `string`, eventData: `object` - *optional* )

Fires callbacks registered for given event type with optional event metadata.



## CLI

Komponent can be used stand-alone, but the **komp** utility makes creating components easier.

To install **komp** using [npm](https://npmjs.org/) run the following command:

`npm install -g komponent`

Afterward you can create a new component by running `komp`. It will prompt you for various metadata and then create a new JavaScript component file.
