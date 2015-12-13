// gruntfile.js

module.exports = function(grunt) {
	
	grunt.initConfig({
        
		pkg: require('./package.json'),
		meta: {
			banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
			'<%= grunt.template.today("yyyy-mm-dd") %> */'
		},

        // Grunt clean will delete the contents of the dist/ directory before we start a new build
        
        clean: {
            build: ['../dist'],
            options: {
                force: true
            }
        },
        
        
		// Grunt will watch for file changes
        // Sass files changed in the styles folder/sub-dir will call the ['sass'] task
        // Include pages changed will call the ['ssi'] task - Server Side Includes
		
		watch: {
			watch_sass: {
				files: 'styles/**/*.scss',
				tasks: ['sass', 'postcss']
			},
            watch_ssi: {
                files: 'pages/**/*.html',
                tasks: ['ssi']
            },
            watch_js: {
				files: ['scripts/**/*.js'],
				tasks: ['uglify']
			}
		},
        
		// Grunt will pre-process sass files into css files from src to destination directory 
		
		sass: {
			dev: {
				files: {
					//destination            //source file
					'../dist/styles/styles.css' : 'styles/main.scss'
				}
			},
            deploy: { 
                options: {
                    style: 'compressed'
                },
                files: {
                    //destination          //source file
                    '../dist/styles/styles.css' : 'styles/main.scss'
                }
            }
		},
        
        // Grunt uses a type of serverside include for common page elements like header/footer/nav
        // https://github.com/jamesor/grunt-ssimin
        
		ssi: {
            dev: {
                options: {
                    // task-specific options
                    cache: 'all',
                    cacheDir: '.ssi-cache',
                    baseDir: 'pages'  // dir where to locate files to be processed for ssi 
                },
                files: [{
                    // target-specific file lists and/or options go here
                    expand: true,     // enable dynamic expansion
                    cwd: 'pages', // src matches are relative to this path
                    src: ['*.html'],  // actual patten(s) to match 
                    dest: '../dist'      // destination path prefix
                }] 
            }
		},
        
        
		// Config for grunt-postcss (multiple css post processors, minification, autoprefixing)

		postcss: {
			options: {
				safe: true,
				map: true,
				processors: [
					require('rucksack-css')({
						fallbacks: true
					}),
					require('pixrem')(16, { // Value is the same as on _config.scss $fsz variable multiplied by 10.
						html: true,
						replace: false,
						atrules: true,
						browsers: ['last 3 versions', '> 2%', 'ie 8', 'ie 7']
					}),
					require('autoprefixer')({
						browsers: ['last 3 versions', '> 2%', 'ie 8', 'ie 7']
					})
				]
			},
			main: {
				src: '../dist/styles/styles.css'
			}
		},
        
        // concatenate javascript files for development
        
        concat: {
            options: {
              separator: ';',
            },
            dist: {
              src: [
                    'scripts/vendors/jquery.js',
                    'scripts/vendors/fastclick.js',
                    'scripts/vendors/jquery.cookie.js',
                    'scripts/vendors/jquery.placeholder.js',
                    'scripts/vendors/foundation.js',
                    'scripts/scripts.js'
              ],
              dest: '../dist/scripts/scripts.js',
            },
      },
        
		// compress javascript files for deployment

		uglify: {
			options: {
				beautify: false,
				sourceMap: true,
				sourceMapIncludeSources: true,
                sourceMapName: '../dist/scripts/scripts.map'                
			},
			main: {
				files: {
                    '../dist/scripts/scripts.js': [
						// 'scripts/**/*.js'
                        'scripts/vendors/jquery.js',
                        'scripts/vendors/fastclick.js',
                        'scripts/vendors/jquery.cookie.js',
                        'scripts/vendors/jquery.placeholder.js',
                        'scripts/vendors/foundation.js',
                        'scripts/scripts.js'
					]
				}
			}
		},

        
		// Browsersync live reloads the page you are working on across all browsers across all devices
        // Browsersync can watch your files as you work. Changes you make will either be injected into the page 
        // (CSS & images) or will cause all browsers to do a full-page refresh.

		browserSync: {
			default_options: {
				bsFiles: {
					src: [
						'../dist/styles/*.css',
						'../dist/*.html',
                        '../dist/scripts/*.js'
					]
				},
				options: {
					watchTask: true,
					server: {
						baseDir: '../dist'
					}
				}
			}
		},
        
        
        // Minify images in production
        
         imagemin: {
              dist: {
                options: {
                  optimizationLevel: 3
                },
                files: [
                  {
                    expand: true,
                    cwd: 'img/',
                    src: ['*.{png,jpg,gif}'],
                    dest: '../dist/img'
                  }
                ]
              }
        },
        
        
        // GitHub pages generates a live site from a git repo
        // Running this task with grunt will create a temporary clone of the current repository, 
        // create a gh-pages branch if one doesn't already exist, copy over all files from the 
        // dist directory that match patterns from thesrc configuration, commit all changes, 
        // and push to the origin remote.
        
        'gh-pages': {
            options: {
                base: '../dist'
            },
            src: ['**']
          }

	});

    // Dependent plug-ins
    
    grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-ssi');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-gh-pages');

    // include call to sass/ssi separately for first time run thereafter called via watch
	grunt.registerTask('default', ['clean', 'sass:dev', 'ssi', 'postcss', 'concat', 'imagemin', 'browserSync', 'watch']);
    // run grunt deploy for a distribution ready product
    grunt.registerTask('deploy', ['clean', 'sass:deploy', 'ssi', 'postcss', 'uglify', 'imagemin', 'gh-pages']);

};

