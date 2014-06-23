module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        minified : {
            files: {
                src: [
                    "jquery.wabs.js",
                ],
                dest: ""
            },
            options : {
                sourcemap: false,
                ext : ".min.js"
            }
        },
        watch : {
            scripts : {
                files : [
                    "jquery.wabs.js",
					"wabs.css"
                ],
                tasks : ["minified"]
            }
        },
        browser_sync: {
            files: {
                src : [
                    "jquery.wabs.js",
                    "*.html"
                ],
            },
            options: {
                watchTask : true,
                host: "localhost",
                server: {
                    baseDir: ""
                },
                ghostMode: {
                    scroll: true,
                    links: true,
                    forms: true
                }
            },
        },
    });

    // Load plugins
    grunt.loadNpmTasks("grunt-minified");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-browser-sync");

    // Tasks
    grunt.registerTask("default", ["minified"]);
    grunt.registerTask("sync", ["browser_sync", "watch"]);
};
