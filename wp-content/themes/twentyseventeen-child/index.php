<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package WordPress
 * @subpackage Twenty_Seventeen
 * @since 1.0
 * @version 1.0
 */

get_header(); ?>

<div class="wrap">

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">
			
			<div id="main-title">Our new website will be</div>
			<hr>
			<div id="main-desc"><div>Coming</div><div>Soon</div></div>
			<button id="stay-tune">Stay tuned</button>

			<div id="countdown-slot">
				<div id="days" class="time-countdown"> </div>
				<div id="hours" class="time-countdown"> </div>
				<div id="minutes" class="time-countdown"> </div>
				<div id="seconds" class="time-countdown"> </div>
			</div>

			<div id="selection-boxes-area">
				
			</div>

		</main><!-- #main -->
	</div><!-- #primary -->
	<?php get_sidebar(); ?>
</div><!-- .wrap -->

<?php get_footer();
