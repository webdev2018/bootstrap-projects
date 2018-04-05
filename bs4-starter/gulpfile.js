const gulp = require('gulp');
const browserSync = require('browser-sync').create(); /* browser-а сам се обновява */
const sass = require('gulp-sass'); /* автоматично прекомпилира scss до css файл */

/* Create gulp tasks */

// Compie Sass & Inject into browser
gulp.task('sass', function(){
    return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 
                    'src/scss/*.scss'])
                .pipe(sass()) // прекомпилира sass файловете
                .pipe(gulp.dest('src/css'))  // къде да премести файловете след прекомпилиране
                .pipe(browserSync.stream()); 
});

// Move JS files to src/js - къде да премести js файловете
gulp.task('js', function(){
    return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js',
                    'node_modules/jquery/dist/jquery.min.js', 
                    'node_modules/popper.js/dist/umd/popper.min.js'])
                .pipe(gulp.dest('src/js'))  
                .pipe(browserSync.stream());  
});

// Watch Sass & Server
gulp.task('serve', ['sass'], function(){
    /* наблюдаваме за промени в src папката */
    browserSync.init({
        server : "./src"
    });

    /* наблюдаваме за промени в sass файловете */
    gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss',
     'src/scss/*.scss'], ['sass']);

    /* наблюдаваме за промени в html файловете */
    gulp.watch('src/*.html').on('change', browserSync.reload);

});

// Move Font Awesome Fonts folder to src/fonts
gulp.task('fa-fonts', function(){
    return gulp.src('node_modules/font-awesome/fonts/*')
                .pipe(gulp.dest('src/fonts'))
});

// Move Font Awesome CSS folder to src/css
gulp.task('fa-css', function(){
    return gulp.src('node_modules/font-awesome/css/font-awesome.min.css')
                .pipe(gulp.dest('src/css'))
});


// create default gulp task - масив от всички таскове, които искаме да изпълни
gulp.task('default', ['sass','js', 'serve', 'fa-fonts', 'fa-css']);
