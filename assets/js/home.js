var icon = document.getElementById('icon')
var nav = document.getElementById('nav')
icon.addEventListener('click', function () {
    nav.style.display = 'block';

})

var close = document.getElementById('close')
var nav = document.getElementById('nav')
close.addEventListener('click', function () {
    nav.style.display = 'none'
})

var icon = document.getElementById('icon')
var navi = document.getElementsByClassName('navi')
icon.addEventListener('click', function () {
    for (var i = 0; i < 5; i++) {
        navi[i].style.color = 'rgb(225, 159, 97)'
    }
})