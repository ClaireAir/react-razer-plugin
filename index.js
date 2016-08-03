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
  
  let modifiedBundle = bundle
  modifiedBundle = insertShallowRender(modifiedBundle)
  modifiedBundle = unusedVariables(modifiedBundle)
  modifiedBundle = unreachableJSX(modifiedBundle)
  modifiedBundle = unresolvedClassnames(modifiedBundle)
  return modifiedBundle
}
