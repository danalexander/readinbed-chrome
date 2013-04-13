
// Determine which angle to rotate the page to
var rotation = localStorage["angle"];

// Clears any previous rotations
function rotate_reset() {
	// Remove custom CSS from body
	$('body').css('position', '').css('left', '').css('-webkit-transform', '').css('-webkit-transform-origin-x', '').css('-webkit-transform-origin-y', '').css('float', '');

	// Remove custom CSS from inner wrapper
	var wrapInner = $('#readinbed_wrapInner');
	if(wrapInner.length) {
		// Remove custom CSS from it
		wrapInner.css('overflow-y', '').css('height', ''); // Empty values delete the css attributes
	}
}

// Rotates the document
function rotate(angle) {
	switch(angle) {
		case "270":
			var my_height = $('body').width();

			
			//$('html').css('overflow-y', 'hidden').css('height', my_height);
			$('body').css('overflow-y', 'hidden').css('height', my_height);
			//var innerDiv = $('<div />', {id: 'wrapInner', style: 'overflow-y: hidden; height: ' + my_height + ';'});
			var innerDivExists = $('#readinbed_wrapInner').length ? true : false;
			var innerDiv = ( innerDivExists ? $('#readinbed_wrapInner') : $('<div id="readinbed_wrapInner" />') );

			innerDiv.css('position', 'relative').css('left', '-100%').css('-webkit-transform', 'rotateZ(-90deg)').css('-webkit-transform-origin-x', '100%').css('-webkit-transform-origin-y', '0%').css('float', 'right');
			if (!innerDivExists) { $('body').wrapInner(innerDiv); }
			
			break;

		case "180":
			// Rotate around 180 degrees
			$('body').css('-webkit-transform', 'rotateZ(180deg)').css('-webkit-transform-origin-x', '50%').css('-webkit-transform-origin-y', '50%');

			break;

		case "90":

			break;

		case "0":
			// Straight up, don't rotate. Do nothing!

			break;
	}
}

// Initial rotation
rotate(rotation);

// Bind rotation keypress
$(document).keydown(function(e){
	
	console.log(e);

	// Require pressing shift+ctrl+arrow key
	//if(!(e.ctrlKey && e.shiftKey)) { return; }
	if(!(e.shiftKey)) { return; }

	// Handle rotations
    switch(e.which) {
        //case 63234: // for keypress
        case 37: // left
        	
        	// Rotate 270 degrees
        	rotate_reset();
        	rotate('270');

        	break;

        //case 63232:
        case 38: // up

        	// Rotate 0 degrees
        	rotate_reset();
        	rotate('0');

        	break;

        //case 63235:
        case 39: // right

        	// Rotate 90 degrees
        	rotate_reset();
        	rotate('90');

        	break;

        //case 63233:
        case 40: // down

        	// Rotate 180 degrees
        	rotate_reset();
        	rotate('180');

        	break;

        default: return; // exit this handler for other keys
    }
    e.preventDefault();

});




















/*


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
// NOTE: We temporarily set a float so we get only the width of the elements, excluding all margins and offsets 
inner_wrapper.style.float = 'right';
var width  = wrap_rotate_inner.offsetWidth; 	// $('#wrap_rotate_inner').width(); 
var height = wrap_rotate_inner.offsetHeight; 	// $('#wrap_rotate_inner').height();
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
*/