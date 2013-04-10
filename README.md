# Komponent

Author: [Gvn Lazar Suntop](mailto:gavin@gsuntop.com)

A base class for JavaScript components and a generator for new component scaffolding.


## Event API

- **on** ( eventType:*String*, callback:*Function* )
- **unbind** ( eventType:*String*, id:*Number* )
- **once** ( eventType:*String*, callback:*Function* )
- **fire** ( eventType:*String*, eventData:*Object* )

## Bash CLI

Komponent can be used stand-alone, but there is also a bundled "komp" script which makes generating new components quick and simple.
