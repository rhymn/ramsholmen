module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            files: ['<%= jshint.files %>'],
            tasks: ['jshint']
        },

        jshint: {
            options: {
                force: true,
                asi: true
            },

            files: ['Gruntfile.js', 'js/*.js']
        },

        shell: {
            launch: {
              options: {
                stdout: true
              },
              command: 'node server.js'
            }
        },

        concurrent: {
            watchers: {
                tasks: ['shell', 'browserSync', 'jshint', 'watch'],
                options: {
                    logConcurrentOutput: true
                }
            }
        },        

        browserSync: {
            dev: {
               options: {
                    proxy: "localhost:3200",
                    port: "3002",
                    files: "css/*, **/*.html, *.js, js/**/*.js"
                }
            }
        }
    });

    grunt.loadNpmTasks("grunt-concurrent");
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ["concurrent:watchers"]);
};
