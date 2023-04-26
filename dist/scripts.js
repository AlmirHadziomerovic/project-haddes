


/*To Top Button Ausblenden ab ca. 300px */
function toTopButton (){
    const toTopButton = document.getElementById('totop')
    if ( window.scrollY > 250 ) {
        toTopButton.classList.add('show')
    } else {
        toTopButton.classList.remove ('show')
    }
}


/*Funktion "Scroll to Top" mit Event Listner "click"*/ 
document.getElementById('totop').addEventListener('click',function(){
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
})

document.addEventListener('DOMContentLoaded', function() {

    toTopButton()

    console.log(window.scrollY)

}, false ) 