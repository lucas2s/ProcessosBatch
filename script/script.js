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

	window.addEventListener('resize', function(){
		$('#idLado').height($('#idConteudo').height());
		$('.btnBarLateral').width($('#idLado').width());
		if ($('#idConteudo').height() < $(window).height())
		{
			$('#idConteudo').height($(window).height());
			$('#idLado').height($('#idConteudo').height());
		}
		/*
		if ($(window).width() < 750)
		{
			$('#idLado').addClass("collapse");
		} else {
			$('#idLado').removeClass("collapse");
		}*/
	});
});

window.onscroll = function() {myScroll()};

function myScroll() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
		$('#idBarLateral ul').addClass('nav-positon-on');
    } else {
        $('#idBarLateral ul').removeClass('nav-positon-on');
    }
}
