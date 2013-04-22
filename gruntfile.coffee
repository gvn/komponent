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
        src: 'komponent.js'
        dest: 'komponent.min.js'

    connect:
      server:
        options:
          port: 8000
          base: '.'

    qunit:
      uncompressed:
        options:
          urls: ['http://localhost:8000/test/runner.html']
      minified:
        options:
          urls: ['http://localhost:8000/test/runner-min.html']

    yuidoc:
      compile:
        name: '<%= pkg.name %>'
        description: '<%= pkg.description %>'
        version: '<%= pkg.version %>'
        url: '<%= pkg.homepage %>'
        options:
          paths: '.'
          outdir: 'docs/'

    compress:
      main:
        options:
          archive: 'npm/npm-module.tgz'
          mode: 'tgz'
          pretty: true
        files: [
          (src: 'npm/komp.sh', dest: '/')
          (src: 'npm/package.json', dest: '/')
          (src: 'npm/README.md', dest: '/')
        ]


  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.loadNpmTasks('grunt-contrib-connect')
  grunt.loadNpmTasks('grunt-contrib-qunit')
  grunt.loadNpmTasks('grunt-contrib-yuidoc')
  grunt.loadNpmTasks('grunt-contrib-compress')

  grunt.registerTask('default', ['connect', 'qunit:uncompressed', 'uglify', 'qunit:minified', 'compress'])
  grunt.registerTask('test', ['connect', 'qunit:uncompressed'])
  grunt.registerTask('doc', ['yuidoc'])
