/* by: ZIMONH src: https://github.com/zimonh/Voice
License: https://creativecommons.org/licenses/by-nc-sa/4.0/ */

document.addEventListener('DOMContentLoaded',()=>{
	document.querySelector('#start').onclick = function(){listen.start();};
});

/* FORCE HTTPS */
const loc = window.location.href+'';
if(loc.indexOf('http://')===0) window.location.href = loc.replace('http://','https://');

/* ZIMONH TINY QUERYB SELECT*/
Object.prototype.qs = function(є){return this.querySelector(є);};
Object.prototype.qa = function(є){return this.querySelectorAll(є);};
const qs=є=>document.qs(є), qa=є=>document.qa(є), q=є=>qs(є.split(' ')[0]).qa(є.split(' ')[1]);
Object.prototype.st = function(є){for(let s of Object.entries(є)){for(let e of this){e.style[s[0]] = s[1];}}};

/* Capitalize */
String.prototype.capitalize = function() {
	return this.charAt(0).toUpperCase() + this.slice(1);
};

/* ANIMATION */
const animation = {
	style:'',
	delay:100,
	bn:q('.bars div').length,
	op:x=> qs('.bars').style.opacity = x,
	bc:x=> q('.bars div').st({backgroundColor:x}),
	ht:x=> qs('stylehere').innerHTML = x};

for(let i=1;i<=animation.bn;i++){animation.style += `.bars div:nth-child(${i}){animation-duration: 500ms; animation-delay: ${animation.delay}ms;}`; animation.delay += 150;}
animation.start = `<style>.bars{width:${(25*animation.bn)+6}px;} .bars div {animation: sound 0ms -800ms linear infinite alternate;}${animation.style}</style>`;
animation.end = `<style>.bars{width:${(25*animation.bn)+6}px;}</style>`;


/* VOICE */
let listen     = new webkitSpeechRecognition(), voice = '', chance = 0;
listen.onstart  =()=> {
	console.log(1234);
	qs('voice_out').classList.add('invici');

	voice = '';
	listen.onresult =ʃ=> {
		qs('voice_out').classList.remove('invici');
		voice  =ʃ.results[0][0].transcript;
		chance = Math.round(ʃ.results[0][0].confidence*10000)/100;
		console.log(voice,chance);
	};
	listen.onend    =()=> (voice === '') ? no_speech() : speech();
	listen.onaudiostart  =()=> {animation.op(1); animation.ht(animation.end); animation.ht(animation.start);};
	listen.onspeechstart =()=> animation.bc('red');
	listen.onspeechend   =()=> animation.bc('#4697d9');
	listen.onaudioend    =()=> {animation.op(0); setTimeout(()=>animation.ht(animation.end),400);};
};


/* GIFS */
const gify = {
	imy:'<img src="https://i.giphy.com/media/',
	datu: '',
	rannr: '',
	stuff: `/giphy.gif" >
	<br>
	<button id="gify_close" type="button">close</button>
	<button id="gify_next" type="button">next</button>
	<button id="gify_prev" type="button">prev</button>`,
	gif:voice_in=>{
		msg(voice_in+' GIF');
		fetch(`https://api.giphy.com/v1/gifs/search?q=${voice_in}&api_key=vGvxoNiQef93qMfHXXvkN2LQCp2cZe7B&limit=100`)
			.then(response => response.json())
			.then(data => {
				gify.datu = data;
				gify.rannr = (Math.floor(Math.random() * 100) + 1);
				qs('.gif').innerHTML = gify.imy+data.data[gify.rannr].id+gify.stuff;
				gify.buttons();
			});
	},
	next:()=>{
		gify.rannr++;
		if(gify.rannr>100)gify.rannr = 0;
		qs('.gif').innerHTML = gify.imy+gify.datu.data[gify.rannr].id+gify.stuff;gify.buttons();},
	prev:()=>{
		gify.rannr--;
		if(gify.rannr<0)gify.rannr = 100;
		qs('.gif').innerHTML = gify.imy+gify.datu.data[gify.rannr].id+gify.stuff;gify.buttons();},
	close:()=>qs('.gif').innerHTML = '',
	buttons(){
		document.querySelector('#gify_close').onclick = function(){gify.close();};
		document.querySelector('#gify_next' ).onclick = function(){gify.next();};
		document.querySelector('#gify_prev' ).onclick = function(){gify.prev();};
	}
};

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
	voice_out = qs('voice_out'),
	msg =		 є    => 	voice_out.innerHTML = `<span style="color:red">${є}</span>`,
	opn =		(є,єє)=> {	window.open(є);msg('Opened: '+єє);},
	no_speech=	()    => 	console.log('no-speech'),
	speech=		()    => {
		const voice_in = voice.toLowerCase();
		const word_in = voice_in.split(' ')[0];
		const words_in = voice_in.split(' ')[0]+voice_in.split(' ')[1];

		voice_out.innerHTML  = `<a  target="_blank" href="https://www.google.nl/search?q=${voice_in}">${voice_in}</a>`;
		if(voice_in === 'open cheat sheet') 	opn('http://cheatsheet.zimonh.at/'									,'Cheat Cheat');
		if(voice_in === 'tiny job') 			opn('https://tj.zimonh.at'											,'Tiny Job');
		if(voice_in === 'dumpert')				opn('http://www.dumpert.nl'											,'Dumpert');
		if(voice_in === 'gmail'				||
		   voice_in === 'email')				opn('https://www.gmail.com'											,'Gmail');
		if(voice_in === 'calendar')				opn('http://calendar.google.com/'									,'Calender');

		if(voice_in === 'translate')			opn('https://translate.google.com/'									,'Translate');
		if(voice_in === 'boobies')				opn('https://qt.zimonh.at/jinek?@'									,'Jinek');
		if(voice_in === 'cutie')				opn('https://qt.zimonh.at/'											,'QT');
		else if(word_in === 'cutie')			opn('https://qt.zimonh.at/'+voice_in.replace(/cutie /,'')			,'QT');
		if(voice_in === 'qt')					opn('https://qt.zimonh.at/'											,'QT');
		else if(word_in === 'qt')				opn('https://qt.zimonh.at/'+voice_in.replace(/qt /,'')				,'QT');
		if(voice_in === '4chan')				opn('https://www.4chan.org/'										,'4chan');
		if(voice_in === 'facebook')				opn('https://www.facebook.com/'										,'Facebook');
		if(voice_in === 'youtube')				opn('https://www.youtube.com/'										,'YouTube');
		if(voice_in === 'cheat sheet')			opn('http://cheatsheet.zimonh.at/'									,'Cheat Sheet');
		if(voice_in === 'npo' 				||
		   voice_in === 'mpo')					opn('http://npo.nl'													,'NPO');
		if(voice_in === 'trakt')				opn('http://trakt.tv'												,'Trakt');
		if(voice_in === 'open trakt' 		||
		   voice_in === 'torrent' 			||
		   voice_in === 'torrents' 			||
		   voice_in === 'open torrent')			opn('http://rarbgunblock.com'										,'RARBG');
		if(words_in === 'moviefacts')			opn('http://www.imdb.com/find?ref_=nv_sr_fn&q='+voice_in.replace(/movie facts /i,''),'IMDB');
		if(words_in === 'torrentsearch' )		opn('http://rarbgunblock.com/torrents.php?search='+torrentsearch(voice_in),'Torrent '+torrentsearch(voice_in));
		if(word_in 	=== 'play')					opn(`https://duckduckgo.com/?q=!ducky+${voice_in.replace(/play /i,'')}+site%3Ayoutube.com`,'Youtube');
		if(word_in 	=== 'find' 				||
		   word_in 	=== 'search' 			||
		   word_in 	=== 'why')					opn('https://www.google.nl/search?q='+voice_in.replace(/find /i,'').replace(/search /i,''),voice_in);

		if(voice_in.slice(-4) === 'gifs')		gify.gif(voice_in.replace(/ gifs/,''));
		if(voice_in.slice(-3) === 'gif')		gify.gif(voice_in.replace(/ gif/,''));
	};
listen.start();