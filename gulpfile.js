const { src, dest, watch, parallel, series } = require('gulp')
const sass = require('gulp-sass')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const autoprefixer = require('gulp-autoprefixer')
const imagemin = require('gulp-imagemin')
const include = require('gulp-file-include')
const htmlmin = require('gulp-htmlmin')
const del = require('del')
const sync = require('browser-sync').create()

function html() {
  return src('src/**.html')
    .pipe(include({
      prefix: '@'
    }))
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true
    }))
    .pipe(dest('dist'))
}

function scss() {
  return src('src/scss/**.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(concat('index.css'))
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 10 versions'],
      grid: true
    }))
    .pipe(dest('dist/css'))
}

function scripts() {
  return src([
    'node_modules/jquery/dist/jquery.js',
    'node_modules/slick-carousel/slick/slick.js',
    'node_modules/mixitup/dist/mixitup.js',
    'src/js/main.js'
  ])
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(dest('dist/js'))
}

function img() {
  return src('src/img/**/**.*')
    .pipe(imagemin([
      imagemin.gifsicle({interlaced: true}),
      imagemin.mozjpeg({quality: 75, progressive: true}),
      imagemin.optipng({optimizationLevel: 5}),
      imagemin.svgo({
          plugins: [
              {removeViewBox: true},
              {cleanupIDs: false}
          ]
      })
    ]))
    .pipe(dest('dist/img'))
}

function clear() {
  return del('dist')
}

function serve() {
  sync.init({
    server: './dist/',
    notify: false
  })

  watch('src/**/*.html', series(html)).on('change', sync.reload)
  watch('src/scss/**/*.scss', series(scss)).on('change', sync.reload)
  watch('src/js/**/*.js', series(scripts)).on('change', sync.reload)
}

exports.build = series(clear, img, scss, scripts, html)
exports.default = series(clear, img,scss, html, scripts, serve)