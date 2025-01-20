console.log("Welcome To Spotify");

// 
let songIndex =0;
let audioElement= new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressbar =document.getElementById('myProgressBar');
let gif =document.getElementById('gif');


let songs =[
    {songName:"dil to bacha hai ji",filePath:"x",coverPath:"x"},
    {songName:"dil to bacha hai ji",filePath:"x",coverPath:"x"},
    {songName:"dil to bacha hai ji",filePath:"x",coverPath:"x"},
    {songName:"dil to bacha hai ji",filePath:"x",coverPath:"x"},
    {songName:"dil to bacha hai ji",filePath:"x",coverPath:"x"},
    {songName:"dil to bacha hai ji",filePath:"x",coverPath:"x"},
]


// audioElement.play();

//handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.add('fa-circle-play');
        masterPlay.classList.remove('fa-circle-pause')
        gif.style.opacity = 0;
    }
 })

// listen to events
audioElement.addEventListener('timeupdate',()=>{
    // update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    myProgressbar.value = progress;

})

myProgressbar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressbar.value * audioElement.duration/100;
})