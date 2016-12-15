var gulp           = require('gulp'),
		gutil          = require('gulp-util' ), //Логирование, подсветка вывод в консоль
		sass           = require('gulp-sass'), //Подключаем Sass пакет
		browserSync    = require('browser-sync'), // Автообновление страницы во всех браузерах на всех устройствах при их изменение
		concat         = require('gulp-concat'), // Для конкатенации файлов (объединяет несколько файлов в один файл)
		uglify         = require('gulp-uglify'), // Для сжатия JS
		cleanCSS       = require('gulp-clean-css'), //Минимизация CSS
		rename         = require('gulp-rename'), //Библиотека для переименования файлов
		del            = require('del'), //Библиотека для удаления файлов и папок
		imagemin       = require('gulp-imagemin'), //Библиотека для работы с изображениями (сжатие изобр.)
		pngquant       = require('imagemin-pngquant'), //Библиотеку для работы с png (сжатие изобр.)
		cache          = require('gulp-cache'), //Библиотека для кеширования
		autoprefixer   = require('gulp-autoprefixer'), // Автоматически расставляет префиксы к CSS свойствам
		fileinclude    = require('gulp-file-include'), //Для вставки файла или кода в html
		gulpRemoveHtml = require('gulp-remove-html'), //Удалить HTML- код , когда файлы идут в сборку .
		bourbon        = require('node-bourbon'), //Библиотека mixin-ов для SASS
		ftp            = require('vinyl-ftp'); //Автодеплой

gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: 'app'
		},
		notify: false
	});
});

gulp.task('sass', ['headersass'], function() {
	return gulp.src('app/sass/**/*.scss')
			.pipe(sass({
				includePaths: bourbon.includePaths
			}).on('error', sass.logError))
			.pipe(rename({suffix: '.min', prefix : ''}))
			.pipe(autoprefixer(['last 15 versions']))
			.pipe(cleanCSS())
			.pipe(gulp.dest('app/css'))
			.pipe(browserSync.reload({stream: true}))
});

gulp.task('headersass', function() {
	return gulp.src('app/header.scss')
			.pipe(sass({
				includePaths: bourbon.includePaths
			}).on('error', sass.logError))
			.pipe(rename({suffix: '.min', prefix : ''}))
			.pipe(autoprefixer(['last 15 versions']))
			.pipe(cleanCSS())
			.pipe(gulp.dest('app'))
			.pipe(browserSync.reload({stream: true}))
});

gulp.task('libs', function() {
	return gulp.src([
				'app/libs/jquery/jquery-1.11.2.min.js',
				'app/libs/jquery.nicescroll/jquery.nicescroll.min.js',
				//'app/libs/modernizr/modernizr.js'

			])
			.pipe(concat('libs.min.js'))
			.pipe(uglify())
			.pipe(gulp.dest('app/js'));
});

gulp.task('watch', ['sass', 'libs', 'browser-sync'], function() {
	gulp.watch('app/header.scss', ['headersass']);
	gulp.watch('app/sass/**/*.scss', ['sass']);
	gulp.watch('app/*.html', browserSync.reload);
	gulp.watch('app/js/**/*.js', browserSync.reload);
});

gulp.task('imagemin', function() {
	return gulp.src('app/img/**/*')
			.pipe(cache(imagemin({
				interlaced: true,
				progressive: true,
				svgoPlugins: [{removeViewBox: false}],
				use: [pngquant()]
			})))
			.pipe(gulp.dest('dist/img'));
});

gulp.task('buildhtml', function() {
	gulp.src(['app/*.html'])
			.pipe(fileinclude({
				prefix: '@@'
			}))
			.pipe(gulpRemoveHtml())
			.pipe(gulp.dest('dist/'));
});

gulp.task('removedist', function() { return del.sync('dist'); });

gulp.task('build', ['removedist', 'buildhtml', 'imagemin', 'sass', 'libs'], function() {

	var buildCss = gulp.src([
		'app/css/fonts.min.css',
		'app/css/main.min.css'
	]).pipe(gulp.dest('dist/css'));

	var buildFiles = gulp.src([
		'app/.htaccess'
	]).pipe(gulp.dest('dist'));

	var buildFonts = gulp.src('app/fonts/**/*').pipe(gulp.dest('dist/fonts'));

	var buildJs = gulp.src('app/js/**/*').pipe(gulp.dest('dist/js'));

});

gulp.task('deploy', function() {

	var conn = ftp.create({
		host:      'hostname.com',
		user:      'username',
		password:  'userpassword',
		parallel:  10,
		log: gutil.log
	});

	var globs = [
		'dist/**',
		'dist/.htaccess',
	];
	return gulp.src(globs, {buffer: false})
			.pipe(conn.dest('/path/to/folder/on/server'));

});

gulp.task('clearcache', function () { return cache.clearAll(); });

gulp.task('default', ['watch']);
