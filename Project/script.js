let chatBox = document.getElementById('chatBox')
function showMenu() {
    chatBox.style.display = 'block'
}
function toggleMenu() {
    // chatBox.classList.add('show')
    // chatBox.classList.remove('show')
    chatBox.classList.toggle('show')
}
function makeLike(item) {
    let selector = "likes" + item
    let sel = document.getElementById(selector)
    let x = sel.innerText
    x++
    sel.innerText = x
}


let m = 10
let s = 0
setInterval(function () {

    if(m == 0 && s == 1){  //
        document.getElementById('sec').innerText = 0
        document.getElementById('counter').style.backgroundColor = 'orange'
    }else{
        s-- 
        if (s < 1) {
            s = 59
            if(m > 0){
            m--
            document.getElementById('min').innerText = m
            }

        }
        document.getElementById('sec').innerText = s
    }
}, 1000)