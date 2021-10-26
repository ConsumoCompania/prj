var p = 0
var t = document.getElementById('b')
var e = document.getElementById('m')
var i = 0

function menu(){
    if(p == 0){
        t.style.transform = 'translateX(100%)'
        p++
        e.style.paddingLeft = "50px"
        document.querySelector('main').style.width = "100%"
    }else{
        t.style.transform = 'translateX(0%)'
        p = 0
        e.style.paddingLeft = "0px"
        document.querySelector('main').style.width = "75%"
        document.querySelector('main').style.textAlign = "left"
    }
}

function io(){
    var videos = ["<iframe width='75%' height='538' src='https://www.youtube.com/embed/fj0BniP9ijk' title='YouTube video player' frameborder='0' allow=''accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>"]
    if(i==0){
        for(var b = 0; b<videos.length; b++){
            var n = 0
            var art =  document.getElementById('v' + b.toString())
            art.innerHTML =  videos[n]
            n++
            
            
        }
        i++ 
    }else{
        i--
        for(var b = 0; b<videos.length; b++){
            var n = 0
            var art =  document.getElementById('v' + b.toString())
            art.innerHTML =  ''
            n++
        }

    }
}
