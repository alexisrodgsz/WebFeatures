const panels = document.querySelectorAll('.panel')

//console.log(panels[0])



panels.forEach( (panels) => {

    /*

    var conta = 100;
    var s = "";
    */
    panels.addEventListener('click', () => {

        removeActiveClasses()

        /*
        var s = "";
        for(var i = 1; i < 11; i += 1) {
            s += i + " ";
        }
        console.log(s);  */


        /*
        conta++
        s += conta + " ";
        console.log(s);  */

        panels.classList.add('active')

    })
    //console.log(panels)
})


function removeActiveClasses(){

    panels.forEach( panel => {

        panel.classList.remove('active')
    })
}