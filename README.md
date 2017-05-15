# Create-React-App: A Closer Look

> Nitish Dayal  
> Last Commit Date: May 15th, 2017

# About

The purpose of this document is to provide an overview of the problem/s Create-React-App
  attempts to solve, and how that solution is implemented. It will walk through the _flow_
  of Create-React-App and provide insight into what each of the provided scripts do, with the
  intention of explaining _what_ has been abstracted away by Create-React-App. This
  document does not hold any information about customizing the scripts, the actual
  configurations for the various tools put into use by Create-React-App, or information
  regarding how to use those tools.

We will use the Tic-Tac-Toe project from the [Intro To React tutorial](//facebook.github.io/react/tutorial/tutorial.html)
   as a starting point. The components have been split into separate files, and the
   `calculateWinner` function lives in the `utils` folder as a utility function.
   The source code can be found [here](./tic_tac_toe/). Feel free to
   clone the project and follow along.

# Introduction

## The Problem

As single-page applications and the needs of our users have grown
  in complexity, so has the landscape of front-end development. Modern single-page
  applications can consist of multiple JS files _communicating with one another_ in order
  to manipulate the DOM, reducing (and in some cases eliminating) the need to request
  files from a server to update an application's UI. To allow for these JavaScript
  files, or _modules_, to interact efficiently in the browser, one option is to take
  advantage of a **module bundler**. A module bundler will parse through our code,
  mapping out dependencies as it comes across them, to **bundle** our application together
  in a way that the browser can understand, while still allowing developers to maintain
  modularity and separation in the codebase.

Some React developers write their applications using ES2015+ to utilize
  the benefits provided by the latest JavaScript syntax. However, browser support for
  changes to the JavaScript language are inconsistent at best, and we want users of our applications
  to have the same experience regardless of their browser choice. To ensure that our applications
  will run consistently and smoothly across browsers, we need to **transpile** our code
  from ES2015 down to a version of JavaScript that has better support across popular browsers.

Given that JavaScript can be fairly loose in terms of implementation it's beneficial
  to provide a set of rules and guidelines that application code must adhere to, as well as
  to provide a way to test your application against multiple scenarios and build on those tests
  as the application continues to grow. In order to enforce such guidelines, **linters** allow
  developers to set rules for how code should be written within the scope of their application,
  and will throw errors or warnings when those rules/guidelines aren't being followed. There
  are also many **testing libraries**, with variations in their approach to _how_ an application
  is tested.

Implementing these tools into a project for can be time consuming and overwhelming, especially
  if you're already trying to learn the tools while also learning a new library or framework. 
  This creates a large 'barrier of entry' to those interested in React, but maybe lack experience 
  working with these tools.

## The Solution

Create-React-App provides a development environment with a selection of pre-configured tools
  to handle these needs, while providing some flexibility and customization options.
  Create-React-App also provides some convenience features, such as: a _live development
  environment_ (intelligently updates your app in-browser as you modify your code), boilerplate
  code, and standard dependencies pre-installed. Developers can initiate applications via
  Create-React-App with confidence that the tools and configurations will allow them to
  take their application from development to deployment.

It also allows developers who are new to modern JavaScript tools/libraries to begin
  learning React _without_ first having to decide how to set up their individual
  development environments and learn the necessary tools, effectively removing the
  barrier of entry.

* * *

# Create-React-App Development Flow

Application Directory Structure:

```shell
├── node_modules/
├── public/
│   ├── favicon.ico
│   └── index.html
├── src/
│   ├── components/
│   │   ├── board.js
│   │   ├── game.js
│   │   └── square.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   └── utils/
│       └── index.js
├── package.json
├── README.md
└── yarn.lock

4 directories, 12 files
```

## `yarn start/npm start`

A **module bundler** parses through the application starting at `src/index.js`, following
  any `import`ed modules, until it has a complete dependency graph. It uses this dependency
  graph to create a single JavaScript file consisting of all modules used by the app,
  _injects_ the file via `script` tag into `public/index.html`, and starts a development
  server on `http://localhost:3000`. Navigating to this URL in the browser will show a live,
  interactive instance of your application. Any changes saved to the source code
  will reflect in the running app instance automatically.

## `yarn test/npm run test`

Create-React-App uses the [Jest testing framework](https://facebook.github.io/jest/) to handle
  unit testing. Running this command will start the test runner in 'watch' mode; as
  you make changes to your code the tests will rerun to ensure they continue to pass. To stop
  this script, press Ctrl+C while your terminal is selected as the active window.

Covering the Jest framework is well outside the scope of this document, and is already quite
  thoroughly documented on the official website. An introduction is available in the
  [Running Tests](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#running-tests)
  section of the Create-React-App documentation.

## `yarn build/npm run build`

Post-Build Directory Structure:

<!--

  TODO: Provide explanation of what happens when 'yarn build' is called, how it
  differs from 'yarn start' in terms of the bundling process, how to load the
  build output in a browser without deploying, an explanation of the assets-manifest.json
  file, and an introduction to sourcemaps.

-->

```shell
├── build/
│   ├── asset-manifest.json
│   ├── favicon.ico
│   ├── index.html
│   └── static/
│       ├── css/
│       │   ├── main.09253d15.css
│       │   └── main.09253d15.css.map
│       └── js/
│           ├── main.c97b4c53.js
│           └── main.c97b4c53.js.map
├── public/
│   ├── favicon.ico
│   └── index.html
├── src/
│   ├── components/
│   │   ├── board.js
│   │   ├── game.js
│   │   └── square.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   └── utils/
│       └── index.js
├── package.json
├── README.md
└── yarn.lock

8 directories, 19 files
```

## `yarn eject/npm run eject`

**WARNING: EJECTING IS PERMANENT. There is no 'rewind' feature.**

<!--

  TODO: Provide breakdown of dependencies, folder structure, understanding flow of script calls
  from package.json > scripts/*, and not a thing more. Any information outside of that feels like
  it would go outside the scope of a document of this sort.

-->
