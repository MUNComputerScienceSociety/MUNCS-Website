<nav class="breadcrumb">
	<ul>
		<?php
			$pages = $site->breadcrumb();
			$x = 0;
			$l = count($pages->_); // The array internal to the pages obj :(
			foreach ($pages as $page) {
		?>
		<li>
			<a<?php echo ($page->isActive()) ? ' class="active"' : '' ?> href="<?php echo $page->url() ?>">
				<?php
					if ($x == 0) {
						echo 'Home';
					}
					else {
						echo $page->title();
					}
					if ($x < ($l - 1)) {
						echo ' &rsaquo;';
					}
				?>
			</a>
		</li>
		<?php
				$x++;
			}
		?>
	</ul>
</nav>
