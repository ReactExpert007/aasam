/**
 * Theme: Frogetor - Responsive Bootstrap 4 Admin Dashboard
 * Author: Mannatthemes
 * Form Wizard Js
 */

  
$(document).ready(function(){

           

  // Toolbar extra buttons
  var btnFinish = $('<button></button>').text('Submit')
      .addClass('btn btn-primary')
      .on('click', function(){
		 
		var title = "Are You Sure To Submit ?";
            var body = "You will not be able to edit the form after submitting. You can only upload your documents and photos till midnight of 30-06-2020";
 
            $("#MyPopup .modal-title").html(title);
            $("#MyPopup .modal-body").html(body);
            $("#MyPopup").modal("show");
 
  });
  var btnCancel = $('<button></button>').text('Cancel')
      .addClass('btn btn-danger')
      .on('click', function(){ $('#smart_wizard').smartWizard("reset"); 
  });
  


  $('#smart_wizard').smartWizard({
      selected: 0,
      theme: 'default',
      transitionEffect:'fade',
      showStepURLhash: false,
      toolbarSettings: {
          toolbarButtonPosition: 'end',
          toolbarExtraButtons: []
      }
  });
 

  // Smart Wizard Arrows
  $('#smart_wizard_arrows').smartWizard({
      selected: 0,
      theme: 'arrows',
      transitionEffect:'fade',
      toolbarSettings: {
          toolbarPosition: 'bottom',
          toolbarExtraButtons: []
      }
	  
  });
  

   // Smart Wizard Circle
   $('#smart_wizard_circles').smartWizard({
      selected: 0,
      theme: 'circles',
      transitionEffect:'fade',
      toolbarSettings: {
          toolbarPosition: 'bottom',
          toolbarExtraButtons: [btnFinish, btnCancel]
      }
  });
});