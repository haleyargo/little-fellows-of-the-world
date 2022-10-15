<body class = "front-page">

<?php
/**
 * The template for displaying the static home page
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package little_fellows
 */

get_header();
?>

	<main id="primary" class="home-page">

	<section class = "left">
		<div class = "image">
	      <img src = "<?php echo get_template_directory_uri(); ?>/img/TF_LOGO.png" alt = "logo" height = 40>
		</div>

	    <p><?php the_content(); ?></p>

		    <?php
			// get the link to the most recent post
			$homelink_query = new WP_Query('post_type=post&posts_per_page=1');
			while ($homelink_query->have_posts()) : $homelink_query->the_post();
			?>

			<a class="button" href="<?php the_permalink() ?>">Start Here</a>
			<?php
			endwhile;
			wp_reset_postdata();
			?>
    </section>

    <section class = "right">
   		<img src = "<?php echo get_template_directory_uri(); ?>/img/180920.jpg" alt = "logo" height = 40>
   	</section>




		<?php
		while ( have_posts() ) :
			the_post();?>

		<?php
		endwhile; // End of the loop.
		?>

	</main><!-- #main -->



</body>

<?php
get_footer();
?>
