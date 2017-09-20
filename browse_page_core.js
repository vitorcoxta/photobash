(function(){
    var cookies;

    function readCookie(name,c,C,i){
        if(cookies){ return cookies[name]; }

        c = document.cookie.split('; ');
        cookies = {};

        for(i=c.length-1; i>=0; i--){
           C = c[i].split('=');
           cookies[C[0]] = C[1];
        }

        return cookies[name];
    }

    window.readCookie = readCookie;
})();

function resizeAfterChange(){
	if (document.createEvent) {
        var ev = document.createEvent('Event');
        ev.initEvent('resize', true, true);
        window.dispatchEvent(ev);
    }
    else {
        element=document.documentElement;
        var event=document.createEventObject();
        element.fireEvent("onresize",event);
    }
}

function bindPopupInfoImages(){
	$("a.button.popupInfoButton").click(function(event){
		updateImgSrc(""+$(this).attr("data-remodal-target"));
	});
}

function updateImgSrc(remodalTarget){
	$("div[data-remodal-id='"+remodalTarget+"'] > img").each(function(index, element){
		var dataSrc = $(element).attr("data-source");
		var src = $(element).attr("src");

		if((src == undefined || src == "") && dataSrc != undefined && dataSrc != ""){
			$(element).attr("src", dataSrc);
		}
	});
}

var paginationItemsCount = 0, paginationMaxItems = 0;

function showNextItems(initialNumberOfRows) {
	var windowWidth = window.innerWidth;

    var valuePerRow = windowWidth <= 650 ? 1 : 
    				  windowWidth <= 965 ? 2 :
    				  windowWidth <= 1280 ? 3 :
    				  windowWidth <= 1600 ? 4 :
    				  windowWidth <= 1920 ? 5 :
    				  windowWidth <= 2560 ? 6 : 7;

    // This calculation gets the number of items missing in the current row, and only displayes those.
    // If the row is full, shows the next one.
    var pagination = valuePerRow - ($('.filterContainer:not(.hidden)').length % valuePerRow);

    // It's starting or reseting
    if(initialNumberOfRows){
    	paginationItemsCount = 0;
    	paginationMaxItems = $('div.filterContainer').length;
    	pagination = pagination * initialNumberOfRows;
    }
    
    for (var i = paginationItemsCount; i < (paginationItemsCount + pagination); i++) {
        $('div.filterContainer:eq(' + i + ')').removeClass("hidden");
    }
    resizeAfterChange();

    paginationItemsCount += pagination;
    
    if (paginationItemsCount >= paginationMaxItems) {
        $(window).unbind("scroll");
    }
};

function resetPagination(){
	$('.filterContainer').addClass("hidden");
	showNextItems(4);

	if($('.allContainers').hasClass('jplist-hidden') || (paginationItemsCount > paginationMaxItems)) {
    	$('#showMore').addClass("hidden");
    } else if(paginationItemsCount <= paginationMaxItems) {
    	$('#showMore').removeClass("hidden");
    }
	
    $(window).unbind("scroll");
	resizeAfterChange();
}

function removePagination() {
	$('#showMore').addClass("hidden");
	$(".filterContainer").removeClass("hidden");
}

$(document).ready(function(){

	//create the filter containers

	$('.filter').closest('.sqs-block.code-block.sqs-block-code').each(function(index, elem) {
		$(elem).addClass("container-"+index);
	});

	$('.filter').closest('.sqs-block.code-block.sqs-block-code').prev('.sqs-block').each(function(index, elem) {
		$(elem).addClass("container-"+index);
	});

	var countContainers = $('.filter').closest('.sqs-block.code-block.sqs-block-code').length;

	for(var i = 0; i < countContainers; i++){
		$('.container-'+i).wrapAll('<div class="filterContainer hidden" />');
	}

	// reorganize html and fixing up css
	$('.filterContainer').wrapAll('<div class="allContainers" />');
	$('.allContainers').closest('.sqs-col-1').css('width', '100%');
	$('.allContainers').closest('.sqs-col-2').css('width', '100%');
	$('.allContainers').closest('.sqs-col-3').css('width', '100%');
	$('.allContainers').closest('.sqs-col-4').css('width', '100%');
	$('.allContainers').closest('.sqs-col-5').css('width', '100%');
	$('.allContainers').closest('.sqs-col-6').css('width', '100%');
	$('.allContainers').closest('.sqs-col-7').css('width', '100%');
	$('.allContainers').closest('.sqs-col-8').css('width', '100%');
	$('.allContainers').closest('.sqs-col-9').css('width', '100%');
	$('.allContainers').closest('.sqs-col-10').css('width', '100%');
	$('.allContainers').closest('.sqs-col-11').css('width', '100%');
	$('.allContainers').closest('.sqs-col-12').css('width', '100%');
	$('.allContainers').after("<div class=\"text-align-center jplist-no-results jplist-hidden\"><p>No results found. Please refine the filters.</p></div><div id=\"showMore\"><span class=\"lightbox-handle sqs-system-button sqs-editable-button\"><svg class=\"svg-icon\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"viewBox=\"0 0 110.9 111.6\" style=\"enable-background:new 0 0 110.9 111.6;\" xml:space=\"preserve\"><g><g><path class=\"white-svg\" d=\"M33.2,69.6c0,1.6-1.3,2.8-2.8,2.8H2.8c-1.6,0-2.8-1.3-2.8-2.8V42.1c0-1.6,1.3-2.8,2.8-2.8h27.5c1.6,0,2.8,1.3,2.8,2.8V69.6z\"/></g><g><path class=\"white-svg\" d=\"M72,69.6c0,1.6-1.3,2.8-2.8,2.8H41.6c-1.6,0-2.8-1.3-2.8-2.8V42.1c0-1.6,1.3-2.8,2.8-2.8h27.5c1.6,0,2.8,1.3,2.8,2.8V69.6z\"/></g><g><path class=\"white-svg\" d=\"M33.2,108.7c0,1.6-1.3,2.8-2.8,2.8H2.8c-1.6,0-2.8-1.3-2.8-2.8V81.2c0-1.6,1.3-2.8,2.8-2.8h27.5c1.6,0,2.8,1.3,2.8,2.8V108.7z\"/></g><g><path class=\"white-svg\" d=\"M72,108.7c0,1.6-1.3,2.8-2.8,2.8H41.6c-1.6,0-2.8-1.3-2.8-2.8V81.2c0-1.6,1.3-2.8,2.8-2.8h27.5c1.6,0,2.8,1.3,2.8,2.8V108.7z\"/></g><g><path class=\"white-svg\" d=\"M110.9,69.6c0,1.6-1.3,2.8-2.8,2.8H80.5c-1.6,0-2.8-1.3-2.8-2.8V42.1c0-1.6,1.3-2.8,2.8-2.8h27.5c1.6,0,2.8,1.3,2.8,2.8V69.6z\"/></g><g><path class=\"white-svg\" d=\"M33.2,30.4c0,1.6-1.3,2.8-2.8,2.8H2.8c-1.6,0-2.8-1.3-2.8-2.8V2.8C0,1.3,1.3,0,2.8,0h27.5c1.6,0,2.8,1.3,2.8,2.8V30.4z\"/></g><g><path class=\"white-svg\" d=\"M72,30.4c0,1.6-1.3,2.8-2.8,2.8H41.6c-1.6,0-2.8-1.3-2.8-2.8V2.8C38.8,1.3,40,0,41.6,0h27.5C70.7,0,72,1.3,72,2.8V30.4z\"/></g><g><path class=\"white-svg\" d=\"M110.9,30.4c0,1.6-1.3,2.8-2.8,2.8H80.5c-1.6,0-2.8-1.3-2.8-2.8V2.8C77.7,1.3,79,0,80.5,0h27.5c1.6,0,2.8,1.3,2.8,2.8V30.4z\"/></g><g><path class=\"white-svg\" d=\"M110.9,108.7c0,1.6-1.3,2.8-2.8,2.8H80.5c-1.6,0-2.8-1.3-2.8-2.8V81.2c0-1.6,1.3-2.8,2.8-2.8h27.5c1.6,0,2.8,1.3,2.8,2.8V108.7z\"/></g></g></svg>Show More Results</span></div>");
	$('.jplist-panel').parents('.content.page-content').css("padding-top", "40px");

	// shows the packs buttons
	$('a.button.downloadLink').css('display', 'initial');
	$('a.button.previewPopup').css('display', 'initial');
	$('a.button.popupInfoButton').css('display', 'initial');
	$('a.button.popupInfoButton + a.button').css('display', 'initial');

	// gets info from popup and places in hidden text, for the search filter
	$('.filterContainer').each(function(index, elem){
		var popupRemodalId = $(elem).find('.popupInfoButton').attr("data-remodal-target");
		var popupInfoText = "";

		$('.remodal[data-remodal-id="' + popupRemodalId + '"] .blockValue').each(function(index2, elem2){
			//Only saves text if it is "Main category" (0), "Camera Model" (4), "Format" (6), "Location" (9) or "Keywords" (10)
			if(index2 === 0 || index2 === 4 || index2 === 6 || index2 >= 9){

				$($(elem2).text().trim().split(",")).each(function(index3, elem3){
					popupInfoText += "," + elem3.trim();
				});
			}
		});

		$(elem).append("<p class='popup-info-text hidden'>" + popupInfoText + "</p>");
	});

	// binds click event to the Show More Results button
	$('#showMore').on('click', function (e) {
	    e.preventDefault();
	    showNextItems();
	    $(window).on("scroll", function(){
	    	if($(window).scrollTop() > $(".filterContainer:not(.hidden)").last().offset().top - $(".filterContainer:not(.hidden)").last().height() - ($(document).height() - ($(".filterContainer:not(.hidden)").last().offset().top + $(".filterContainer:not(.hidden)").last().height()))){
	    		showNextItems();
	    	}
	    });
	    $('#showMore').addClass("hidden");
	});

	// add categories to the dropdown menu
	var categories = [];
	var currentClass;
	$('.filter').children().each(function(index, elem){
		currentClass = $(elem).attr('class');
		if(currentClass != "free" && 
			currentClass != "masked" && 
			currentClass != "urban" && 
			currentClass != "nature" && 
			currentClass != "character" && 
			currentClass != "prop_Design" && 
			currentClass != "abstractfx" && 
			$.inArray(currentClass, categories) < 0){
			categories.push(currentClass);
		}

	});
	categories.sort();

	var categoryLabel;
	$.each(categories, function(index, category) {
		categoryLabel = category.replace(/_/g, " ");
		categoryLabel = categoryLabel.charAt(0).toUpperCase() + categoryLabel.substr(1);

		$('.jplist-select')
	         .append($("<option></option>")
	         .attr("data-path", "."+category)
	         .text(categoryLabel)); 
	});

	// activate filter and search
	$.fn.jplist.settings = {
		typingStart: function(){
			$('#showMore').addClass("hidden");
		},
		typingEnd: function(){
			resetPagination();
		}
	};

	$('.row.sqs-row').jplist({
		itemsBox: '.allContainers',
		itemPath: '.filterContainer',
		panelPath: '.jplist-panel'
	});

	// if there are items set on the cookies, let set them in the page
	var searchKeywordCookie = readCookie("searchkeyword");
	var filterboxCookie = readCookie("filterbox");
	var showMoreButtonCookie = readCookie("showmorebutton");

	if(searchKeywordCookie != undefined){
		$("#searchFilterTextBox").val(searchKeywordCookie);
		$("#searchFilterTextBox").trigger("keyup");
	}
	if(filterboxCookie != undefined){
		$('#filtersMenu').val(filterboxCookie);
		$('#filtersMenu').trigger("change");
	}
	if(showMoreButtonCookie != undefined && showMoreButtonCookie == "false"){
		removePagination();
	}

	// activate the preview popups
	$('.previewPopup').magnificPopup({
		type: 'image',
		removalDelay: 160,
		preloader: false,
		image:{
			cursor: null
		}
	});

	$("#categories-filter label").text("Filter:");
	$("#search-filter label").text("Search:");
	$('.browseTitle').removeClass("hidden");
	$('.jplist-select').removeClass("hidden");
	$("#search-filter").removeClass("hidden");
	$("#categories-filter").removeClass("hidden");

	// paginate containers
	resetPagination();

	$('#filtersMenu').on('change', function() {
		resetPagination();
	})

	resizeAfterChange();
	bindPopupInfoImages();

	// sets the allContainers height to correctly place the show more results button
    if($(".filterContainer:not(.hidden)").last().offset() != undefined){
    	$(".allContainers").height($(".filterContainer:not(.hidden)").last().offset().top - $(".filterContainer:not(.hidden)").first().offset().top + $(".filterContainer:not(.hidden)").last().height() + 1);
    }

    // replace svgs if resolution is high
	if(window.screen.availWidth >= 2160){
		var replacingImagesPopupInfo = ["https://www.photobash.org/s/Vector_Icon_MainCategory.png", "https://www.photobash.org/s/Vector_Icon_Price.png", "https://www.photobash.org/s/Vector_Icon_Size.png", "https://www.photobash.org/s/Vector_Icon_PhotoCount.png", "https://www.photobash.org/s/Vector_Icon_CameraModel.png", "https://www.photobash.org/s/Vector_Icon_FocalRange.png", "https://www.photobash.org/s/Vector_Icon_Format.png", "https://www.photobash.org/s/Vector_Icon_MinResolution.png", "https://www.photobash.org/s/Vector_Icon_MaxResolution.png", "https://www.photobash.org/s/Vector_Icon_Location.png"];

		$(".mainPackInfoContainer").each(function(index, element){
			$(element).find(".blockKey svg").each(function(index, element){
				$(element).replaceWith("<img class=\"svg-icon\" src=\""+replacingImagesPopupInfo[index]+"\">");
			});
		});
		
		$("svg.camera-icon").replaceWith("<img class=\"camera-icon\" src=\"https://www.photobash.org/s/Vector_Icon_CameraModel.png\">");

		$("svg.preview-product-icon").replaceWith("<img class=\"preview-product-icon\" src=\"https://www.photobash.org/s/Vector_Icon_ProductPage1.png\">");
		new Image().src = "https://www.photobash.org/s/Vector_Icon_ProductPage2.png";
		$("img.preview-product-icon").parent().on("mouseover", function(){
			$(this).find("img.preview-product-icon").attr("src", "https://www.photobash.org/s/Vector_Icon_ProductPage2.png");
		});
		$("img.preview-product-icon").parent().on("mouseout", function(){
			$(this).find("img.preview-product-icon").attr("src", "https://www.photobash.org/s/Vector_Icon_ProductPage1.png");
		});

		$("svg.download-icon").replaceWith("<img class=\"download-icon\" src=\"https://www.photobash.org/s/Vector_Icon_Download1.png\">");
		new Image().src = "https://www.photobash.org/s/Vector_Icon_Download2.png";
		$("a.downloadLink").on("mouseover", function(){
			$(this).find("img.download-icon").attr("src", "https://www.photobash.org/s/Vector_Icon_Download2.png");
		});
		$("a.downloadLink").parent().on("mouseout", function(){
			$(this).find("img.download-icon").attr("src", "https://www.photobash.org/s/Vector_Icon_Download1.png");
		});
	}
});

$(window).on("load", function() {
    resizeAfterChange();
});

$(window).on("resize", function(){
	// set the correct images width if they are still not correct
	if( $($(".filterContainer .thumb-image")[0]).attr("src") != undefined && ! $($(".filterContainer .thumb-image")[0]).attr("src").endsWith("750w")){
		$(".filterContainer .thumb-image").each(function(index, element) {
	    	var src = $(element).attr("src");
	    	if(src == undefined || src == ""){
	    		src = $(element).attr("data-src");
	    	}
	    	if(src != undefined && src != ""){
	        	$(element).attr("src", src.replace(/\?format=\d*w/g, "?format=750w"));
	        }
	        $(element).attr("data-image-resolution", "750w");
	    });
	}

	// sets the allContainers height to correctly place the show more results button
    if($(".filterContainer:not(.hidden)").last().offset() != undefined){
    	setTimeout(function(){
    		$(".allContainers").height($(".filterContainer:not(.hidden)").last().offset().top - $(".filterContainer:not(.hidden)").first().offset().top + $(".filterContainer:not(.hidden)").last().height() + 1);
    	}, 10);
    }
});

$(window).on("beforeunload", function(event) {
	var now = new Date();
	var time = now.getTime();
	time += 120 * 1000; //2 min
	now.setTime(time);
	
	document.cookie = "searchkeyword=" + $("#searchFilterTextBox").val() + '; expires=' + now.toUTCString() + '; path=/';
	document.cookie = "filterbox=" + $("#filtersMenu").find(":selected").val() + '; expires=' + now.toUTCString() + '; path=/';
	document.cookie = "showmorebutton=" + $("#showMore").is(":visible") + '; expires=' + now.toUTCString() + '; path=/';
});