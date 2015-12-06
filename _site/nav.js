$(document).ready(function() {
	$("#navLinks a").hide();
	if(curPage){
			$('.' + curPage).addClass('currentLink').show();
	} else{
		$("#navLinks a").first().show();
	}
	
	$("#endJump").click(function(){
		$("#navLinks a").hide();
		var tempClass = $("#navLinks a").last().attr('class');
		$('.' + tempClass).show();
	});
	
	$("#startJump").click(function(){
		$("#navLinks a").hide();
		var tempClass = $("#navLinks a").first().attr('class');
		$('.' + tempClass).show();
	});
	
	$("#next").click(function(){
		var tempClass = $("#navLinks a:visible").attr('class');
		tempClass = tempClass.replace(" currentLink", "");
		
		var nextClass = $('.' + tempClass).next().attr('class');
		nextClass = nextClass.replace(" currentLink", "");
		
		if(nextClass){
			$("#navLinks a").hide();
			$('.' + nextClass).show();
		}
	});
	
	$("#prev").click(function(){
		
		var tempClass = $("#navLinks a:visible").attr('class');
		tempClass = tempClass.replace(" currentLink", "");
		
		var prevClass = $('.' + tempClass).prev().attr('class');
		prevClass = prevClass.replace(" currentLink", "");
		
		if(prevClass){
			$("#navLinks a").hide();
			$('.' + prevClass).show();
		}
	});
});

