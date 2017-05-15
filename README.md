# Create-React-App: A Closer Look
> Nitish Dayal  
> Feb. 19th, 2017

# About

The purpose of this document is to provide an overview of the problem/s Create-React-App 
  attempts to solve, and how that solution is implemented. It will walk through the _flow_
  of Create-React-App and provide insight into what each of the provided scripts do, with the
  intention of explaining _what_ has been abstracted away by Create-React-App. This
  document does not hold any information about customizing the scripts, the actual
  configurations for the various tools put into use by Create-React-App, or information
  regarding how to use those tools.

We will use the Tic-Tac-Toe project from the [Intro To React tutorial](//facebook.github.io/react/tutorial/tutorial.html) as a
   starting point. The components have been split into separate files, and the
   `calculateWinner` function lives in the `utils` folder as a utility function. 
   The source code can be found [here](./tic_tac_toe/). Feel free to 
   clone the project and follow along.

# Introduction

## The Problem

As single-page applications and the needs of our users have grown 
  in complexity, so has the landscape of front-end development. The days of an 
  HTML page, some CSS, and one (or a few) independent JavaScript files loaded in 
  `<script>` tags are long since gone. Modern single-page applications created with
  libraries like React consist of multiple JS files _communicating with one another_ 
  to create a seamless UI experience while limiting the amount of page reloads or 
  calls to the server an application has to wait for. In order to allow these JavaScript 
  files, or _modules_, to communicate with one another in the browser, we need to take 
  advantage of a **module bundler** that will parse through our code, 
  map out dependencies as it comes across them, and build a **bundled** file which can 
  then be understood by the browser.

Most React developers write their applications using ES2015 or later syntax to utilize
  the benefits this iteration of JavaScript provides. However, browser support for
  changes to the JavaScript language are inconsistent at best. To ensure that our applications
  will run smoothly without being dependent on any specific browser platform, we need
  to **transpile** our code from ES2015 down to a version of JavaScript that has better
  support across browsers.

Given that JavaScript can be fairly loose in terms of implementation, there is value
  in providing a set of guidelines and rules that application code must adhere to, as well as
  having a way to test your application against multiple scenarios and build on those tests
  as the application continues to grow. In order to enforce such guidelines, **linters** allow 
  developers to set rules for how code should be written within the scope of their application, 
  and will throw errors or warnings when those rules/guidelines aren't being followed. There
  are also many **testing libraries**, all with unique approaches to syntax
  and testing approach. 

Implementing these tools into a project for the first time can be overwhelming, especially 
  if you're new to modern JavaScript. It's possible to dedicate an entire day to learning
  each of these tools and their respective optimal configurations. This creates a
  large 'barrier of entry' to those interested in React, but maybe lack experience or knowledge
  working with these tools.

## The Solution

Create-React-App creates a development environment with a selection of pre-configured tools
  to handle these needs, and is customizable (via `yarn eject/npm run eject`) if needed. 
  Create-React-App also provides some convenience features, such as: a _live development 
  environment_ (intelligently updates your app in-browser as you modify your code), boilerplate 
  code, and standard dependencies pre-installed. Developers can initiate applications with 
  Create-React-App and feel confident that the provided environment will be suitable to start 
  getting ideas into development.

It also allows developers who are new to modern JavaScript tools/libraries to begin
  learning React without first having to decide how to set up their individual
  development environments and learn the necessary tools, effectively removing the
  barrier of entry.

---

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
  interactive instance of your application. Any changes made and saved to the source code 
  will be immediately reflected in the running app instance.

## `yarn test/npm run test`

Create-React-App uses the [Jest testing framework](https://facebook.github.io/jest/) to handle
  unit testing. Running this command will start the test runner in 'watch' mode, meaning as
  you make changes to your code the tests will rerun to ensure they continue to pass. To exit
  from this script, press Ctrl+C while your terminal is selected as the active window.

Covering the Jest framework is well outside the scope of this document, and is already quite
  thoroughly documented on the official website, and an introduction is available in the 
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

**WARNING: EJECTING IS A ONE-WAY ROAD. THERE IS NO 'REWIND' FEATURE.**

<!--

  TODO: Provide breakdown of dependencies, folder structure, understanding flow of script calls
  from package.json > scripts/*, and not a thing more. Any information outside of that feels like
  it would go outside the scope of a document of this sort.

-->
