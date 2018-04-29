module.exports = function(grunt) {
  //  Project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    watch: {
      scripts: {
        files: ["client/*.js"],
        tasks: ["uglify"],
        options: {
          spawn:false
        } //  options
      } //  scripts
    }, //  watch
    uglify: {
      build: {
        src: "client/client.js",
        dest:
        "server/public/assets/scripts/client.min.js"
      } //  build
    }, //  uglify

    copy: {
      main: {
        expand: true,
        cwd: "node_modules/",
        src: [
          "angular/angular.min.js",
          "angular/angular.min.js.map",
          "bootstrap/dist/css/bootstrap.min.css"
        ],  //  src
        "dest": "server/public/vendors/"
      } //  main
    } //  copy
  });  //  grunt.initConfig

  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks('grunt-contrib-watch');

  //  Default task(s).
  grunt.registerTask("default", ["copy", "uglify"]);
  grunt.registerTask("start-watch", ["uglify", "copy", "watch"]);
};
