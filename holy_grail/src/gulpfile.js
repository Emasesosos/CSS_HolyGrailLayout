/* ***** Configuración Principal ***** */
const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

function css() {
    return gulp
        .src('./scss/app.scss')
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 2 versions'],
            cascade: false
        }))
        .pipe(sass({
            outputStyle: 'expanded', // nested, compact, compressed
        }))
        .pipe(gulp.dest('css'));
}

function cssVarios() {
    return gulp
        .src('./scss/appVarios.scss')
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 2 versions'],
            cascade: false
        }))
        .pipe(sass({
            outputStyle: 'expanded', // nested, compact, compressed
        }))
        .pipe(gulp.dest('css'));
}

function cssFooter() {
    return gulp
        .src('./scss/appFooter.scss')
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 2 versions'],
            cascade: false
        }))
        .pipe(sass({
            outputStyle: 'expanded', // nested, compact, compressed
        }))
        .pipe(gulp.dest('css'));
}

function watchFiles() {
    // gulp.watch('./scss/*.scss', css);
    // gulp.watch('./scss/*.scss', cssVarios);
    gulp.watch('./scss/*.scss', cssFooter);  
}  

// ***** Registrar Funciones como Tareas ***** //
// gulp.task('css', css);
// gulp.task('css', cssVarios);
gulp.task('css', cssFooter);
gulp.task('watch', watchFiles);    