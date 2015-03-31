'use strict';

module.exports = function (grunt) {
  // show elapsed time at the end
  require('time-grunt')(grunt);
  // load all grunt tasks
  require('load-grunt-tasks')(grunt);

  // configurable paths
  var yeomanConfig = {
    app: 'app',
    dist: 'dist'
  };

  grunt.initConfig({
    yeoman: yeomanConfig,
    watch: {
      options: {
        nospawn: true
      },
      default: {
        files: [
          '<%= yeoman.app %>/*.html',
          '<%= yeoman.app %>/elements/{,*/}*.html',
          '{.tmp,<%= yeoman.app %>}/elements/{,*/}*.{css,js}',
          '{.tmp,<%= yeoman.app %>}/scripts/{,*/}*.js',
          '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      },
      server: {
        files: ['<%=yeoman.app%>/**/*.{html,css}'],
        tasks: ['copy:server']
      },
      sass: {
        files: [
          '<%= yeoman.app %>/elements/{,*/}*.{scss,sass}'
        ],
        tasks: ['sass:server', 'autoprefixer:server']
      },
      coffee: {
        files: ['<%=yeoman.app %>/elements/{,*/}*.coffee'],
        tasks: ['coffee:dist']
      }
    },
    // Compiles Sass to CSS and generates necessary files if requested
    sass: {
      options: {
        loadPath: ['bower_components', '<%= yeoman.app %>']
      },
      dist: {
        options: {
          style: 'compressed'
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>',
          src: ['elements/{,*/}*.{scss,sass}'],
          dest: '<%= yeoman.dist %>',
          ext: '.css'
        }]
      },
      server: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>',
          src: ['elements/{,*/}*.{scss,sass}'],
          dest: '.tmp',
          ext: '.css'
        }]
      }
    },
    autoprefixer: {
      options: {
        browsers: ['last 2 versions']
      },
      server: {
        files: [{
          expand: true,
          cwd: '.tmp',
          src: '**/*.css',
          dest: '.tmp'
        }]
      },
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>',
          src: ['**/*.css', '!bower_components/**/*.css'],
          dest: '<%= yeoman.dist %>'
        }]
      }
    },
    // Compiles CoffeeScript to JavaScript
    coffee: {
      options: {
        sourceMap: true,
        sourceRoot: ''
      },
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>',
          src: '**/*.coffee',
          dest: '<%= yeoman.dist %>',
          ext: '.js'
        }]
      },
      server: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>',
          src: '**/*.coffee',
          dest: '.tmp',
          ext: '.js'
        }]
      }
    },
    coffeelint: {
      files: {
        src: ['<%= yeoman.app %>/**/*.coffee']
      },
      options: {
        configFile: 'coffeelint.json'
      }
    },
    clean: {
      dist: ['.tmp', '<%= yeoman.dist %>/*'],
      server: '.tmp'
    },
    useminPrepare: {
      html: '<%= yeoman.app %>/index.html',
      options: {
        dest: '<%= yeoman.dist %>'
      }
    },
    usemin: {
      html: ['<%= yeoman.dist %>/{,*/}*.html'],
      css: ['<%= yeoman.dist %>/elements/{,*/}*.css'],
      js: ['<%= yeoman.dist %>/elements/{,*/}*.js'],
      options: {
        dirs: ['<%= yeoman.dist %>']
      }
    },
    replace: {
      dist: {
        options: {
          patterns: [{
            match: /elements\/elements\.html/g,
            replacement: 'elements/elements.vulcanized.html'
          }]
        },
        files: {
          '<%= yeoman.dist %>/index.html': ['<%= yeoman.dist %>/index.html']
        }
      }
    },
    vulcanize: {
      default: {
        options: {
          strip: true,
          inline: true
        },
        files: {
          '<%= yeoman.dist %>/elements/elements.vulcanized.html': [
            '<%= yeoman.dist %>/elements/elements.html'
          ]
        }
      }
    },
    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/images',
          src: '{,*/}*.{png,jpg,jpeg,svg}',
          dest: '<%= yeoman.dist %>/images'
        }]
      }
    },
    minifyHtml: {
      options: {
        quotes: true,
        empty: true,
        spare: true
      },
      app: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>',
          src: '*.html',
          dest: '<%= yeoman.dist %>'
        }]
      }
    },
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>',
          dest: '<%= yeoman.dist %>',
          src: [
            '*.{ico,txt}',
            '.htaccess',
            '*.html',
            'elements/**',
            '!elements/**/*.scss',
            '!elements/**/*.coffee',
            'images/{,*/}*.{webp,gif}'
          ]
        }, {
          expand: true,
          dot: true,
          dest: '<%= yeoman.dist %>',
          src: ['bower_components/**']
        }]
      },
      server: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>',
          dest: '.tmp',
          src: ['elements/{,*/}*.{html,css}']
        }]
      }
    }
  });

  grunt.registerTask('server', function (target) {
    grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
    grunt.task.run(['serve:' + target]);
  });

  grunt.registerTask('serve', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build']);
    }

    grunt.task.run([
      'coffeelint',
      'clean:server',
      'coffee:server',
      'sass:server',
      'copy:server',
      'autoprefixer:server',
      'watch'
    ]);
  });



  grunt.registerTask('build', [
    'coffeelint',
    'clean:dist',
    'coffee:dist',
    'sass:dist',
    'copy:dist',
    'useminPrepare',
    'imagemin',
    'concat',
    'autoprefixer',
    'uglify',
    'vulcanize',
    'usemin',
    'replace',
    'minifyHtml'
  ]);

  grunt.registerTask('default', [
    // 'test'
    'build'
  ]);
};
