const test = require('ava')
const isClassFn = require('../src/is-class-function')

test('is-class-function(fn) checks if fn is a Function', t => {
  t.false(isClassFn(null))
  t.false(isClassFn())
  t.false(isClassFn('function'))
  t.false(isClassFn(1))
  t.false(isClassFn({}))
  t.false(isClassFn([]))
})

test('is-class-function(fn) checks if fn is a Class', t => {
  class EmptyClass {}
  class SecondClass extends EmptyClass {}
  function func() {}
  const arrowFn = () => {}
  const asyncFn = async function() {}

  t.true(isClassFn(EmptyClass))
  t.true(isClassFn(SecondClass))
  t.false(isClassFn(func))
  t.false(isClassFn(arrowFn))
  t.false(isClassFn(asyncFn))
})

test('is-class-function(fn) checks some native Classes', t => {
  t.false(isClassFn(Object))
  t.false(isClassFn(Function))
  t.false(isClassFn(Number))
  t.false(isClassFn(Boolean))
  t.false(isClassFn(Array))
  t.false(isClassFn(String))
  t.false(isClassFn(Date))
  t.false(isClassFn(Array))
})

test('is-class-function(fn) supports classes declared in ES5 style but with at least one additional method in prototype', t => {
  function ES5Class() {}
  ES5Class.prototype.method = function() {}
  
  t.true(isClassFn(ES5Class))
})

test('is-class-function(fn) supports classes declared in ES5 style but with inheritance', t => {
  function ES5Class() {}
  
  function ES5ChildClass() {}
  ES5ChildClass.prototype = Object.create(ES5Class.prototype)
  ES5ChildClass.prototype.constructor = ES5ChildClass

  t.true(isClassFn(ES5ChildClass))
})
