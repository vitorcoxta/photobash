document.oncontextmenu = function(e){
	var target = (typeof e !="undefined")? e.target: event.srcElement
	if (target.tagName == "IMG" || (target.tagName == 'A' && target.firstChild.tagName == 'IMG'))
		return false;
}

function CloseButton(){
    if(history.length === 1){
        onclick=window.close()
    } else {
        history.back();
    }
}

$(document).ready(function(){
	$("#content > div:nth-child(2) div.image-block-wrapper img").wrap("<figure class=\"tint\" />");
	$("figure.tint").prepend("<span><svg version=\"1.1\" class=\"medium-svg-icon\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 284.4 190.1\" style=\"enable-background:new 0 0 284.4 190.1;\" xml:space=\"preserve\"><defs><filter id=\"dropshadow\" height=\"130%\"><feGaussianBlur in=\"SourceAlpha\" stdDeviation=\"5\"></feGaussianBlur><feOffset dx=\"0\" dy=\"0\" result=\"offsetblur\"></feOffset><feMerge><feMergeNode></feMergeNode><feMergeNode in=\"SourceGraphic\"></feMergeNode></feMerge></filter></defs><g><path class=\"blue-svg\" d=\"M0,93.9c11.1-18.3,23.8-35.3,39.5-50C61.1,23.6,85.7,8.6,115.1,2.9 c39.7-7.8,76.2,0.5,109.2,23.5C248.9,43.4,268,65.6,283,91.5c1.4,2.4,2.1,4.4,0.5,7.1c-19.5,33.2-44.9,60.3-79.8,77.4 c-54.1,26.4-127.1,16.1-173.1-34.2c-11.1-12.1-20.4-25.4-27.8-40c-0.8-1.6-1.9-3-2.8-4.5C0,96.1,0,95,0,93.9z M201.8,95 c0-34-25-59.1-58.9-59.2C108.8,35.8,83.4,61,83.4,95c0,33.8,25.2,59.1,59,59.2C176.6,154.3,201.8,129.2,201.8,95z\"/><path class=\"blue-svg\" d=\"M178.2,94.8c0.1,19.5-15.8,35.6-35,35.8c-19.7,0.1-36.1-15.9-36.1-35.4 C106.9,76,123,59.6,142.2,59.5C162,59.3,178.1,75.1,178.2,94.8z\"/></g></svg>Quick Look</span>");
});