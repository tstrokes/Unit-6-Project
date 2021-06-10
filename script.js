$(".Story-Ending-Yes, .Story-Ending-No, .Part-Two-No, .Part-Two-Yes").hide();


$(".sauce-button").click(function() {
	$(".Part-Two-Yes").fadeIn();
    $(".firstImage").hide();
    $(".button").hide();

});

$(".No-sauce-button").click(function() {
$(".Part-Two-no-sauce").fadeIn();
    $(".firstImage").hide();
    $(".button").hide();

});