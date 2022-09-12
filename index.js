

const jsmediatags = window.jsmediatags;
var but=document.querySelector("button");
but.addEventListener("click",function (){
  changeIcon();
})
var audio=document.querySelector("audio");
audio.addEventListener("ended",changeIcon1)

var next=document.querySelector(".next");
next.addEventListener("click",nextfun)

var pre=document.querySelector(".pre");
pre.addEventListener("click",prefun)

function changeIcon(){
  var img1=document.querySelector("button").querySelector("i");
  var audio=document.querySelector("audio");
  if (img1.className.slice(19,23)==="play"){
    img1.className="fa-solid fa-circle-pause fa-6x";
    audio.play();

  }
  else {
    img1.className="fa-solid fa-circle-play fa-6x";
    audio.pause();
  }
}
function changeIcon1(){
  fun();

}
function nextfun(){
  // var img1=document.querySelector("button").querySelector("img");
  // img1.src="images/pause.png";
  var imp=document.querySelector("audio");
  var part1=document.querySelector("audio").src.slice(0,87);
  var str=document.querySelector("audio").src;
  // var char=str.charAt(str.length-5);
  var char = document.querySelector("audio").src.slice(87,str.length-4);
  var num=parseInt(char)+1;
  if (num===12){
    num=0;
  }

  var text=num.toString();
  // console.log(num)
  // console.log(text)
  console.log(part1);
  imp.src=part1+text+'.mp3';
  console.log(imp.src)
  audio.play();
}
// TO AUTO PLAY THE SONGS
function fun(){
  var imp=document.querySelector("audio");
  var part1=document.querySelector("audio").src.slice(0,87);
  var str=document.querySelector("audio").src;
  var char=document.querySelector("audio").src.slice(87,str.length-4);
  var num=parseInt(char)+1;
  if (num===12){
    num=0;
  }
  var text=num.toString();
  imp.src=part1+text+".mp3";

  audio.play()
}


function prefun(){
  // var img1=document.querySelector("button").querySelector("img");
  // img1.src="images/pause.png";
  var imp=document.querySelector("audio");
  var part1=document.querySelector("audio").src.slice(0,87);
  var str=document.querySelector("audio").src;
  var char = document.querySelector("audio").src.slice(87,str.length-4);
  var num=parseInt(char)-1;
  if (num<0){
    num=11;
  }
  var text=num.toString();
  imp.src=part1+text+".mp3";
  audio.play()
}
audio.addEventListener("timeupdate",updateProgress);

function updateProgress(event){

  const {currentTime,duration} = event.srcElement;
  const time_duration = (duration)/60;
  const current_Time = currentTime/60;
  const progressPresent = (currentTime/duration)*100;
  var set__duration = document.querySelector(".total_time");
  set__duration.innerHTML = time_duration.toString().slice(0,4);
  var set__newtime = document.querySelector(".cur__time");
  set__newtime.innerHTML = current_Time.toString().slice(0,4);
  var audio_timeline = document.querySelector(".empty");
  audio_timeline.style.width = `${progressPresent}%`;
}

var audio_timeline = document.querySelector(".emp_container");
audio_timeline.addEventListener("click",set_time)


function set_time(e){
  // var audio_timeline = document.querySelector(".empty");
  // var cur_width = audio_timeline.style.width ;
  // console.log(event.srcElement.currentTime);
  const width = (this.clientWidth);

  const clickX = e.offsetX;
  const audio_length = audio.duration;
  const set_curtime = (audio_length)*(clickX/width)
  audio.currentTime = set_curtime;
};
