$(document).ready(function(){
	// hamburger
	$('#menu-button').on('click', function() {
	  $(document.body).toggleClass('menu-open');
	});
	// hamburger end

	// footer form

	$("#mail-form").submit(function(e) {
	var postData = $(this).serialize();
	var url = "send.php";
	$.ajax({
	  url:  url,
	  type: "POST",
	  data: postData,
	  complete: function(data){
	  	alert('Your email send!');
	    $(this).find('input').val('');
	    $('#mail-form').trigger('reset');
	  }
	});

	  e.preventDefault();
	});

	// end footer form

});