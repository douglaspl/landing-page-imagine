const   gulp = require('gulp'),
        browserSync = require('browser-sync').create(),
        reload = browserSync.reload,
        autoprefixer = require('gulp-autoprefixer'),
        sourcemaps = require('gulp-sourcemaps'),
        sass = require('gulp-sass'),
        sassLint = require('gulp-sass-lint'),
        concat = require('gulp-concat'),
        cleanCSS = require('gulp-clean-css'),
        imagemin = require('gulp-imagemin');

//BROWSER SYNC
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: './dist/'
        }
    });
});

// SERVE HTML
gulp.task('html', function() {
    return gulp.src('./src/*.html')
    .pipe(gulp.dest('./dist'))
});

// SERVE JS
gulp.task('js', function() {
    return gulp.src('./src/js/*.js')
    .pipe(gulp.dest('./dist/js'))
});

// COMPRESS AND SERVE IMG
gulp.task('images', function(){
    return gulp.src('./src/images/**/*.+(png|jpg|gif|svg|ico|xml|txt|json)')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/images'))
});

// COMPILE AND SERVE CSS
gulp.task('styles', function () {
    return gulp.src([
            // setup
            './src/styles/setup/_functions.scss',
            './src/styles/setup/_variables.scss',
            './src/styles/setup/_fix.scss',
            './src/styles/setup/_include-media.scss',
            './src/styles/setup/_flexboxgrid.scss',
            './src/styles/setup/_mixins.scss',

            // Layout
            './src/styles/layout/**/*.scss',

            // Blocks
            './src/styles/block/**/*.scss',

            // Trumps
            './src/styles/utils/colors.scss',
            './src/styles/utils/trumps.scss',
            './src/styles/utils/typography.scss'
        ])
        .pipe(sassLint({
            rules: {
                'no-extends': 1,
                'no-color-keywords': 2,
                'class-name-format': [
                    1,
                    {
                        convention: 'hyphenatedbem'
                    }
                ],
                indentation: [
                    1,
                    {
                        character: 'space',
                        size: 4,
                    }
                ]
            }
        }))
        .pipe(concat('styles.scss'))
        .pipe(sassLint.format())
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        // .pipe(autoprefixer('last 2 versions'))
        // .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist/styles'))
        .pipe(browserSync.stream());
});

// COMPILE AND SERVE PROD CSS
gulp.task('styles-prod', function () {
    return gulp.src([
            // setup
            './src/styles/setup/_functions.scss',
            './src/styles/setup/_variables.scss',
            './src/styles/setup/_fix.scss',
            './src/styles/setup/_include-media.scss',
            './src/styles/setup/_flexboxgrid.scss',
            './src/styles/setup/_mixins.scss',

            // Layout
            './src/styles/layout/**/*.scss',

            // Blocks
            './src/styles/block/**/*.scss',

            // Trumps
            './src/styles/utils/colors.scss',
            './src/styles/utils/trumps.scss',
            './src/styles/utils/typography.scss'
        ])
        .pipe(concat('styles.scss'))
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer('last 2 versions'))
        .pipe(cleanCSS())
        .pipe(gulp.dest('./dist/styles'))
});

// WATCH FOR FILES
gulp.task('watch', ['browser-sync', 'styles'], function() {
    gulp.watch('./src/*.html', ['html']).on('change', reload);
    gulp.watch('./src/js/**/*.js', ['js']).on('change', reload);
    gulp.watch('./src/styles/**/*.scss', ['styles']);
    gulp.watch('./src/images/**/*.+(png|jpg|gif|svg|ico|xml|txt|json)', ['images']);
});

// INITIAL SETUP
gulp.task('serve',['browser-sync', 'html', 'js', 'images', 'styles', 'watch'], function() {});

gulp.task('default', ['serve']);