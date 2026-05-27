/* this is paperscript (not normal js!!) */

tool.fixedDistance = Math.round(Math.random() * 25)
function onMouseMove(event) {
    //wherever the cursor goes, a circle is created
    var path = new Path.Circle({ 
        center: event.middlePoint,
        radius: Math.round(Math.random() * 25) + 5 //random # btwn 5 + 30
    })
    path.fillColor = {
        /* hue: 360 deg color wheel! 0 deg = red */
        hue: event.count * 3, //color changes by 3deg every frame
        /*hue: Math.round(Math.random() * 360), */
        saturation: 0.6,
        brightness: 1
    }
} 