// Document loaded
$(document).ready(function() {

    // On button click
    $('#search_box').change(function() {
        var searchTerm = $('#search_box').val();

        var api = 'http://en.wikipedia.org/w/api.php?action=opensearch&search=' + searchTerm + '&format=json&callback=?';

        $('#back-to-top').fadeIn(500);
        $.ajax({
            type: "GET",
            url: api,
            async: false,
            dataType: "jsonp",
            success: function(data) {

                if (searchTerm == "") {
                    $('#search_title').html("Oops. Please type something and try again.");
                } else {
                    $('#search_title').html("Search results for \"" + searchTerm + "\":");
                    $("#output").html("");
                    for (var i = 0; i < data[1].length; i++) {
                        var heading = (data[1][i]);
                        var description = (data[2][i]);
                        var link = (data[3][i]);

                        $('#output').fadeIn("slow").prepend("<a href=" + link + "><li><h3>" + heading + "</h3><hr><p>" + description + "</p></li>");


                    }
                }

            },
            error: function(errorMessage) {
                console.error('Error fetching API data.')

            }

        });

    });

});

$('#search_box').keyup(function(event) {
    $('#search_submit').click(); // Trigger search button click event
});