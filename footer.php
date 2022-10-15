<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package little_fellows
 */

?>
 <footer>
    

    <div class = "text_logo">
      <div class="logo">
        <img src="<?php echo get_template_directory_uri(); ?>/img/risd_logo.png" height=20>
      </div>
    </div>

  <section class = "right">
      <div class = "post-nav">
        <ul>
          <li><?php next_post_link('%link','previous'); ?></li>
          <li><?php previous_post_link('%link','next'); ?></li>
        </ul>
      </div>

      <div class = "copyright">
        <p class = "copyright1">All art pieces are owned by their creators</p>
        <p class = "copyright2">This site has no affiliation with the RISD Museum</p>
      </div>

  </section>

  </footer>
<?php get_template_part('template-parts/main-menu'); ?>

<?php wp_footer(); ?>

</body>
</html>
