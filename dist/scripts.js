/* Funktion zur Prüfung ob JS(diese JS-File) geladen wurde
--> Ändern der Klasse "no-js" in "js" im <html >-Tag
*/

function jsLoaded(){
    const htmlTag = document.querySelector('html')
    htmlTag.classList.remove('no-js')
    htmlTag.classList.add ('js')

}


/*To Top Button Ausblenden ab ca. 300px */
function toTopButton (){
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




document.addEventListener('DOMContentLoaded', function() {

    jsLoaded()
    toTopButton()

    console.log(window.scrollY)

}, false ) 




document.addEventListener('scroll', function(){
    toTopButton()
})