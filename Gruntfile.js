/**
 * @fileOverview
 * @author Crow
 * @version 0.0.1
 * @time 2015/9/8
 */

/*global module, require*/

module.exports = function (grunt) {
    'use strict';
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        /*grunt-contrib-jade*/
        jade: {
            development: {
                options: {
                    client: false,
                    pretty: true,
                    data: {
                        'uic': '<%= pkg%>'
                    }
                },
                files: [{
                    cwd: 'jade/',
                    src: "index.jade",
                    dest: "example/",
                    expand: true,
                    ext: ".html"
                }]
            }
        },

        /*grunt-groc*/
        groc: {
            doc: [
                "js/*.js", "less/*.less", "README.md"
            ],
            options: {
                "out": "doc/"
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-groc');

    grunt.registerTask('go', ['jade']);
};
