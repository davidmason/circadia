# circadia (alpha)

Helper to plan and track work. Make and track daily and weekly plans towards enduring goals.

## Key Features

This is in alpha until these key features are implemented.

 - [ ] simple timers
   - [ ] stopwatch (count up)
   - [ ] countdown
   - [ ] pause/resume
   - [ ] restart
   - [ ] overshoot countdown (count up until stopped)
   - [ ] audio cues (start, end, in-progress)
 - [ ] multi-phasic timers (e.g. prep phase, work phase, wrap-up phase)
   - [ ] automatic or manual phase transitions
 - [ ] infinitely nesting tasks
   - [ ] expand/collapse nested tasks
   - [ ] drag and drop tasks to any level
   - [ ] focus whole view on any single task
 - [ ] progress bar per task (based on number of items completed)
   - [ ] toggle to base progress on today/this week/all
 - [ ] record time per task
   - [ ] current task marker determines task
   - [ ] time from timers is recorded against current task
   - [ ] split time between tasks if current task changes during a timer
   - [ ] toggle view of task-time/task+subtasks-time/time-chunks-detail
   - [ ] manually add, remove and adjust chunks of time
 - [ ] tag tasks as **today** or **this week**
   - [ ] filter view to only today's tasks
   - [ ] filter view to only this week's tasks
 - [ ] detail pane per task
   - [ ] split view detail pane (separate from task list)
   - [ ] inline detail pane (within task list)
 - [ ] edit task name and detail as markdown


## Technology

This aims to be a webapp with the option to package as a mobile app.

Will initially be a single-page react/redux app built with webpack and babel,
using local storage as a backend. It will use eslint and flow to help avoid
common errors.

Based on https://github.com/nicksp/redux-webpack-es6-boilerplate


## Development

There are two ways in which you can build and run the web app:

* Build once for (ready for ***Production***):
  * `$ npm run build`
  * Open `build/index.html` through the local webserver


* Hot reloading via webpack dev server:
  * `$ npm start`
  * Point your browser to http://localhost:3000/, page hot reloads automatically when there are changes

## Testing

To execute all unit tests, use:

```sh
npm run test
```

To run unit tests continuously during development (watch tests), use:

```sh
npm run test:watch
```

## FAQ

### What's happening under the hood when I run `npm start`?

Webpack serves your app in memory when you run `npm start`. No physical files are written. However, the web root is /src, so you can reference files under /src in index.html. When the app is built using `npm run build`, physical files are written to `/build` folder and the app is served from `/build`.

### How is Sass being processed?

We're handling it differently in DEV vs PROD.

When you run `npm start`:

 1. The sass-loader compiles Sass into CSS
 2. Webpack bundles the compiled CSS into app.js. Sounds weird, but it works!
 3. app.js contains code that loads styles into the &lt;head&gt; section of index.html via JavaScript. This is why there is no stylesheet reference in index.html. In fact, if you disable JavaScript in your browser, you'll see the styles don't load either.

The approach above supports hot reloading, which is great for development. However, it also create a flash of unstyled content on load because you have to wait for the JavaScript to parse and load styles before they're applied. So for the production build, we use a different approach:

When you run `npm run build`:

 1. The sass-loader compiles Sass into CSS
 2. The [extract-text-webpack-plugin](https://github.com/webpack/extract-text-webpack-plugin) extracts the compiled Sass into app.css
 3. buildHtml.js adds a reference to the stylesheet to the head of index.html.

### How do I deploy this?

`npm run build`. This will prepare and build the project for production use. It does the following:

- Minifies all JS and CSS
- Inline base64 URLs for images and fonts if their size is less than specified limit
- Sets NODE_ENV to `production` so that React is built in production mode
- Places the resulting built project files into `/build` directory. (This is the folder you'll expose to the world).

## License

[MIT](http://opensource.org/licenses/MIT)

