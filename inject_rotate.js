/* 
// Read-in-bed.js 
// https://github.com/danalexander/read-in-bed
*/

// Determine which angle to rotate the page to
var rotation = localStorage["angle"];

switch(rotation)
	case "270":
		var my_height = $('body').width();

		

		//$('html').css('overflow-y', 'hidden').css('height', my_height);
		$('body').css('position', 'relative').css('left', '-100%').css('-webkit-transform', 'rotateZ(-90deg)').css('-webkit-transform-origin-x', '100%').css('-webkit-transform-origin-y', '0%').css('float', 'right');
		//var innerDiv = $('<div />', {id: 'wrapInner', style: 'overflow-y: hidden; height: ' + my_height + ';'});
		var innerDiv = $('<div id="wrapInner" />').css('overflow-y', 'hidden').css('height', my_height);
		$('body').wrapInner(innerDiv);
		break;

	case "180":
		// Rotate around 180 degrees
		$('body').css('-webkit-transform', 'rotateZ(180deg)').css('-webkit-transform-origin-x', '50%').css('-webkit-transform-origin-y', '50%');
		
		break;

	case "90":

		break;
}

function wrapBody(id) {
	// REFERENCE: http://stackoverflow.com/questions/1577814/wrapping-a-div-around-the-document-body
	
	// If it already exists, just return it (ie. double clicking the bookmarklet)
	if(document.getElementById(id) !== null) { return document.getElementById(id); }
	
	var div = document.createElement('div');
	div.id = id;
	
	// Move all the children in body into this wrapper
	while (document.body.firstChild) { div.appendChild(document.body.firstChild); }
	
	// Append the wrapper to the body
	document.body.appendChild(div);
	return div;
}

// Create the inner wrapper (this is the one that does the rotating)
var inner_wrapper = wrapBody('wrap_rotate_inner');

// Create the outer wrapper, AFTER creating the inner wrapper (this contains the rotated div, and clips the whitespace)
var outer_wrapper = wrapBody('wrap_rotate');

// Get the width and height of the inner wrapper
/* NOTE: We temporarily set a float so we get only the width of the elements, excluding all margins and offsets */
inner_wrapper.style.float = 'right';
var width  = wrap_rotate_inner.offsetWidth; 	/* $('#wrap_rotate_inner').width(); */
var height = wrap_rotate_inner.offsetHeight; 	/* $('#wrap_rotate_inner').height(); */
inner_wrapper.style.float = '';

// Rotate the inner wrapper
inner_wrapper.style.position = 'relative';
inner_wrapper.style.left = '-100%';

// Firefox support CSS3 Standards support (Firefox)
inner_wrapper.style.transform = 'rotateZ(-90deg)';
inner_wrapper.style.transformOrigin = '100% 0%'; // Firefox seems to support 'transform-origin' but doesn't support 'transform-origin-x' or 'transform-origin-y'

// Safari and Chrome support
inner_wrapper.style.webkitTransform = 'rotateZ(-90deg)';
inner_wrapper.style.webkitTransformOriginX = '100%';
inner_wrapper.style.webkitTransformOriginY = '0%';


// Set the width and height of the outer wrapper
// (height of the outer div = width of the inner div)
outer_wrapper.style.height = width + 'px';
outer_wrapper.style.overflowY = 'hidden';

// Lastly, we actually do want the inner element to float to the right
inner_wrapper.style.float = 'right';