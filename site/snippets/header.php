<!doctype html>
<html lang="en">
<head>
	<title><?= html($page->title()) ?> - MUN Computer Science Society</title>
	<meta charset="utf-8">
	<?php
		// Site-wide CSS files
		echo css('assets/styles/styles.css');
		echo css('assets/styles/php.css');
		echo css('assets/styles/html.css');
		echo css('assets/styles/js.css');
		echo css('assets/styles/css.css');
		echo css('//cdnjs.cloudflare.com/ajax/libs/fullcalendar/1.6.4/fullcalendar.css');
		// JavaScript files
		echo js('//cdnjs.cloudflare.com/ajax/libs/jquery/1.10.2/jquery.min.js');
		echo js('//cdnjs.cloudflare.com/ajax/libs/fullcalendar/1.6.4/fullcalendar.min.js');
		echo js('//cdnjs.cloudflare.com/ajax/libs/fullcalendar/1.6.4/gcal.js');
		// Custom JS & CSS per-page
		foreach ($page->files()->findByExtension('css') as $css) {
			echo css($css->url());
		}
		foreach ($page->files()->findByExtension('js') as $js) {
			echo js($js->url());
		}
	?>
</head>
<body>
	<div id="wrapper">
		<div class="menu">
			<a id="logo" href="/"></a>
			<?php snippet('treemenu'); ?>
		</div>
