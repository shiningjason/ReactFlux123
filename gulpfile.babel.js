import gulp from 'gulp';
import browserSync from 'browser-sync';

const server = browserSync.create();
const reload = server.reload;

gulp.task('serve', function() {
  server.init({ server: './' });

  gulp
    .watch(['index.html', 'slide/*'])
    .on('change', reload);
});
