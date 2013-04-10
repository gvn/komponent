# Komponent

Author: [Gvn Lazar Suntop](mailto:gavin@gsuntop.com)

A base class for JavaScript components and a generator for component scaffolding.


## Event API

- **on** ( eventType: `string`, callback: `function` )
- **unbind** ( eventType: `string`, id: `number` )
- **once** ( eventType: `string`, callback: `function` )
- **fire** ( eventType: `string`, eventData: `object` )

## Bash CLI

Komponent can be used stand-alone, but the bundled **komp** script makes generating new components easier.