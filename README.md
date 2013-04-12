# Komponent.js

Author: [Gvn Lazar Suntop](mailto:gavin@gsuntop.com)

A base class for JavaScript components and a generator for component scaffolding.


## Event API

Komponents have an event API allowing for external and internal callbacks for custom events.

- **on** ( eventType: `string`, callback: `function` )
- **unbind** ( eventType: `string`, id: `number` )
- **once** ( eventType: `string`, callback: `function` )
- **fire** ( eventType: `string`, eventData: `object` )

## CLI

Komponent can be used stand-alone, but the bundled **komp** script makes generating new components easier.

To install **komp** using [npm](https://npmjs.org/) run the following command:

`npm install -g komponent`

Afterward you can create a new component by running `komp`. It will prompt you for various metadata and then create a new JavaScript component file.