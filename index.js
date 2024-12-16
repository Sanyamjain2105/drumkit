var a=document.querySelectorAll(".drum");

function play(name){

    var abut=document.querySelector("."+name);

    switch (name) {
        case 'w':
            var audio = new Audio('./sounds/crash.mp3');
            audio.play();
            // alert("pop");
            abut.classList.add("pressed");
            setTimeout(function()
            {   
                abut.classList.remove("pressed");
            },100);
            break;
        case 'a':
            var audio = new Audio('./sounds/snare.mp3');
            abut.classList.add("pressed");
            setTimeout(function()
            {   
                abut.classList.remove("pressed");
            },100);
            audio.play();
        break;
        case 's':
            var audio = new Audio('./sounds/tom-1.mp3');
            abut.classList.add("pressed");
            setTimeout(function()
            {   
                abut.classList.remove("pressed");
            },100);
            audio.play();
        break;
        case 'd':
            var audio = new Audio('./sounds/tom-2.mp3');
            abut.classList.add("pressed");
            setTimeout(function()
            {   
                abut.classList.remove("pressed");
            },100);
            audio.play();
        break;
        case 'j':
            var audio = new Audio('./sounds/tom-3.mp3');
            abut.classList.add("pressed");
            setTimeout(function()
            {   
                abut.classList.remove("pressed");
            },100);
            audio.play();
        break;
        case 'k':
            var audio = new Audio('./sounds/tom-4.mp3');
            abut.classList.add("pressed");
            setTimeout(function()
            {   
                abut.classList.remove("pressed");
            },100);
            audio.play();
        break;
        case 'l':
            var audio = new Audio('./sounds/kick-bass.mp3');
            abut.classList.add("pressed");
            setTimeout(function()
            {   
                abut.classList.remove("pressed");
            },100);
            audio.play();
        break;
        default:
            break;
    }
}

for(var i=0;i<a.length;i++){
    a[i].addEventListener("click",function(){
        var name=this.innerHTML;
        play(name);
    })

    document.addEventListener("keydown",function(e){
        play(e.key);
    })
}