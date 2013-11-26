var glance = require('glance')

glance
  .createGlance({
    port: 9966,
    indexing: true,
    indices: ['index.html'],
    verbose: true
  }).start()
