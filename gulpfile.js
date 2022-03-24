const { src, watch, dest } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const cssnano = require('cssnano')
const autoprefixer = require('autoprefixer')
const postcss = require('gulp-postcss')


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

//watch archives
function watching() {
    watch('src/sass/**/*.scss', compile)
    //watch('src/sass/**.*.scss', mini)
}

exports.default = watching;