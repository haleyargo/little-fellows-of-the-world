<?php
/**
 * Template part for displaying the main menu
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package little_fellows
 */
?>

<nav>
	<nav class = "menu">
		
  <ul>

   <li><div class="li_image"><img src="img/180920.jpg" height=200></div><div class="li_text"><h1>Statue Title</h1><h2>Greek Mycenaean
<br>1400-1000 BCE</h2></div><a class = "grow" href = '#'>View</a></li>

   <li><div class="li_image"><img src="img/180942.jpg" height=200></div><div class="li_text"><h1>Statue Title</h1><h2>Greek Mycenaean
<br>1400-1000 BCE</h2></div><a class = "grow" href = '#'>View</a></li>

   <li><div class="li_image"><img src="img/180948.jpg" height=200></div><div class="li_text"><h1>Statue Title</h1><h2>Greek Mycenaean
<br>1400-1000 BCE</h2></div><a class = "grow" href = '#'>View</a></li>

   <li><div class="li_image"><img src="img/180958.jpg" height=200></div><div class="li_text"><h1>Statue Title</h1><h2>Greek Mycenaean
<br>1400-1000 BCE</h2></div><a class = "grow" href = '#'>View</a></li>

   <li><div class="li_image"><img src="img/273082.jpg" height=200></div><div class="li_text"><h1>Statue Title</h1><h2>Greek Mycenaean
<br>1400-1000 BCE</h2></div><a class = "grow" href = '#'>View</a></li>

   <li><div class="li_image"><img src="img/32237.jpg" height=200><div class="li_text"><h1>Statue Title</h1><h2>Greek Mycenaean
<br>1400-1000 BCE</h2></div></div><a class = "grow" href = '#'>View</a></li>

   <li><div class="li_image"><img src="img/180920.jpg" height=200></div><div class="li_text"><h1>Statue Title</h1><h2>Greek Mycenaean
<br>1400-1000 BCE</h2></div><a class = "grow" href = '#'>View</a></li>

   <li><div class="li_image"><img src="img/180920.jpg" height=200></div><div class="li_text"><h1>Statue Title</h1><h2>Greek Mycenaean
<br>1400-1000 BCE</h2></div><a class = "grow" href = '#'>View</a></li>

   <li><div class="li_image"><img src="img/180920.jpg" height=200></div><div class="li_text"><h1>Statue Title</h1><h2>Greek Mycenaean
<br>1400-1000 BCE</h2></div><a class = "grow" href = '#'>View</a></li>

   <li><div class="li_image"><img src="img/180920.jpg" height=200></div><div class="li_text"><h1>Statue Title</h1><h2>Greek Mycenaean
<br>1400-1000 BCE</h2></div><a class = "grow" href = '#'>View</a></li>
 </ul>
 </nav>

	<?php

		$menu_args = array (
			'post_type' => 'post',
			'posts_per_page' => -1
		);

		$query_menu = new WP_Query( $menu_args );

		if ( $query_menu->have_posts() ) :
			while ( $query_menu->have_posts() ) :
				$query_menu->the_post();

	?>

	<?php

	/* The following code generates an HTML anchor/link tag with the page link, post title and post image for each of your posts. You will probably need to edit this code based on what you have in your menu items (maybe just an image? maybe just text? maybe both?). */

	/* Also, this example assumes that your navigation is built using a nav element with a set of anchor/link tags. If you are using a different format, you will need to edit some of these details. */

	?>

	<a href="<?php the_permalink(); ?>">
		<?php the_post_thumbnail(); ?>
		<h4><?php the_title(); ?></h4>
		<button>VIEW</button>
	</a>

	<?php
	
		endwhile;
		wp_reset_postdata();
		endif;

	?>

</nav>
