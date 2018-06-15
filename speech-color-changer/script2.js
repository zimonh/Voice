

var last = event.results.length - 1;
var voice_in = event.results[last][0].transcript;

console.log('There is a ' + Math.round(event.results[0][0].confidence* 10000) / 100 + "% chance you said: '"+voice_in+"'");
nothing = "something";





voice_out.innerHTML  = "<a href='"+"https://www.google.nl/search?q=" + voice_in+"'>" + voice_in +"</a>";

if(voice_in === "open cheat sheet"){
window.open("http://cheatsheet.zimonh.at/");
voice_out.innerHTML  = '<span style="color:red">Opened Cheat Cheat</span>';}
if(voice_in === "tiny job"){
window.open("https://tj.zimonh.at");
voice_out.innerHTML  = '<span style="color:red">Opened Tiny Job</span>';}
if(voice_in === "dumpert"){
window.open("http://www.dumpert.nl");
voice_out.innerHTML  = '<span style="color:red">Opened Dumpert</span>';}
if(voice_in === "Gmail"){
window.open("https://www.gmail.com")}
if(voice_in === "email"){
window.open("https://www.gmail.com")}
if(voice_in === "calendar"){
window.open("http://calendar.google.com/")}
if(voice_in === "npo"){window.open("http://npo.nl")
voice_out.innerHTML  = '<span style="color:red">Opened NPO</span>';}
if(voice_in === "mpo"){
window.open("http://npo.nl");
voice_out.innerHTML  = '<span style="color:red">Opened NPO</span>';}
if(voice_in === "trakt"){
window.open("http://trakt.tv");
voice_out.innerHTML  = '<span style="color:red">Opened Trakt</span>';}
if(voice_in === "open trakt"){
window.open("http://trakt.tv");
voice_out.innerHTML  = '<span style="color:red">Opened Trakt</span>';}
if(voice_in === "torrent"){
window.open("http://rarbgunblock.com");
voice_out.innerHTML  = '<span style="color:red">Opened RARBG</span>';}
if(voice_in === "torrents"){
window.open("http://rarbgunblock.com");
voice_out.innerHTML  = '<span style="color:red">Opened RARBG</span>';}
if(voice_in === "open torrent"){
window.open("http://rarbgunblock.com");
voice_out.innerHTML  = '<span style="color:red">Opened RARBG</span>';}
if(voice_in.substring(0, 14) === "torrent search"){torrentsearch(voice_in);}
if(voice_in.substring(0, 11) === "movie facts"){window.open("http://www.imdb.com/find?ref_=nv_sr_fn&q=" + voice_in.replace(/movie facts/g,''));}
if(voice_in.substring(0, 4) === "play"){youtubee(voice_in);}
if(voice_in.substring(0, 4) === "find" || voice_in.substring(0, 6) === "search" || voice_in.substring(0, 3) === "why"){searchgoogle(voice_in);}
if(voice_in.substring(0, 11)  === "start timer"){settimmmmmmer(voice_in);}
if(voice_in.substring(0, 9)  === "set timer"){ settimmmmmmer(voice_in)}
if(voice_in.substring(0, 11)  === "clear timer"){
voice_out.innerHTML = '<span style="color:red">Timer Stopped</span>';
$("#clockdiv").hide(); if(typeof timeinterval !== 'undefined'){clearInterval(timeinterval);}else{}}
if(voice_in.substring(0, 10)  === "stop timer"){
voice_out.innerHTML = '<span style="color:red">Timer Stopped</span>';
$("#clockdiv").hide(); if(typeof timeinterval !== 'undefined'){clearInterval(timeinterval);}else{}}
bg.style.backgroundColor = voice_in;
if(voice_in.slice(-4).toLowerCase() === "gifs"){gif(voice_in.toLowerCase().replace(/ gifs/g,''));}
if(voice_in.slice(-3).toLowerCase() === "gif")gif(voice_in.toLowerCase().replace(/ gif/g,''));