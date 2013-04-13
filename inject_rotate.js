var resize_to_height = true;

// Determine which angle to rotate the page to
var rotation = localStorage["angle"];

// Clears any previous rotations
function rotate_reset() {
	// Remove custom CSS from inner wrappers
	if(selector_exists('#wrap_rotate')) {
		$('#wrap_rotate').attr('style', '');
		$('#wrap_rotate_inner').attr('style', '');
	}
}

function selector_exists(selector) {
	return ( $(selector).length > 0 ) ;
}

// Rotates the document
function rotate(angle) {
	// Reset before changing the angle
	rotate_reset();

	// Do not create the wrappers if the default angle is zero
	if(angle != "0") {
		// Create the wrappers
		var wrap_rotate;
		var wrap_rotate_inner;

		if(selector_exists("#wrap_rotate")) {
			// Fetch the existing elements
			wrap_rotate 		= $('#wrap_rotate');
			wrap_rotate_inner	= $('#wrap_rotate_inner');
		} else {
			// Create the elements
			wrap_rotate 		= $('<div />', {id: "wrap_rotate"});
			wrap_rotate_inner	= $('<div />', {id: "wrap_rotate_inner"});;

			// Append to the body
			$('body').wrapInner(wrap_rotate_inner).wrapInner(wrap_rotate);
		}
	}

	// Handle the angle
	switch(angle) {
		case "270":
			
			var body_height = $('body').width();
			var window_width = $(window).height();

			body_height += 15; // for the scrollbar

			// Apply the appropriate style
			wrap_rotate.attr('style', "overflow-y: hidden; height: " + window_width + "px;");
			wrap_rotate_inner.attr('style', "position: relative; left: -100%; -webkit-transform: rotateZ(-90deg); -webkit-transform-origin-x: 100%; -webkit-transform-origin-y: 0%; float: right; " + (resize_to_height ? "width: " + window_width + "px;" : "") );

			return;

		case "180":
			// Rotate around 180 degrees
			wrap_rotate.attr('style', "-webkit-transform: rotateZ(180deg); -webkit-transform-origin-x: 50%; -webkit-transform-origin-y: 50%;");
			//$('body').css('-webkit-transform', 'rotateZ(180deg)').css('-webkit-transform-origin-x', '50%').css('-webkit-transform-origin-y', '50%');

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

	var degree;
	// Handle rotations
    switch(e.which) {
        case 37: // left
        	degree = "270";	// Rotate 270 degrees
        	break;

        case 38: // up
        	degree = "0";	// Rotate 0 degrees
        	break;

        case 39: // right
        	degree = "90";	// Rotate 90 degrees
        	break;

        case 40: // down
        	degree = "180";	// Rotate 180 degrees
        	break;

        default: 
        	return; // Exit
    }

    // Perform the rotation
    rotate(degree);

    // Prevent the default
    e.preventDefault();

});
