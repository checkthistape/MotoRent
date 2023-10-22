$(function(){
$('.blog-post-date').hover(
 function(){
	 $('+.blog-post-info>.categorie', this).fadeIn();
     },
 function(){
	 $('+.blog-post-info>.categorie', this).fadeOut();
     }
)
});

