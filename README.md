# is-class-function

Checks if function is an ES6 class.
Supports classes declared in ES5 style but with at least one additional method in prototype or ES5 classes with inheritance.
Native classes like Object, String, Function etc. treats as not a class-functions.

## Install

> Install on Node.JS with [npm](https://www.npmjs.com/)

```bash
npm install is-class-function
```

## Usage

ES6 classes:
```javascript
const isClassFn = require('is-class-function')

class EmptyClass {}
isClassFn(EmptyClass) // true

class SecondClass extends EmptyClass {}
isClassFn(SecondClass) // true
```

ES5 classes:
```javascript
const isClassFn = require('is-class-function')

function func() {}
isClassFn(func) // false

const arrowFn = () => {}
isClassFn(arrowFn) // false

function ES5Class() {}
ES5Class.prototype.method = function() {}
isClassFn(ES5Class) // true
```

## License

MIT © [Taras Panasyuk](webdev.taras@gmail.com)
