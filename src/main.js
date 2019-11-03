if(require.main === module) {
  //called directly in terminal
  require("./../adapters/terminal-adapter.js")
} else {
  //called as a module
  module.exports = require("./../adapters/default-adapter.js")
}
