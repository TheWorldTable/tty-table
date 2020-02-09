const tasks = arr => arr.join(' && ')

module.exports = {
  'hooks': {
    'pre-commit': tasks([
      "npm run lint",
      "npm run lint-examples",
      "npm run test",
      "npm run dist",
      "git add dist/"
    ])
  }
}
