var glance = require('glance')

glance
  .createGlance({
    port: 99660,
    indexing: true,
    indices: ['index.html'],
    verbose: true
  }).start()
