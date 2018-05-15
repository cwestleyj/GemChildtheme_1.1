<?php

get_header(); ?>




<?php
	while ( have_posts() ) : the_post();
		get_template_part( 'content', 'page' );
	endwhile;
?>

</div><!-- #main-content --><div id="main-content" class="main-content">




<?php
get_footer();
