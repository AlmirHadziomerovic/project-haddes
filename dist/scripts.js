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
    if ( window.scrollY > 700 ) {
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

function addClassAnimated (){
    let elements = document.querySelectorAll ('h1,h2,p,.post,.project,.column,')
    for (let i = 0; i < elements.length; i++) {
     elements[i].classList.add('animate')
    }
 }function elementsInViewport() {

    //Finde alle Elemente mit der folgenden Klasse ("animated")
    let elements = document.querySelectorAll('.animated') //bei KLassen immer eine Schleife hinzufügen
    //Festlegen einer Klasse, die bei "inViewport" den Elementen hinzugefügt wird
    let animated = 'animated'

    // ** - Viewport (Browserfenster)

    // Abfrage der Fenster Top-Position
    let windowTopPosition = window.scrollY

    //Abfrage der Fenster-Höhe
    let windowHeight = window.innerHeight || document.documentElement.clientHeight

    //Berechnen der Fenster Bottom-Position
    let windowsBottomPosition = windowTopPosition + windowHeight

   //console.log('TopPos:' + windowTopPosition + '; Height: ' + windowHeight + ';BottomPos:' + windowHeight)

    for  (let i = 0; i < elements.length; i++) {

        //Abfrage Element Top-Position (in Relation zum document)
        let elementTopPosition = elements[i].getBoundingClientRect().top + windowTopPosition
        //Abfrage Element Bottom-Position
        let elementBottomPosition = elements[i].getBoundingClientRect().bottom + windowTopPosition

            if( ( windowsBottomPosition > elementTopPosition) && (windowTopPosition < elementBottomPosition)){
            elements [i].classList.add(animated)
            } else {
                elements[i].classList.remove(animated)
            }
        
      //console.log( elements[i].getBoundingClientRect())
    }
} 




document.addEventListener('DOMContentLoaded', function() {

    jsLoaded()
    toTopButton()
    addClassAnimated()
    elementsInViewport()

    console.log(window.scrollY)

}, false ) 




document.addEventListener('scroll', function(){
    toTopButton()
})


window.addEventListener ('resize', function(){
    elementsInViewport()
})



