var $table = jQuery.noConflict();

$table(document).ready(function(){
	$table('#table-bootstrap').dataTable({
		"oLanguage": {
			"oPaginate":{
				"sPrevious": '<span class="pointer">Anterior </span>',
				"sNext": '<span class="pointer">Proximo</span>'	
					},
				"sLengthMenu": "Mostrar _MENU_ resultado(s)",
				"sSearch": "Pesquisar: ",
				"sInfo": "Mostrando _START_ a _END_ de _TOTAL_",
				"sInfoFiltered": "(Total: _MAX_ resultado(s))",
				"sZeroRecords": "Resultado nao encontrado",
				"sInfoEmpty": "Sem resultados"
		}
	});
});
