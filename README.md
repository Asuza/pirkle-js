pirkle-js
=========

A simple utility for common JavaScript tasks.

Example Usage
-------------
Include pirkle.js file in your web page, then only load the classes you want.

Example:
```javascript
var callbackFn = function () {
  console.log('hello, programmer');
};

Pirkle.load('Ajax', 'Object', 'Cookie', callbackFn);
```

The callback function will get called one time, after the desired classes have loaded.

Classes
-------
* Cookie
* Form
* Ajax
* Object
* Array
* String
* Dom