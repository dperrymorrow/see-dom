# see-dom
view the state of your DOM during tests. Will open a browser window showing your your document that you are making assertions on. Assumes `document` is defined.

Useful when you have a `document` defined in your test environment such as when using `browser-env`

## Install
`npm i see-dom --save-dev`

## Usage


```javascript
cosnt SeeDom = require("see-dom");
SeeDom({ css: "/dist/index.css" }).view("title of your test");
```

> the path of the css you pass in is based of `process.cwd()` most commonly the root of your project when running an npm command such as test.
