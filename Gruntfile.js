/*global module:false*/
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        // Metadata.
        concat: {
            options: {
                banner: '<%= banner %>',
                stripBanners: true
            },
            dist: {
                src: ['lib/FILE_NAME.js'],
                dest: 'dist/FILE_NAME.js'
            }
        },
        uglify: {
            options: {
                banner: '<%= banner %>'
            },
            dist: {
                src: '<%= concat.dist.dest %>',
                dest: 'dist/FILE_NAME.min.js'
            }
        },
        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                unused: true,
                boss: true,
                eqnull: true,
                browser: true,
                globals: {}
            },
            gruntfile: {
                src: 'Gruntfile.js'
            },
            lib_test: {
                src: ['lib/**/*.js', 'test/**/*.js']
            }
        },
        qunit: {
            files: ['test/**/*.html']
        },
        watch: {
            gruntfile: {
                files: ['Gruntfile.js']
            },
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    'web/**/*.*'
                ]
            }
        },
        connect: {
            options: {
                port: 7000,
                hostname: 'localhost',
                livereload: 35729
            },
            livereload: {
                options: {
                    open: true,
                    middleware: function(connect) {
                        return [
                            connect.static('web')
                        ];
                    }
                }
            }/*,
            proxies: [{
                context: '/db',
                host: '10.50.24.176',
                port: 7474,
                https: false,
                xforward: false,
                changeOrigin: false
            }, {
                context: '/user',
                host: '10.50.24.176',
                port: 7474,
                https: false,
                xforward: false,
                changeOrigin: false
            }]*/
        }
    });

    // These plugins provide necessary tasks.
    /*grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-qunit');*/
    // grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-connect-proxy');

    // Default task.
    //grunt.registerTask('default', ['jshint', 'qunit', 'concat', 'uglify', 'connect']);
    grunt.registerTask('default', ['configureProxies','connect', 'watch']);


};
