

$(document).on("scroll", function(){

    if ($(document).scrollTop() > 40){
        $(".primary-nav").addClass("shrink");
        $(".navbar").css('background-color', '#ffc938');
        $(".logo").addClass("shrink-logo");
    } else {
        $(".primary-nav").removeClass("shrink");
        $(".logo").removeClass("shrink-logo");
        $('.show').css('background-color', '#ffc938');
        $('.navbar').css('background-color', 'transparent');
       
    }

});


$(document).ready(function() {
    $('a[href*=#]').bind('click', function(e) {
            e.preventDefault(); // prevent hard jump, the default behavior

            var target = $(this).attr("href"); // Set the target as variable
            console.log(target)
            // perform animated scrolling by getting top-position of target-element and set it as scroll target
            $('html, body').stop().animate({
                    scrollTop: $(target).offset().top
            }, 800, function() {
                    location.hash = target; //attach the hash (#jumptarget) to the pageurl
            });

            return false;
    });
    $(window).scroll(function() {
		var scrollDistance = $(window).scrollTop();
		// Assign active class to nav links while scolling
		$('.page-section').each(function(i) {
				if ($(this).position().top <= scrollDistance) {
						$('.navigation a.active').removeClass('active');
						$('.navigation a').eq(i).addClass('active');
				}
		});
    }).scroll();
});


const d = new Date()
const year = d.getFullYear();
const year_to_append = document.getElementById('year');
year_to_append.append(`${year}`);
