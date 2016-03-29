module.exports = function (config) {
  config.set({
    browsers: ['PhantomJS'],
    frameworks: ['browserify', 'jasmine'],
    files: ['test/**/*.js'],
    reporters: ['spec'],
    preprocessors: {
      'test/**/*.js': ['browserify']
    },
    browserify: {
      debug: true,
      plugin: [require('proxyquireify').plugin]
    },
    singleRun: true
  })
}
