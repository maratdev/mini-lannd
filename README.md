<h1>HTML5 Start Fraemwork - cтартовый шаблон для frontend разработки на html5</h1>

<h2>Что входит в сборку:</h2>

<h3>Gulp:</h3>
<ol>
<li><strong>gulp-sass</strong>: Sass пакет;</li>
<li><strong>gulp-util</strong>: Логирование, подсветка вывод в консоль;</li>
<li><strong>browser-sync</strong>: Автообновление страницы во всех браузерах на всех устройствах при их изменение;</li>
<li><strong>gulp-concat</strong>: Для конкатенации файлов (объединяет несколько файлов в один файл);</li>
<li><strong>gulp-clean-css</strong>: Минимизация CSS;</li>
<li><strong>gulp-rename</strong>: Библиотека для переименования файлов;</li>
<li><strong>del</strong>: Библиотека для удаления файлов и папок;</li>
<li><strong>gulp-imagemin</strong>: Библиотека для работы с изображениями (сжатие изобр. .JPG / .JEPG);</li>
<li><strong>imagemin-pngquant</strong>: Библиотека для работы с изображениями (сжатие изобр. .PNG);</li>
<li><strong>gulp-cache</strong>: Библиотека для кеширования;</li>
<li><strong>gulp-autoprefixer</strong>: Автоматически расставляет префиксы к CSS свойствам;</li>
<li><strong>gulp-file-include</strong>: Для вставки файла или кода в html;</li>
<li><strong>gulp-remove-html</strong>: Удаляет HTML-код, когда файлы идут в сборку (в данном случае header.min);</li>
<li><strong>gulp-remove-html</strong>: Библиотека mixin-ов для SASS;</li>
<li><strong>vinyl-ftp</strong>: Автодеплой;</li>
</ol>
<h3>Таски Gulp:</h3>
<ul>
	<li><strong>gulp</strong>: запуск дефолтного gulp таска (sass, js, watch, browserSync) для разработки;</li>
	<li><strong>build</strong>: сборка проекта в папку dist (очистка, сжатие картинок, удаление всего лишнего);</li>
	<li><strong>deploy</strong>: выгрузка проекта на рабочий сервер из папки dist по FTP;</li>
	<li><strong>clearcache</strong>: очистка кеша gulp. Полезно для очистки кеш картинок и закешированных путей..</li>
</ul>

<h3>HTML:</h3>
```html
//html code
<meta name="format-detection" content="telephone=no"> //преобразование телефонных номеров в ссылки в мобильных браузерах
<meta name="author" content="Name"> //автор, создатель сайта
<meta name="copyright" content="&copy; Сайт корпорации МММ 2013-2016"> //автор, создатель сайта
<meta name="robots" content="index, follow"> //Разрешать или запрещать роботам, приходящим на сайт, индексировать данную страницу

//Социальные плагины Facebook и Open Graph
<meta property="og:image" content="http://www.site.com/img/icon_325x325.png"> //URL-адрес изображения, который должен определить Ваш объект в графе для изображения.
<meta property="og:site_name" content="Название сайта"> //Если ваш объект является частью большого web-сайта, название, должно отображаться на всех страницах сайта. Например, "IMDb".
<meta property="og:title" content="Заголовок сайта "> //Название вашего объекта, как он должен отображаться в графе, например фильм, "The Rock".
<meta property="og:description" content="Описание сайта" /> //Одно-два предложения описания вашего объекта.
<meta property="og:url" content="http://www.site.ru/"> //Канонический URL-адрес объекта, который будет использоваться в качестве его постоянного ID в графе, например, "http://www.imdb.com/title/tt0117500/".
<meta property="og:locale" content="ru_RU"> //Тег локации.

//Меняем фон верхней панели браузера
<meta name="theme-color" content="#000"> //Chrome, Firefox OS and Opera
<meta name="msapplication-navbutton-color" content="#000"> //Windows Phone
<meta name="apple-mobile-web-app-status-bar-style" content="#000"> //iOS Safari
```
<h3>CSS/SCSS:</h3>
<ol>
	<li>Все Sass переменные размещайте в <strong>app/sass/_vars.sass</strong>;</li>
	<li>Все CSS медиазапросы размещайте в <strong>app/sass/_media.sass</strong>;</li>
	<li>Все CSS стили jQuery библиотек размещайте в <strong>app/sass/_libs.sass</strong>;</li>
	<li>Все базовые стили (html, body, fonts, buttons, etc...) размещайте в <strong>app/sass/_base.sass</strong>;</li>
	<li>В файле <strong>app/header.sass</strong> должны размещаться стили, предназначенные для отображения верхней части сайта на первом экране (на самых больших мониторах). Здесь отображаются стили как главной, так и всех внутренних страниц;</li>
</ol>
<h3>JavaScript:</h3>
<p>В common.js находяться данные компоненты:</p>
<ol>
	<li>SVG Fallback</li>
	<li>Плавная прокрутка к объекту</li>
	<li>E-mail Ajax форма</li>
	<li>Chrome Smooth Scroll (плавная прокрутка для Chrome);</li>
	<li>Плавный скролл</li>
</ol>
<h3>Включеные в сборку библиотеки:</h3>
<ol>
<li><a href="http://daneden.github.io/animate.css/" target="_blank">Animate.css</a>  / - плагин для простого добавления анимации на страницы;</li>
<li><a href="http://getbootstrap.com/" target="_blank">Bootstrap</a> - Полная и облегченная (bootstrap-grid.min.css) версия Bootstrap.
				<br>В index.html подключена облегченная - только сетка, без JS и компонентов.</li>
<li><a href="https://jquery.com" target="_blank">jQuery</a> первой ветки;</li>
<li><a href="http://modernizr.com" target="_blank">Modernizr</a> - библиотека, сканирует браузер на поддержку тех или иных свойств. Вместе с html5shiv (HTML5 в IE.)</li>
<li><a href="https://github.com/inuyaksa/jquery.nicescroll" target="_blank">Nicescroll 3</a>  / - плагин, альтернатива полос прокрутки;</li>

</ol>