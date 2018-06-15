
	var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
	var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
	var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

	var colors = ['dumpert' , 'tiny' , 'job' , 'trakt', 'drems'];

	var grammar = '#JSGF V1.0; grammar colors; public <color> = ' + colors.join(' | ') + ' ;'


	var recognition = new SpeechRecognition();

	var speechRecognitionList = new SpeechGrammarList();
	speechRecognitionList.addFromString(grammar, 1);
	recognition.grammars = speechRecognitionList;
	recognition.interimResults = false;
	recognition.maxAlternatives = 1;
	recognition.lang = 'en-US';
	//recognition.continuous = false;
	//recognition.lang = 'zh-CN';
	//recognition.lang = 'nl-NL';
	var voice_out = document.querySelector('.output');
	var bg = document.querySelector('html');
	var hints = document.querySelector('.hints');

	//on page load start listening
	recognition.start();











	$('body').dblclick(function() {recognition.start();return false;});
	document.onkeyup=function(e){var e = e || window.event; if(e.which == 81) {recognition.start();return false;}}


	recognition.onstart = function () {recognizing = true;
		$('.output').html(redmic);
		$('#the_last_style').html("<style>.miccy{fill:#d52828;}</style>");
		$('body').addClass('coloor');
		console.log('Ready to receive a command.');
		nothing = "nothing";
	};

	recognition.onend = function () {recognizing = false;
		$('#the_last_style').html("<style>.miccy{fill:gray;}</style>");
		$('body').removeClass('coloor');
		console.log('Receive '+nothing);
	};

	recognition.onspeechend = function(){recognition.stop();}

