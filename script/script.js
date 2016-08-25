$(document).ready(function(){
	/* ATIVAR O BOTAO DA BARRA HORIZONTAL */
	$('#idBarraHorizontal ul li').click(function(){
        $('#idBarraHorizontal ul .active').removeClass('active');
        $(this).addClass('active');
    }); 	
	
	/* ATIVAR O BOTAO DA BARRA LATERAL */
	$('#idBarraLado ul li').click(function(){
        $('#idBarraLado ul .active').removeClass('active');
        $(this).addClass('active');
    }); 

	/* ATIVANDO A CLASSE nav-positon-on PARA A BARRA LATERAL */
	window.onscroll = function() {myScroll()};
	function myScroll() {
		if (document.body.scrollTop > 97 || document.documentElement.scrollTop > 97) {
			$('#idBarraLado aside').addClass('nav-positon-on');
		} else {
			$('#idBarraLado aside').removeClass('nav-positon-on');
		}
	} 
});





