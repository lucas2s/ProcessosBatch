$(document).ready(function(){

	$('#myNavbar ul li').click(function(){
        $('#myNavbar ul .active').removeClass('active');
        $(this).addClass('active');
    }); 	
	
	$('#idBarLateral ul li').click(function(){
        $('#idBarLateral ul .active').removeClass('active');
        $(this).addClass('active');
    }); 
	
	$('#idLado').height($('#idConteudo').height());
	$('.btnBarLateral').width($('#idLado').width());

	if ($('#idConteudo').height() < $(window).height())
	{
		$('#idConteudo').height($(window).height());
		$('#idLado').height($('#idConteudo').height());
	}
	
	$(window).load(function(){
		$('#idLado').height($('#idConteudo').height());
		$('.btnBarLateral').width($('#idLado').width());
	});
	

	$('.scroll').click(function(event){        
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 1000);
	});
	
	window.addEventListener('resize', function(){
		$('#idLado').height($('#idConteudo').height());
		$('.btnBarLateral').width($('#idLado').width());
		if ($('#idConteudo').height() < $(window).height())
		{
			$('#idConteudo').height($(window).height());
			$('#idLado').height($('#idConteudo').height());
		}
	});
});