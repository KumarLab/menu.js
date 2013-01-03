// JavaScript 
// 3:38:44 PM 1/3/2013
$(function(){
  $("a").click(function(){
		var ul = $(this).next(),
			clone = ul.clone().css({"height":"auto"}).appendTo("body"),
			height = ul.css("height") === "0px" ? ul[0].scrollHeight + "px" : "0px";
		clone.remove();
		ul.animate({"height":height});
	});
});
