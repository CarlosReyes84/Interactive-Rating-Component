const { src, watch, dest } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const cssnano = require('cssnano')
const autoprefixer = require('autoprefixer')
const postcss = require('gulp-postcss')
const terser = require('gulp-terser')
const sourcemaps = require('gulp-sourcemaps')

//function compile sass
function compile() {
    return src('src/sass/app.scss')
    .pipe(sass())
    .pipe(dest('dist'))
}

//function minify
function mini() {
    const paths = [
        cssnano(),
        autoprefixer()
    ]
    return src('src/sass/app.scss', { sourcemaps: true })
    .pipe(sass())
    .pipe(postcss(paths))
    .pipe(dest('dist', { sourcemaps: true }))
}

//minyfy javascript
function js() {
    return src('src/app.js')
    .pipe(sourcemaps.init())
    .pipe(terser())
    .pipe(sourcemaps.write('.'))
    .pipe(dest('dist'))
}

//watch archives
function watching() {
    watch('src/sass/**/*.scss', compile)
    // watch('src/sass/**/*.scss', mini)
    watch('src/**/*.js', js)
}

exports.default = watching;