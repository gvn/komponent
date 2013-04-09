###

    Dependencies:

    + npm
    + grunt-cli
        > npm install -g grunt-cli

    Setup:

    > npm install

###

module.exports = (grunt) ->

    grunt.initConfig(
        pkg: grunt.file.readJSON('package.json')
        uglify:
            options:
                banner: '/*! <%= pkg.name %> <%= pkg.version %> <%= grunt.template.today("yyyy-mm-dd HH:MM") %> */\n'
            build:
                src: 'komp.js'
                dest: 'komp.min.js'
    )

    grunt.loadNpmTasks('grunt-contrib-uglify')
    grunt.registerTask('default', ['uglify'])
