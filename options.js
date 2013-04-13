// Save this script as `options.js`

// Saves options to localStorage.
function save_options() {
  // Angle setting
  
  //var select = document.getElementById("select_angle");
  //var select = document.readinbedForm["select_angle"];
  //var select = $("select_angle",document["readinbedForm"])
  var select = jQuery("input[name='select_angle']").filter(':checked');
  //var angle = select.children[select.selectedIndex].value;
  var angle = select.val();
  localStorage["angle"] = angle;

  // Enabled setting
  var enabled = $('#enabled').is(':checked');
  localStorage["enabled"] = enabled;

  // Update status to let user know options were saved.
  var status = document.getElementById("status");
  status.innerHTML = "Options Saved.";
  setTimeout(function() {
    status.innerHTML = "";
  }, 750);
}

// Restores select box state to saved value from localStorage.
function restore_options() {
  // Load the setting
  var favorite = localStorage["angle"];
  if (!favorite) {
    return;
  }
  // Find the radio button with the correct value, otherwise exit
  var radiobutton = jQuery("input[name='select_angle'][value="+favorite+"]");
  if(!radiobutton.length) {
    return;
  }

  // Set the checked attribute
  radiobutton.attr('checked', 'true');
  
  // Set enabled / disabled
  var enabled = localStorage["enabled"];
  if(enabled=="true") { // localStorage stores true boolean as "true" string...
    $('#enabled').attr('checked', 'true');
  }


  // var select = document.getElementById("select_angle");
  // for (var i = 0; i < select.children.length; i++) {
  //   var child = select.children[i];
  //   if (child.value == favorite) {
  //     child.selected = "true";
  //     break;
  //   }
  // }
}
document.addEventListener('DOMContentLoaded', restore_options);
document.querySelector('#save').addEventListener('click', save_options);