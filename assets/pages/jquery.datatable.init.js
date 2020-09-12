

 
$(document).ready(function() {
  $('#datatable').DataTable();

  $(document).ready(function() {
      $('#datatable2').DataTable();  
  });

  //Buttons examples
  var table = $('#datatable-monitor').DataTable( {
				dom: 'Bfrtip',
				buttons: ['excel' , 'print']
			} );
	  
	table.buttons().container()
      .appendTo('#datatable-monitor_wrapper .col-md-6:eq(0)');
});