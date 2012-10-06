var onMapClick = function(e) {
  var csa_number = $(document).href.match(/#\d*/);
  console.log("CSA Number: "+csa_number);
};

function getCSAName(csaNum) {
	// TODO: HOOK TO DATABASE
	return "Neighborhood Name";
}

$(document).ready(function() {
    	$('#csa-image-map area').each(function(idx, area){
      		$(area).bind('click', function(e) {
			  var csa_number = document.location.href.match(/#\d*/);
			  e.currentTarget.style.backgroundColor = "#FFFF00";
			  e.currentTarget.style.color = "#FFFF00";
			  $("#neighborhood").html("<h3>"+getCSAName(csa_number)+"</h3>");
			});
		});
		//$('#csa-image-map').click(function() { console.log("Clicked map");});
});

