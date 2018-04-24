module.exports = function (grunt) {

    grunt.initConfig({
        concat: {
            assets: {
                src: [
                    'node_modules/bottlejs/dist/bottle.js',
                    'node_modules/phaser/dist/phaser.js'
                ],
                dest: 'assets/temp/assets.js'
            },
            scripts: {
                src: [
                    'assets/js/scenes/**/*.js',
                    'assets/js/entities/**/*.js',
                    'assets/js/utils/**/*.js',
                    'assets/js/config/services.js',
                    'assets/js/rapidLanes.js'
                ],
                dest: 'assets/temp/scripts.js'
            },
            build: {
                src: [
                    'assets/temp/assets.js',
                    'assets/temp/scripts.js'
                ],
                dest: 'public/js/bundle.js'
            }
        },
        copy: {
            images: {
                files: [{expand:true,cwd:'assets/gfx/images/',src:['*'],dest:'public/gfx/images'}]
            },
            music: {
                files: [{expand:true,cwd:'assets/sfx/music/',src:['*'],dest:'public/sfx/music'}]
            }
        },
        sprite:{
            textures: {
                src: 'assets/gfx/spritesheets/*.png',
                dest: 'public/gfx/spritesheet.png',
                destCss: 'public/gfx/spritesheet.json',
                cssFormat: 'json_texture'
            }
        },
        watch: {
            scripts: {
                files: ['assets/js/**/*.js'],
                tasks: ['concat:scripts', 'concat:build']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-spritesmith');
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', ['sprite','concat']);
};

