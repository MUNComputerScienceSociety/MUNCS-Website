<nav class="breadcrumb">
	<ul>
		<?php $x = 0; foreach($site->breadcrumb() as $crumb) { ?>
			<li><a<?php echo ($crumb->isActive()) ? ' class="active"' : '' ?> href="<?php echo $crumb->url() ?>"><?php if ($x==0) echo 'Home'; else echo $crumb->title(); ?> &rsaquo;</a></li>
		<?php $x++; } ?>
	</ul>
</nav>
