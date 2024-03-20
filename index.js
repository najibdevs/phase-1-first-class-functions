function receivesAFunction(callback) {
    callback();
  }
  
  function returnsANamedFunction() {
      return function myNamedFunction() {
  
      };
    }
  
  function returnsAnAnonymousFunction() {
      return function() {
  
      }
  }