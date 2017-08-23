$(document).ready(function(){
	$("#site").prepend("<div class=\"loader-background\"></div><div class=\"loader\"></div>");

	document.onreadystatechange = function () {
		var state = document.readyState;
		if (state == 'complete') {
			$(".loader").fadeOut();
			$(".loader-background").css("background", "none");
			setTimeout(function(){
				$(".loader").remove();
				$(".loader-background").remove();
			}, 500);
		}
	}

    $('.markdown-block .sqs-block-content h2').css('cursor','pointer');
    $(".markdown-block .sqs-block-content h2").nextUntil("h2").slideToggle();
    $(".markdown-block .sqs-block-content h2").click(function() {
    	$(".markdown-block .sqs-block-content h2").nextUntil("h2").slideUp();
    	$(this).nextUntil("h2").slideDown();
    });
});