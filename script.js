console.log("Welcome to Spotify");

//current time stamp
let time = document.getElementById("timestamp");

setInterval(()=>{
    let d = new Date();
    time.innerHTML = d.toLocaleTimeString();
},1000)


// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Tinku Jiya", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Party to banti hai", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Tum hi ho bandhu", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Galliyan Ek Villain", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Humdard Ek Villain", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Banjara Ek Villain", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Zaroorat Ek Villain", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Chikni Chameli", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Fevicol Se Dabangg 2", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "Munni Badnam Hui", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"},
    {songName: "Battameez Dil", filePath: "songs/11.mp3", coverPath: "covers/1.jpg"},
    {songName: "Balam Pichkaari", filePath: "songs/12.mp3", coverPath: "covers/2.jpg"},
    {songName: "Gandi Baat", filePath: "songs/13.mp3", coverPath: "covers/3.jpg"},
    {songName: "Nashe Se Chadhgai re", filePath: "songs/14.mp3", coverPath: "covers/4.jpg"},
    {songName: "Mauja Hi Mauja", filePath: "songs/15.mp3", coverPath: "covers/5.jpg"},
    {songName: "Nagada Nagada bajao", filePath: "songs/16.mp3", coverPath: "covers/6.jpg"},
    {songName: "Lungi Dance", filePath: "songs/17.mp3", coverPath: "covers/7.jpg"},
    {songName: "Ladki Ankh Maare", filePath: "songs/18.mp3", coverPath: "covers/8.jpg"},
    {songName: "Jumme Ki Raat Hai", filePath: "songs/19.mp3", coverPath: "covers/9.jpg"},
    {songName: "Kala Chashma", filePath: "songs/20.mp3", coverPath: "covers/10.jpg"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})