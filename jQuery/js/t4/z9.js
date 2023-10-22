var a=0;
 $(function(){
$('.blog-post-date').hover(

function(){
$('+.blog-post-info>.categorie', this).fadeIn().html(function(i, origText){
  if(a==0){
  a=1
  return "Бажаєте замовити?" + origText;
  }
   
 });

},
function(){
$('+.blog-post-info>.categorie', this).fadeOut();
}
)
})