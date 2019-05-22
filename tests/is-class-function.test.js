const test = require('ava')
const isClassFn = require('../src/is-class-function')

test('is-class-function(fn) checks if fn is a Function', t => {
  t.true(isClassFn(function() {}))
  t.false(isClassFn())
  t.false(isClassFn('function'))
  t.false(isClassFn(1))
  t.false(isClassFn({}))
  t.false(isClassFn([]))
})

test('is-class-function(fn) checks if fn is a Class', t => {
  class EmptyClass {}
  class SecondClass extends EmptyClass {}
  function ES5Class() {}
  t.true(isClassFn(EmptyClass))
  t.true(isClassFn(SecondClass))
  t.true(isClassFn(ES5Class))
})

test('is-class-function(fn) checks some native Classes', t => {
  t.true(isClassFn(Object))
  t.true(isClassFn(Function))
  t.true(isClassFn(Number))
  t.true(isClassFn(Boolean))
  t.true(isClassFn(Array))
  t.true(isClassFn(String))
  t.true(isClassFn(Date))
  t.true(isClassFn(Array))
})