const gulp = require("gulp");
const concat = require("gulp-concat");
const minimize = require("gulp-uglify");
const watching = require("gulp-watch");
const minicss = require("gulp-clean-css");
const miniimg = require("gulp-imagemin");

gulp.task("default",["mnmjs","movehtml","cssmini","imgmini","watcher"], function(){
    console.log("Default initialized!");
});

/*Flytta(kopiera) html filer till fin*/
gulp.task("movehtml", function(){
    gulp.src("work/*.html")
        .pipe(gulp.dest("fin/"))
        return console.log("flyttat HTML!");
});

/*Sammanslagning oh minifiering av JS; merge n' minify javascripts(mnmjs)*/
gulp.task("mnmjs", function(){
    gulp.src("work/js/*.js")
        .pipe(concat("main.min.js"))
        .pipe(minimize())
        .pipe(gulp.dest("fin/js"))
        return console.log("Merged, minimized and moved js!");
});

/*Slå ihop och minimera CSS*/
gulp.task("cssmini",function(){
    gulp.src("work/css/*.css")
        .pipe(concat("styles.min.css"))
        .pipe(minicss())
        .pipe(gulp.dest("fin/css"))
        return console.log("Minimized CSS");
});

/*Minimera bilder*/
gulp.task("imgmini", function(){
    gulp.src("work/bilder/*")
        .pipe(miniimg())
        .pipe(gulp.dest("fin/bilder"))
        return console.log("Minimized images");
});

/*Watcher, kollar och kopierar ändringar*/
gulp.task("watcher", function(){
    watching("work/js/*.js", function(){/*Javascript*/
        gulp.start("mnmjs");
    });

    watching("work/*.html", function(){/*html*/
        gulp.start("movehtml");
    });

    watching("work/css/*.css",function(){/*CSS*/
        gulp.start("cssmini");
    });

    watching("work/bilder/*", function(){/*Bilder*/
        gulp.start("imgmini");
    });
    console.log("Watching!");
});