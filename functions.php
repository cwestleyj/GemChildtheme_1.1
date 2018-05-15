<?php
  
function wpb_adding_scripts() {
wp_register_script('my_amazing_script', get_stylesheet_directory_uri() . '/accordion.js', array('jquery'),'1.1', true);
wp_enqueue_script('my_amazing_script');
}
  
add_action( 'wp_enqueue_scripts', 'wpb_adding_scripts' );  
?>