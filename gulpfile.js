// Initialize modules
const { src, dest, watch, series, parallel } = require('gulp');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const postcss = require('gulp-postcss');
const sass = require('gulp-sass');

// File path variables
const files = {
    scssPath: 'src/scss/**/*.scss',
    cssPath: 'src/dist/css'
}

// Sass task: compiles the style.scss file into style.css
function scssTask() {
    return src(files.scssPath, { sourcemaps: true })
        .pipe(sass()) // compile SCSS to CSS
        .pipe(postcss([autoprefixer(), cssnano()])) // PostCSS plugins
        .pipe(dest(files.cssPath, { sourcemaps: '.' }));
}

// Watch task: watch SCSS files for changes.If any change, run scss and other tasks simultaneously
function watchTask() {
    watch([files.scssPath], parallel(scssTask));
}

// Export the default Gulp task so it can be run
exports.default = series(scssTask, watchTask);