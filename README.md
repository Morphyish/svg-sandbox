# SVG Sandbox

Small project to create and edit SVGs from a web form rather than a graphic software.

Running version can be found at [svg.morphyish.com](https://svg.morphyish.com)

## Get started

*Note that you will need to have [Node.js](https://nodejs.org) installed.*

Clone the project with git...

```bash
git clone https://github.com/Morphyish/svg-sandbox.git
```

...Install the dependencies...

```bash
cd svg-sandbox
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000). You should see the app running. 

## Building and running in production mode

To create an optimised version of the app:

```bash
npm run build
```

You can run the newly built app with `npm run start`. This uses [sirv](https://github.com/lukeed/sirv), which is included in your package.json's `dependencies` so that the app will work when you deploy to platforms like [Heroku](https://heroku.com).
