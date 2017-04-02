require-app-root
================

[![Greenkeeper badge](https://badges.greenkeeper.io/unlight/require-app-root.svg)](https://greenkeeper.io/)

# PROJECT ABANDONED. USE [requiro](https://www.npmjs.com/package/requiro) INSTEAD

Hack for function `require` allows to load a module from the application root folder, 
using `~/` as in the asp.net's methods (LoadControl, etc.)

INSTALLATION
------------
`npm install --save require-app-root`

USAGE
-----
Somewhere in bootstrap file of your project:
```js
require("require-app-root");
```
Then you can use `require` with `~/`
```js
var user = require("~/library/user.js");
```

NOTES
-----
It is enough to make `require("require-app-root")` once,
there is no need to insert it in each file of your application.