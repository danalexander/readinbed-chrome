// Howto get background.js page:
// chrome.extension.getBackgroundPage();

// Saves options to localStorage.
function save_options() {
  
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
}

function showStatus(msg) {
  $('#status').html(msg).fadeIn().delay(750).fadeOut();
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
    //var radiobutton = jQuery("input[name='select_angle'][value="+data.angle+"]");
    jQuery("#" + data.angle).prop('checked', true);  //jQuery("input[name='select_angle'][value="+data.angle+"]").prop('checked', true);

    // Temporary hack
    switch(data.angle) {
      case "90":  click3(); break; 
      case "180": click2(); break; 
      case "270": click1(); break; 
    }
  });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.querySelector('#save').addEventListener('click', save_options);