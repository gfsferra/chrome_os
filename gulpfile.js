// Require our dependencies
const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('node-sass'));
const rename = require('gulp-rename');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

function compileStyles() {
	return src('Assets/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([cssnano(), autoprefixer()]))
    .on('error', function (err) {
      console.error('Error in compileSass task', err.toString());
    })
    .pipe(rename({dirname: ''}))
    .pipe(dest('Assets/CSS'))
};

function watchStyles() {
  watch('Assets/scss/**/*.scss', compileStyles);
};

exports.default = series(compileStyles, watchStyles);
