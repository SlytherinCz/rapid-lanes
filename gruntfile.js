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
        sprite:{
            land: {
                src: 'assets/gfx/spritesheets/land/*.png',
                dest: 'public/gfx/spritesheets/land.png',
                destCss: 'public/gfx/spritesheets/land.json',
                cssFormat: 'json_texture'
            },
            vehicles: {
                src: 'assets/gfx/spritesheets/vehicles/*.png',
                dest: 'public/gfx/spritesheets/vehicles.png',
                destCss: 'public/gfx/spritesheets/vehicles.json',
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
};
