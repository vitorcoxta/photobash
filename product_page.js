document.oncontextmenu = function(e){
	var target = (typeof e !="undefined")? e.target: event.srcElement
	if (target.tagName == "IMG" || (target.tagName == 'A' && target.firstChild.tagName == 'IMG') || (target.tagName == 'A' && target.children.length == 2 && target.children[1].tagName == 'IMG'))
		return false;
}

$(document).ready(function(){
	$("#content > div:nth-child(2) div.image-block-wrapper img").wrap("<figure class=\"tint\" />");
	$("figure.tint").prepend("<span><svg version=\"1.1\" class=\"medium-svg-icon\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 284.4 190.1\" style=\"enable-background:new 0 0 284.4 190.1;\" xml:space=\"preserve\"><defs><filter id=\"dropshadow\" height=\"130%\"><feGaussianBlur in=\"SourceAlpha\" stdDeviation=\"5\"></feGaussianBlur><feOffset dx=\"0\" dy=\"0\" result=\"offsetblur\"></feOffset><feMerge><feMergeNode></feMergeNode><feMergeNode in=\"SourceGraphic\"></feMergeNode></feMerge></filter></defs><g><path class=\"blue-svg\" d=\"M0,93.9c11.1-18.3,23.8-35.3,39.5-50C61.1,23.6,85.7,8.6,115.1,2.9 c39.7-7.8,76.2,0.5,109.2,23.5C248.9,43.4,268,65.6,283,91.5c1.4,2.4,2.1,4.4,0.5,7.1c-19.5,33.2-44.9,60.3-79.8,77.4 c-54.1,26.4-127.1,16.1-173.1-34.2c-11.1-12.1-20.4-25.4-27.8-40c-0.8-1.6-1.9-3-2.8-4.5C0,96.1,0,95,0,93.9z M201.8,95 c0-34-25-59.1-58.9-59.2C108.8,35.8,83.4,61,83.4,95c0,33.8,25.2,59.1,59,59.2C176.6,154.3,201.8,129.2,201.8,95z\"/><path class=\"blue-svg\" d=\"M178.2,94.8c0.1,19.5-15.8,35.6-35,35.8c-19.7,0.1-36.1-15.9-36.1-35.4 C106.9,76,123,59.6,142.2,59.5C162,59.3,178.1,75.1,178.2,94.8z\"/></g></svg>Quick Look</span>");

	// hack to remove empty rows
	$("#content > div:first-child div.content.page-content div.row.sqs-row").each(function(index, element){
		if($(element).children().length == 1 && $(element).children(0).hasClass("col sqs-col-0 span-0") && $(element).children(0).children().length == 0){
			$(element).remove();
	   }
	});

	$("#content > div:first-child div.content.page-content div.row.sqs-row:first").prepend("<a class=\"button close-button-product-page\">&#215;</a>");

	$("div.margin-wrapper a.image-slide-anchor").on("click", function(e){
		if(e.originalEvent != undefined){
	    	$(this).children("img").click();
	    }
	});

	$("a.close-button-product-page").on("click", function(){
	    if(history.length === 1){
	        onclick=window.close()
	    } else {
	        history.back();
	    }
	});

	$('div.margin-wrapper a').on('dragstart', function(event){
		event.preventDefault();
	});

	$('div.margin-wrapper a').on('click', function(event){
		$("#content").addClass("disabled");

		$(".sqs-lightbox-close").on("click", function(){
			$("#content").removeClass("disabled");
		});

		$("div.sqs-lightbox-slide").on("click", function(e){
			if($(e.target).hasClass("sqs-active-slide")){
				$("#content").removeClass("disabled");
			}
		});

		$(document).keyup(function(e) {
			if (e.keyCode === 27){
				$("#content").removeClass("disabled");
			}
		});
	});

	$( 'a.product-page-download-button' ).click(function() {
		fbq('track', 'AddToCart', {
		});
	});

	// replace svgs if resolution is high
	if(window.screen.availWidth >= 2160){
		var replacingImages = ["https://www.photobash.org/s/Vector_Icon_MainCategory.png", "https://www.photobash.org/s/Vector_Icon_Price.png", "https://www.photobash.org/s/Vector_Icon_Size.png", "https://www.photobash.org/s/Vector_Icon_PhotoCount.png", "https://www.photobash.org/s/Vector_Icon_CameraModel.png", "https://www.photobash.org/s/Vector_Icon_FocalRange.png", "https://www.photobash.org/s/Vector_Icon_Format.png", "https://www.photobash.org/s/Vector_Icon_MinResolution.png", "https://www.photobash.org/s/Vector_Icon_MaxResolution.png", "https://www.photobash.org/s/Vector_Icon_Location.png"];
		
		$(".blockKey svg").each(function(index, element){
			$(element).replaceWith("<img class=\"svg-icon\" src=\""+replacingImages[index]+"\">");
		});
	}
});