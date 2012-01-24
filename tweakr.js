/**
 * Tweakr
 *
 * @author	Ben "presentation-player" Cooper
 * @author	David "oodavid" King
 */
 
tweakr = {};
tweakr.tags; // Our tag data
tweakr.pages; // Number of pages to load
tweakr.init = function(e){
	// If we have tweakr elements
		// If we have a local cache of data
			// Render
		// otherwise
			// Start loading tags
};
tweakr.loadTags = function(start_num){
	// Load this page of tags
};
tweakr.onLoadTags = function(tumblrresponseinformation){
	// Collate the tags into our local data object
	// If that was the last page
		// Store a local cache of data
		// Render
	// Otherwise
		// Load more tags
};
tweakr.updateCache = function(){
	// Update the cache with data
};
tweakr.render = function(){
	// Render the stats
};
$(document).ready(tweakr.init);