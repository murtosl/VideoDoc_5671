$(document).ready(function() {
	$(".naviLinks a").hide();
	if(curPage){
			$('.' + curPage).addClass('currentLink').show();
			$('.' + curPage + 'N').show();
			$('.' + curPage + 'N').prev().addClass('currentLink');
			$('.' + curPage + 'P').show();
			$('.' + curPage + 'P').next().addClass('currentLink');
	} else{
		$("#navLinks a").first().show();
		$("#nextLinks a").first().show();
	}
	
	$("#endJump").click(function(){
		$(".naviLinks a").hide();
		var tempClass = $("#navLinks a").last().attr('class');
		$('.' + tempClass).show();
		$('.' + tempClass + 'P').show();
		$('.' + tempClass + 'N').show();
	});
	
	$("#startJump").click(function(){
		$(".naviLinks a").hide();
		var tempClass = $("#navLinks a").first().attr('class');
		$('.' + tempClass).show();
		$('.' + tempClass + 'P').show();
		$('.' + tempClass + 'N').show();
	});
	
	$("#next").click(function(){
		var tempClass = $("#navLinks a:visible").attr('class');
		tempClass = tempClass.replace(" currentLink", "");
		
		var nextClass = $('.' + tempClass).next().attr('class');
		nextClass = nextClass.replace(" currentLink", "");
		
		if(nextClass){
			$(".naviLinks a").hide();
			$('.' + nextClass).show();
			$('.' + nextClass + 'N').show();
			$('.' + nextClass + 'P').show();
		}
	});
	
	$("#prev").click(function(){
		
		var tempClass = $("#navLinks a:visible").attr('class');
		tempClass = tempClass.replace(" currentLink", "");
		
		var prevClass = $('.' + tempClass).prev().attr('class');
		prevClass = prevClass.replace(" currentLink", "");
		
		if(prevClass){
			$(".naviLinks a").hide();
			$('.' + prevClass).show();
			$('.' + prevClass + 'N').show();
			$('.' + prevClass + 'P').show();
		}
	});
});

