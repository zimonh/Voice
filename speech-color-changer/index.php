<?php
	//developer mode
	$d = '';
	$d = '?'.date("Y.m.d.h.m.s");
?>
<!DOCTYPE html>
<html>
	<head>
	<script>
		const loc = window.location.href+'';
		if(loc == 'http://www.zimonh.at/voice/') window.location.href = 'https://www.zimonh.at/voice/';
	</script>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<meta name="viewport" content="width=device-width">
	<script crossorigin="anonymous" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

	<link href="speech-color-changer/style.css<?php echo $d; ?>" rel="stylesheet">


	<script src="speech-color-changer/script.js<?php echo $d; ?>"></script>
	<script src="speech-color-changer/speech.js<?php echo $d; ?>"></script>

	<title>Voice</title>
</head>

<body class="mahbody" align="center" style="margin:0px;">



<!-- <h2 style=" font-weight: 100;" class="hints"><span id="usechrome" style="display:none;">Use Chrome! </br></br><img style='height:140px; width:auto;'  src='http://www.albinoblacksheep.com/download/64/chrome.svg'/> </h2></span>
 -->

<span id="usechrome2">

	<div id="ioienwf3">
		<div id="f4f434f34">

			<!--THE VOICE_OUT GOES HERE-->
			<div><h1 class="output"></h1></div>

<?php
	//developer mode
	include 'youtube.html';
	include 'timer.html';
?>





		</div>
		<div id="gif"></div>
	</div>

	<div id="footer">
		Press Q or doubble click, to re-open mic. add <span style="color:#5987d3; cursor:pointer " onclick="$('.commands').toggleClass('showmecommands');">custom commands</span> or use: play + artist, find/search term, 'funny' GIF <br>set timer + number of minutes, clear timer, movie facts + Film(star), Dumpert, Calender, Gmail, TV, a background-color.</div>

</span>

<script>

	//Make sure the browser is Chrome
	var isChromium = window.chrome,
	winNav = window.navigator,
	vendorName = winNav.vendor,
	isOpera = winNav.userAgent.indexOf("OPR") > -1,
	isIEedge = winNav.userAgent.indexOf("Edge") > -1,
	isIOSChrome = winNav.userAgent.match("CriOS");
	if(isIOSChrome){
		// is Google Chrome on IOS
	}else if(isChromium !== null && isChromium !== undefined && vendorName === "Google Inc." && isOpera == false && isIEedge == false){
		$('#usechrome').hide();
	}else{

		$('#usechrome').show();
	}





</script>



<div id="the_last_script"></div>
<div id="the_last_style"></div>

<div class="commands">
<input id="commanda0" placeholder="command" type="text" class="in_l">
<input id="commandb0" placeholder="url" type="text" class="in_r"></br>
<input id="commanda1" placeholder="command" type="text" class="in_l">
<input id="commandb1" placeholder="url" type="text" class="in_r"></br>
<input id="commanda2" placeholder="command" type="text" class="in_l">
<input id="commandb2" placeholder="url" type="text" class="in_r"></br>
<input id="commanda3" placeholder="command" type="text" class="in_l">
<input id="commandb3" placeholder="url" type="text" class="in_r"></br>
<input id="commanda4" placeholder="command" type="text" class="in_l">
<input id="commandb4" placeholder="url" type="text" class="in_r"></br>
<input id="commanda5" placeholder="command" type="text" class="in_l">
<input id="commandb5" placeholder="url" type="text" class="in_r"></br>
<input id="commanda6" placeholder="command" type="text" class="in_l">
<input id="commandb6" placeholder="url" type="text" class="in_r"></br>

<button type="button" class="btn_o" onclick="refresh(); $('.commands').toggleClass('showmecommands');"> Apply </button>
<button type="button" class="btn_p" onclick="$('.commands').removeClass('showmecommands');"> Back </button>
</div>
<script>


	//update the function after getting the local values
	refresh();
	function refresh(){

let users_script = '';

for (var i = 0; i < 7; i++) {
$('#commanda'+i).val(localStorage.getItem("commanda"+i));
$('#commandb'+i).val(localStorage.getItem("commandb"+i));
const a = $('#commanda'+i).val();
const b = $('#commandb'+i).val();

localStorage.setItem("commanda"+i,a);
localStorage.setItem("commandb"+i,b);

users_script += `
	if(voice_in === "${a}"){
		window.open("${b}");
	}`;
}

		$.getScript("speech-color-changer/script2.js<?php echo $d; ?>", function(data) {
		//data has the contents of all the basic search functions

			$('#the_last_script').html(

			`<script>
				recognition.onresult = function(event) {
					`+data+users_script+`
				}
			<\/script>`);
		});

	}
</script>

</body>
</html>