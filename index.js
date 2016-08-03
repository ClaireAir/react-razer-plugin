const ReactRazerPlugin = function(bundle) {
  insertShallowRender(bundle) {
    // Insert shallow rendering checks
  }
  
  unusedVariables = function(bundle) {
    // Remove unused variables
  }
  
  unreachableJSX = function(bundle) {
    // Remove unreachable JSX
  }
  
  unresolvedClassnames = function(bundle) {
    // Remove all classnames that don't resolve to a style module
  }
}
