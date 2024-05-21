import gulp from 'gulp';
import plumber from 'gulp-plumber';
import sass from 'gulp-dart-sass';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import browser from 'browser-sync';
import libsquoosh from 'gulp-libsquoosh';
import svgstore from 'gulp-svgstore';
import htmlmin from "gulp-htmlmin";
import rename from 'gulp-rename';
import { deleteAsync } from "del";

// Styles

export const styles = () => {
  return gulp.src('src/sass/style.scss', { sourcemaps: true })
    .pipe(plumber())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest('build/css', { sourcemaps: '.' }))
    .pipe(browser.stream());
}

//HTML

export const html = () => {
  return gulp
    .src("src/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("build"));
};

//Copy

const copy = (done) => {
  gulp
    .src(
      ["src/images/icons/*.png", "src/*.ico", "src/images/svg/*.svg"],
      {
        base: "src",
      }
    )
    .pipe(gulp.dest("build"));
  done();
};

//CopyJs

const copyJs = (done) => {
  gulp
    .src(
      ["src/js/*.js", "src/js/**/*.js"],
      {
        base: "src",
      }
    )
    .pipe(gulp.dest("build"));
  done();
};

//Images

const webp = () => {
  return gulp.src('src/images/content/*.{jpg,png}')
  .pipe(libsquoosh({webp: {} }))
  .pipe(gulp.dest('build/images/content'));
}

//Svg

const sprite = () => {
  return gulp.src('src/images/svg/inline/*.svg')
  .pipe(
    svgstore({
    inlineSvg: true,
  })
  )
  .pipe(rename('sprite.svg'))
  .pipe(gulp.dest('build/images/svg'));
}

//Clean

const clean = () => {
  return deleteAsync("build");
}

// Server

const server = (done) => {
  browser.init({
    server: {
      baseDir: 'build'
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
}

// Watcher

const watcher = () => {
  gulp.watch('src/sass/**/*.scss', gulp.series(styles));
  gulp.watch('src/js/*.js', gulp.series(copyJs));
  gulp.watch('src/js/vendor/*.js', gulp.series(copyJs));
  gulp.watch("src/*.html", gulp.series(html));
  gulp.watch('./*.html').on('change', browser.reload);
}

//Start

export const start = gulp.series(
  clean,
  copy,
  copyJs,
  webp,
  sprite,
  styles,
  html,
  server,
  watcher
);
