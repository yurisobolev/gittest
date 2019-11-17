$("[class*=sub]").hide();
$(".mnattractions").click(function () {
	$("[class^=gid]").hide ();
	$("[class*=attractions]").show();
});

$(".mnwritter").click(function () {
	$("[class^=gid]").hide ();
	$("[class*=writter]").show();
});

$(".mnartist").click(function () {
	$("[class^=gid]").hide ();
	$("[class*=artist]").show();
});