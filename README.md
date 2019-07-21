# Overview

This project contains an implementation of `heatmap` chart, modelled after [HTML5 canvas based heatmaps][ref-heatmap], which was missing a react implementation.

The `Heatmap` component in this project uses the same core algorithm to paint heatmap on HTML5 canvas with slight modifications to work with React lifecycle methods.

Following screenshot shows the default heatmap view with sample data.  `data.js` conatins the sample data in `[x, y, occurances]` format.

![screenshot1]

Limitations:

- Heatmap underlying canvas is currently not responsive

## Usage

Refer to `component/app.js` on basic usage.

## Heatmap API

TBD

## Setup Instructions

- Update `src/config_dev.js` with your canvas dimensions.
- Install `node_modules` dependencies using `yarn`
  - `yarn install`
- Launch the application locally using Webpack Development Server (WDS).
  - `yarn start`
- Alternatively, if in VSCode, launch the server using the `Launch Webpack Development Server (WDS)` in VSCode `Debug` view.
- In order to distrubute the application (S3 for example):
  - `yarn build`
  - copy `build.js`, `style/*`, `image/*`, `index.html` to S3 static website

## License

ISC

<!-- References -->
[ref-heatmap]: https://github.com/pa7/heatmap.js
[screenshot1]: ./docs/heatmap_1.png
