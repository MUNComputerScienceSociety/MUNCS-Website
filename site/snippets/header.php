<!doctype html>
<html lang="en">
<head>
	<title><?= html($page->title()) ?> - MUN Computer Science Society</title>
	<meta charset="utf-8">
	<?= css('assets/styles/styles.css') ?>
	<?= css('assets/styles/php.css') ?>
	<?= css('assets/styles/html.css') ?>
	<?= css('assets/styles/js.css') ?>
	<?= css('assets/styles/css.css') ?>
</head>
<body>
	<div id="wrapper">
		<div class="menu">
			<a id="logo" href="/"></a>
			<?php snippet('treemenu') ?>
		</div>
