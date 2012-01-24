/**
 * Tweakr
 *
 * @author	Ben "presentation-player" Cooper
 * @author	David "oodavid" King
 */
 
tweakr = {};
tweakr.tags; // Our tag data
tweakr.num = 2; // How many posts per-page
tweakr.init = function(e){
	// If we have tweakr elements
		// If we have a local cache of data
			// Render
		// otherwise
			// Start loading tags
			tweakr.loadTags(0);
};
tweakr.loadTags = function(start){
	// Load this page of tags
	$.getScript('http://oodavid.tumblr.com/api/read/json?num=50&callback=tweakr.onLoadTags&num=' + tweakr.num + '&start=' + start);
};
tweakr.onLoadTags = function(data){
	// Collate the tags into our local data object
	// Loop the posts
	$.each(data.posts, function(p,post){
		// If the post has tags
		if(post.tags){
			// Loop the tags
			$.each(post.tags, function(t,tag){
				// Do something with the tags
				console.log(tag);
			});
		}
	});
		// The ALTERNATIVE way (pure javascript)
		/*
		var numberofposts = data.posts.length;
		for(var p=0; p<numberofposts; p++){
			var post = data.posts[p];
			// If the post has tags
			if(post.tags){
				// Loop the tags
				var numberoftags = post.tags.length;
				for(var t=0; t<numberoftags; t++){
					var tag = post.tags[t];
					console.log(tag);
				}
			}
		}
		*/
	// 
	// If that was the last page
	if(data.posts.length == 0){
		// Store a local cache of data
		console.log('were done');
		// Render
	} else {
		// Load more tags
		var nextpagestart = data['posts-start'] + tweakr.num;
		tweakr.loadTags(nextpagestart);
	}
};
tweakr.updateCache = function(){
	// Update the cache with data
};
tweakr.render = function(){
	// Render the stats
};
$(document).ready(tweakr.init);