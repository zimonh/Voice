	/* FORCE HTTPS */
	const loc = window.location.href+'';
	if(loc.indexOf('http://')===0) window.location.href = loc.replace('http://','https://');

	/* ZIMONH TINY QUERY SELECT*/
	Object.prototype.qs = function(є){return this.querySelector(є);};
	Object.prototype.qa = function(є){return this.querySelectorAll(є);};
	const qs=є=>document.qs(є), qa=є=>document.qa(є), q=є=>qs(є.split(' ')[0]).qa(є.split(' ')[1]);
	Object.prototype.st = function(є){for(let s of Object.entries(є)){for(let e of this){e.style[s[0]] = s[1];}}};

	/* Capitalize */
	String.prototype.capitalize = function() {
		return this.charAt(0).toUpperCase() + this.slice(1);
	};

	/* ANIMATION */
	const ლ = {
		style:'',
		delay:100,
		bn:q('.bars div').length,
		op:є=> qs('.bars').style.opacity = є,
		bc:є=> q('.bars div').st({backgroundColor:є}),
		ht:є=> qs('stylehere').innerHTML = є};

	for(let i=1;i<=ლ.bn;i++){ლ.style += `.bars div:nth-child(${i}){animation-duration: 500ms; animation-delay: ${ლ.delay}ms;}`; ლ.delay += 150;}
	ლ.start = `<style>.bars{width:${(25*ლ.bn)+6}px;} .bars div {animation: sound 0ms -800ms linear infinite alternate;}${ლ.style}</style>`;
	ლ.end = `<style>.bars{width:${(25*ლ.bn)+6}px;}</style>`;



	/* VOICE */
	let з     = new webkitSpeechRecognition(), voice = ""; chance = 0;
	з.onstart  =є=> {

	qs("voice_out").classList.add('invici');

		voice = "";
		з.onresult =є=> {
			qs("voice_out").classList.remove('invici');
			voice  =є.results[0][0].transcript;
			chance = Math.round(є.results[0][0].confidence*10000)/100;
			console.log(voice,chance);
		};
		з.onend    =є=> (voice === "") ? no_speech() : speech();
		з.onaudiostart  =є=> {ლ.op(1); ლ.ht(ლ.end); ლ.ht(ლ.start);};
		з.onspeechstart =є=> ლ.bc("red");
		з.onspeechend   =є=> ლ.bc("#4697d9");
		з.onaudioend    =є=> {ლ.op(0); setTimeout( є=>ლ.ht(ლ.end),400);};
	};


	/* TIMER */
	const Timer = {
		Initialize:(id, endtime)=>{
			const updateClock =()=>{
				var t = Timer.Remaining(endtime);
				qs('.days').innerHTML = t.days;
				qs('.hours').innerHTML = ('0' + t.hours).slice(-2);
				qs('.minutes').innerHTML = ('0' + t.minutes).slice(-2);
				qs('.seconds').innerHTML = ('0' + t.seconds).slice(-2);
				if (t.total <= 0 ) {
					console.log(123);
					qs(".stop_alarm").classList.remove('close');
					clearInterval(running);
					myAudio = new Audio('https://www.zimonh.at/voice/speech-color-changer/editco.wav');

					const reset = setInterval(function(){myAudio.play();}, 350),
						  stop_alarm = qs(".stop_alarm");

					stop_alarm.onclick = function(){
						clearInterval(reset);
						qs(".stop_alarm").classList.add('close');
						qs(".clockdiv").classList.add('close')};
				}
			};
			updateClock();
			running = setInterval(updateClock, 1000);},

		Set:voice_in=>{
			if(typeof running !== 'undefined')clearInterval(running);
			voice_in = voice_in.replace(/start timer /i,'').replace(/set timer /i,'');
			msg("Timer Set: "+voice_in.capitalize());
			const de = new Date(Date.parse(new Date()) + 60 * 1000 * voice_in.replace(/minutes/i,''));
			if(!isNaN(de) && voice_in.replace(/minutes/i,'') > ""){
				Timer.Initialize('.clockdiv', de);
				qs('.clockdiv').classList.remove('close');
			}else{
				let a, n, g;
				const Small = {'zero': 0,'one': 1,'two': 2,'three': 3,'four': 4,'five': 5,'six': 6,'seven': 7,'eight': 8,'nine': 9,'ten': 10,'eleven': 11,'twelve': 12,'thirteen': 13,'fourteen': 14,'fifteen': 15,'sixteen': 16,'seventeen': 17,'eighteen': 18,'nineteen': 19,'twenty': 20,'thirty': 30,'forty': 40,'fifty': 50,'sixty': 60,'seventy': 70,'eighty': 80,'ninety': 90},
				text2num = s=>{
					a = s.toString().split(/[\s-]+/);
					n = 0;
					g = 0;
					a.forEach(feach);
					return n + g;},
				feach =w=>{
					var x = Small[w];
					if(x != null)g = g + x;
					else if(w == "hundred")g = g * 100;},
				deadliner = new Date(Date.parse(new Date()) + 60 * 1000 * text2num(voice_in.replace(/minutes/i,''))),
				l_or_n = text2num(voice_in.replace(/minutes/i,''));
				if(l_or_n > 0 && voice_in.replace(/minutes/i,'') > ""){
					Timer.Initialize('clockdiv', deadliner );
					qs('.clockdiv').classList.add('close');}}},

		Clear:e=>{msg("Timer Cleared");
			qs(".clockdiv").classList.add('close');;
			if(typeof running !== 'undefined')clearInterval(running);},

		Remaining:endtime=>{
			const mf=m=>Math.floor(m),
			total 	= Date.parse(endtime) - Date.parse(new Date()),
			seconds = mf((total / 1000) % 60),
			minutes = mf((total / 1000 / 60) % 60),
			hours 	= mf((total / (1000 * 60 * 60)) % 24),
			days 	= mf(total / (1000 * 60 * 60 * 24));
			return {total,days,hours,minutes,seconds};}
	};

	/* YOUTUBE */
	const youtube ={
		play:voice_in=>{
			msg(voice_in);
			qs('.youtube').classList.remove('close');
			qs('.youtube').classList.add('open');
			if(voice_in === 'qq') voice_in = qs('#youtube_input').value;
			qs('#youtube_iframe').src = 'https://www.youtube.com/embed?listType=search&list=' + voice_in + '?autoplay=1'; qs('#youtube_input').value = voice_in;},
		close:()=>{
			qs('.youtube').classList.remove('open');
			qs('.youtube').classList.add('close');
			qs('#youtube_iframe').src = '';}};

	/* GIFS */
	const gify = {
		imy:'<img src="https://i.giphy.com/media/',
		datu: "",
		rannr: "",
		stuff: `/giphy.gif" >
		<br>
		<button type="button" onclick="gify.close()">close</button>
		<button type="button" onclick="gify.next();">next</button>
		<button type="button" onclick="gify.prev();">prev</button>`,
		gif:voice_in=>{msg(voice_in+' GIF');
			fetch("https://api.giphy.com/v1/gifs/search?q="+voice_in+"&api_key=vGvxoNiQef93qMfHXXvkN2LQCp2cZe7B&limit=100")
			.then(response => response.json())
			.then(data => {
				datu = data;
				rannr = (Math.floor(Math.random() * 100) + 1);
				qs('.gif').innerHTML = gify.imy+data.data[rannr].id+gify.stuff;
			});},
		next:()=>{
			rannr++;
			if(rannr>100)rannr = 0;
			qs('.gif').innerHTML = gify.imy+this.datu.data[rannr].id+gify.stuff;},
		prev:()=>{
			rannr--;
			if(rannr<0)rannr = 100;
			qs('.gif').innerHTML = gify.imy+this.datu.data[rannr].id+gify.stuff;},
		close:()=>qs('.gif').innerHTML = ''};

	/* TORRENT */
	const torrentsearch = voice_in=>{
		voice_in = voice_in
		.replace(/torrent search /i,'')
		.replace(/Season /i,'S0')
		.replace(/Episode /i,'E0');
		if(voice_in.split('E0').pop().length>9){voice_in = voice_in.replace(/E0/i,'E');}
		if(voice_in.split('S0').pop().length>9){voice_in = voice_in.replace(/S0/i,'S');}
		return voice_in;};


	/* SPEACH TRIGGERED */
	const
	voice_out = qs("voice_out"),
	msg =є=> voice_out.innerHTML = `<span style="color:red">${є}</span>`,
	opn =(є,єє)=>{window.open(є);msg('Opened: '+єє);},
	no_speech=є=> console.log('no-speech'),
	speech=є=> {
		const voice_in = voice;
		const word_in = voice_in.split(' ')[0];
		const words_in = voice_in.split(' ')[0]+voice_in.split(' ')[1];

		voice_out.innerHTML  = "<a href='"+"https://www.google.nl/search?q="+ voice_in+"'>" + voice_in +"</a>";

		if(voice_in === "open cheat sheet") 							opn("http://cheatsheet.zimonh.at/"	,"Cheat Cheat");
		if(voice_in === "tiny job") 									opn("https://tj.zimonh.at"			,"Tiny Job");
		if(voice_in === "dumpert")										opn("http://www.dumpert.nl"			,"Dumpert");
		if(voice_in === "Gmail"				||
		   voice_in === "email")										opn("https://www.gmail.com"			,"Gmail");
		if(voice_in === "calendar")										opn("http://calendar.google.com/"	,"Calender");
		if(voice_in === "npo" 				||
		   voice_in === "mpo")											opn("http://npo.nl"					,"NPO");
		if(voice_in === "trakt")										opn("http://trakt.tv"				,"Trakt");
		if(voice_in === "open trakt" 		||
		   voice_in === "torrent" 			||
		   voice_in === "torrents" 			||
		   voice_in === "open torrent")									opn("http://rarbgunblock.com"		,"RARBG");
		if(words_in === "moviefacts")									opn("http://www.imdb.com/find?ref_=nv_sr_fn&q="+voice_in.replace(/movie facts /i,''),"IMDB");
		if(words_in === "torrentsearch" )								opn("http://rarbgunblock.com/torrents.php?search="+torrentsearch(voice_in),"Torrent " +torrentsearch(voice_in));
		if(word_in 	=== "play")											youtube.play(voice_in.replace(/play /i,''));
		if(word_in 	=== "find" 				||
		   word_in 	=== "search" 			||
		   word_in 	=== "why")											opn("https://www.google.nl/search?q=" + voice_in.replace(/find /i,'').replace(/search /i,''), voice_in);
		if(words_in === "starttimer"		||
		   words_in === "settimer")										Timer.Set(voice_in);
		if(words_in	=== "cleartimer"		||
		   words_in === "stoptimer")									Timer.Clear();
		if(voice_in.slice(-4).toLowerCase() === "gifs")					gify.gif(voice_in.toLowerCase().replace(/ gifs/i,''));
		if(voice_in.slice(-3).toLowerCase() === "gif")					gify.gif(voice_in.toLowerCase().replace(/ gif/i,''));
	};
	з.start();