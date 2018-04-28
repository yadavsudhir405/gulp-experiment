var gulp = require('gulp'),
    jshint = require('gulp-jshint');


gulp.task("watch",["detectScssChanges","detectJavaScriptChnges"]);

gulp.task('task1',function(){

    console.log("Executing Task 1");

 });

gulp.task("task2",['task1'],function(){
    console.log("Running Task2");

});

gulp.task('compileTocss', function(){
    console.log("Scss Changes detected");
});


gulp.task("detectScssChanges", function(){
    gulp.watch('source/scss/**/*.scss',['compileTocss'])
} );

gulp.task('jshint', function(){
    console.log("JavaScript changes detected");
    return gulp.src('source/javascript/**/*.js').pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));

});

gulp.task('detectJavaScriptChnges', function(){
   gulp.watch('source/javascript/**/*.js',['jshint']);
});
