 $(document).ready(function(){ 
		$("button").click(function(){
			$(".dataArea").css("visibility", "hidden");
			$poraryid = $(this).attr('id');
			$poraryid2 = "#" + $poraryid.slice(1);
		   $($poraryid2).css("visibility", "visible");
   		    });		 
         
 });

// $(".dataArea").css("visibility", "visible"); str.slice(1);