$(document).ready(function() 
{
	$(".votos .voting_btn").click(function (e) 
	{
	 	e.preventDefault();
		var voto_hecho = $(this).data('voto');
		var id = $(this).data("id"); 
		var div = $(this);
		
		if(voto_hecho && id)
		{
			$.post('../ajax_voto.php', {'id':id, 'voto':voto_hecho}, function(data) 
			{
				if (data!="voto_duplicado") 
				{
					div.addClass(voto_hecho+"_votado").find("span").text(data);
					div.closest("ul").append("<span class='votado'>Gracias!</span>");
				}
				else div.closest("ul").append("<span class='votado'>Ya has votado!</span>");
			});
			setTimeout(function() {$('.votado').fadeOut('fast');}, 3000);
		}
	});
});

