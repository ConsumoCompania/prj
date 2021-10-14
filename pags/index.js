var p = 0
var t = document.getElementById('b')
var e = document.getElementById('m')
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
