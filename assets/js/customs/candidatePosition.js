//$("#hideshow").hide();
$count=0;

function ShowHide(){
	$(".advancedSearch").toggle();
	$(".jobs-summary").toggle();

	if($count==0)
	{
		$("#box").removeClass("glyphicon-chevron-up");
		$("#box").addClass("glyphicon-chevron-down");
		$count=1;
	} else {
		$("#box").removeClass("glyphicon-chevron-down");
		$("#box").addClass("glyphicon-chevron-up");
		$count=0;
	}

}
