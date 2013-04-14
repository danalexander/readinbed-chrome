// Howto get background.js page:
// chrome.extension.getBackgroundPage();

var tips = [
  'Click on the <img src="icon16.png" /> <b>Read In Bed</b> icon in the Chrome toolbar to enable / disable.',
  'Press Shift+Ctrl+[Arrow Key] on any webpage to instantly switch orientation.',
  'You can use Keyboard shortcuts even if ReadInBed is not enabled.'
];

// Returns a random tip from the array of tips
function getTip() {
  return tips[Math.floor(Math.random()*tips.length)];
}

// Saves options to localStorage.
function save_options(event) {
  
  // Angle setting
  var select = jQuery("input[name='select_angle']").filter(':checked');
  var angle = select.val();

  // Enabled setting
  var enabled = readinbedForm.enabled.checked;
  
  // Save our settings
  chrome.storage.local.set({"enabled": enabled, "angle": angle}, function() {
    
    // Update status to let user know options were saved.
    showStatus("Options saved");

  });

  event.preventDefault();
}

function showStatus(msg, status_class) {
  status_class = status_class || "success";
  $('#status').addClass(status_class).html(msg).slideDown(100, "linear").delay(2000).slideUp(100, "linear", function() { $(this).removeClass(status_class);} )
}

// Restores select box state to saved value from localStorage.
function restore_options() {
  
  // Load the settings
  chrome.storage.local.get(['enabled', 'angle'], function(data) {
    
    // Enabled checkbox
    if(data.enabled) {
      readinbedForm.enabled.checked = true;
    }

    // Angle
    $("#angle_" + data.angle + "_img").click(); // The click event sets the class clicked and checks the radio button, because it is a <label> for the radio
    //$("#angle_" + data.angle).prop('checked', true);

  });
  
  // Draw the tip
  $('div.tip').html(getTip());

  // Only bind after the page is fully loaded
  document.querySelector('#save').addEventListener('click', save_options);

  // Adds clicked class to selected img
  $('div.orientation_list img').click(function() {
    $('div.orientation_list img').removeClass('clicked');
    $(this).addClass('clicked');
  });
}

document.addEventListener('DOMContentLoaded', restore_options);