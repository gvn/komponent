###

  Dependencies:

  + npm
  + grunt-cli
    > npm install -g grunt-cli

  Setup:

  > npm install

###

module.exports = (grunt) ->

  grunt.initConfig
    pkg: grunt.file.readJSON('package.json')

    uglify:
      options:
        banner: '/*! <%= pkg.name %> <%= pkg.version %> <%= grunt.template.today("yyyy-mm-dd HH:MM") %> */\n'
      build:
        src: 'komp.js'
        dest: 'komp.min.js'

    connect:
      server:
        options:
          port: 8000
          base: '.'

    qunit:
      all:
        options:
          urls: ['http://localhost:8000/test/runner.html']

  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.loadNpmTasks('grunt-contrib-connect')
  grunt.loadNpmTasks('grunt-contrib-qunit')

  grunt.registerTask('default', ['uglify'])
  grunt.registerTask('test', ['connect', 'qunit'])
