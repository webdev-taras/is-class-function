const toString = Function.prototype.toString

module.exports = function(fn) {
  return (typeof(fn) === 'function')
    && (toString.call(fn).startsWith('class')
      || ( !!fn.prototype
        && fn.prototype.constructor === fn
        && Object.keys(fn.prototype).length > 0
      )
    )
}
