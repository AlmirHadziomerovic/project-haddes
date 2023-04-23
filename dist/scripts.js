/*Funktion zur Prüfung der unterstützung "JS" */

function jsLoaded(){
    const htmlTag = document.querySelectorAll('html')
    htmlTag.classList.remove('no-js')
    htmlTag.classList.add('js')
}

/*To Top Button Ausblenden ab ca. 300px */
function showToTop (){
    const toTopButton = document.getElementById('totop')
    if ( window.scrollY > 300 ) {
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
console.log('getElementById')