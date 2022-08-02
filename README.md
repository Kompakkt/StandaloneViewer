# Kompakkt Standalone Viewer

## What is this?

This repository hosts a JavaScript file which can be included on any website to use the Kompakkt Viewer without needing to use the Kompakkt Repository or the Kompakkt Server.

## How to use the viewer in standalone mode?

Include the `kompakkt-standalone.js` or the `kompakkt-standalone.min.js` JavaScript file in your pages HTML, preferably in the `<head>`-section

```html
<head>
  <!-- Some code... -->
  <script type="text/javascript" src="kompakkt-standalone.js" defer></script>
</head>
```

This file will add a custom element called `<app-kompakkt>`, which can now be used to load the standalone version of the viewer.
By default, this will target the [Kompakkt instance hosted at the University of Cologne](https://kompakkt.de/viewer/index.html).

The `<app-kompakkt>`-element needs at mininum the `endpoint` and the `resource` attributes to work.

| Attribute   | Optional | Description |
| -- | -- | -- |
| endpoint | No | The fileserver where your resource is hosted. E.g., if your resource ist hosted at "https://example.com/static/models/my-model.glb", the endpoint would be "https://example.com/static/models/". |
| resource | No | The filename of the resource to be loaded from the endpoint. E.g., if your resource ist hosted at "https://example.com/static/models/my-model.glb", the filename would be "my-model.glb". |
| instance | Yes | The instance where the Kompakkt viewer is hosted. This defaults to the University of Cologne Kompakkt instance. |
| settings | Yes | The filename of the settings file associated with the loaded resource. If settings are not set, they can be created and exported inside of the standalone Kompakkt Viewer. |
| annotations | Yes | The filename of the annotations file associated with the loaded resouce. If no annotations file is given, annotations can be created and exported inside of the standalone Kompakkt Viewer. |

```html
<body>
  <!-- Some code... -->
  <app-kompakkt endpoint="https://example.com/static/models" resource="my-model.glb"></app-kompakkt>
</body>
```
