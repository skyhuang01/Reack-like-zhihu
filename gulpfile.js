var gulp = require('gulp');
var connect = require('gulp-connect');
var browserify = require('gulp-browserify');

//JSX转译JS
gulp.task('browserify', function(done){
    gulp.src('./app/js/main.js')
    .pipe(browserify({
        transform: 'reactify',
    }))
    .pipe(gulp.dest('./dist/js'));
    done();
});

gulp.task('browserify-css', function(done){
    gulp.src('./app/css/index.css')
    .pipe(gulp.dest('./dist/css/index.css'));
    done();
});


gulp.task('js', function(done){
    gulp.src('./dist/**/*.js')
    .pipe(connect.reload());
    done();
});

gulp.task('css', function(done){
    gulp.src('./dist/**/*.css')
    .pipe(connect.reload());
    done();
});

//自动更新
gulp.task('watch', function(done){
    gulp.watch('./dist/**/*.js', gulp.series('js'));
    gulp.watch('./app/**/*.js', gulp.series('browserify'));

    gulp.watch('./dist/**/*.css', gulp.series('css'));
    gulp.watch('./app/**/*.css', gulp.series('browserify-css'));
    done();
});

//copy到dist目录下
gulp.task('copy',function(done){
    gulp.src('./app/css/*')
    .pipe(gulp.dest('./dist/css'));

    gulp.src('./bower_components/**/*')
    .pipe(gulp.dest('./dist/libs'));

    gulp.src('./*.html')
    .pipe(gulp.dest('./dist'));

    done();
});

//启动
gulp.task('connect-pro',function(done){
    connect.server({
        root:'./dist',
        port:5001,
        livereload:true,
    });
    done();
});

gulp.task('build', gulp.series(['browserify', 'copy']));
gulp.task('server-pro', gulp.series(['build', 'connect-pro', 'watch']));