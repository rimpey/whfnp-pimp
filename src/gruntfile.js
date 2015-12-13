// gruntfile.js

module.exports = function(grunt) {
	
	grunt.initConfig({
        
//        pkg: grunt.file.readJSON('package.json'),

		// Grunt will watch for file changes
        // Sass files changed in the styles folder/sub-dir will call the ['sass'] task
        // Include pages changed will call the ['ssi'] task - Server Side Includes
		
		watch: {
			watch_sass: {
				files: "styles/**/*.scss",
				tasks: ['sass', 'postcss']
			},
            watch_ssi: {
                files: "pages/**/*.html",
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
					"../dist/styles/styles.css" : "styles/main.scss"
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


		// Config for grunt-contrib-uglify (javascript concatenation)

		uglify: {
			options: {
				beautify: false,
				sourceMap: true,
				sourceMapIncludeSources: true,
				sourceMapName: '../dist/scripts/scripts.js.map'
			},
			main: {
				files: {
					'../dist/scripts/scripts.js': [
//						'scripts/**/*.js'
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
						"../dist/styles/*.css",
						"../dist/*.html",
                        "../dist/scripts/*.js"
					]
				},
				options: {
					watchTask: true,
					server: {
						baseDir: "../dist"
					}
				}
			}
		}

	});

    // Dependent plug-ins
    
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-ssi');
    grunt.loadNpmTasks('grunt-postcss');
	grunt.loadNpmTasks('grunt-contrib-uglify');

    // include call to sass/ssi separately for first time run thereafter called via watch
	grunt.registerTask('default', ['sass', 'ssi', 'postcss', 'uglify', 'browserSync', 'watch']);

};

