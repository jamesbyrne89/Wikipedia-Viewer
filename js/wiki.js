// Document loaded
$(document).ready(function(){

// On button click
$('#search_submit').click(function(){
 var searchTerm = $('#search_box').val();

var api = 'http://en.wikipedia.org/w/api.php?action=opensearch&search='+ searchTerm +'&format=json&callback=?';


$.ajax({
type: "GET",
url: api,
async: false,
dataType: "jsonp",
success: function(data){

$('#search_title').prepend("Search results for \"" + searchTerm + "\"");
for (var i=0;i<data[1].length;i++)
{
	var heading = (data[1][i]);
var description = (data[2][i]);
var link = (data[3][i]);

$('#output').fadeIn(500).prepend("<a href="+link+"><li><h3>" + heading + "</h3><hr><p>" + description + "</p></li>");
$('#search_box').val('');

}

},
error: function(errorMessage){
	console.log(apiUrl);

}

});

});

	});

	$('#search_box').keyup(function(event) {
		if (event.keyCode == 13) { // Enter key pressed
			$('#search_submit').click(); // Trigger search button click event
}


  // back to top
        var offset = 220;
        var duration = 500;
      $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
            $('.back-to-top').fadeIn(duration);
        } else {
            $('.back-to-top').fadeOut(duration);
        }
      });
    
      $('.back-to-top').click(function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, duration);
        return false;
      })

      // niceScroll
        $("html").niceScroll({
          scrollspeed: 50,
          mousescrollstep: 45,
        });



});




