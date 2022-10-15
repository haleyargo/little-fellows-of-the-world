
<script src="https://kit.fontawesome.com/71b904c59f.js" crossorigin="anonymous"></script>
<?php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package little_fellows
 */

get_header();
?>

<main id="primary" class="posts-main">


		<?php
		while ( have_posts() ) :
			the_post();
		?>

      <div class = "post_image">
      	<?php the_post_thumbnail(); ?>
      
    </div>

    <div class = "text">
      <h1><?php the_title(); ?></h1>

      	<h2><span class = "label">Origin</span>
      		<?php the_field('origin'); ?>
      		</h2>

     	<h2><span class = "label">Date</span>
     		<?php the_field('date'); ?>
     		</h2>

      	<h2><span class = "label">Artist</span>
      		<?php the_field('artist'); ?>	
      	</h2>

      <h2><span class = "label">Medium</span>
      	<?php the_field('medium'); ?>	
      </h2>

      <h2><span class = "label">Height</span>
      	<?php the_field('size'); ?>		
      </h2>
      
      <?php the_content(); ?>
    </div>

    

  </main>

  <?php get_template_part('template-parts/main-menu'); ?>


  
		<?php
		endwhile; // End of the loop.
		?>


<?php
get_footer();
?>