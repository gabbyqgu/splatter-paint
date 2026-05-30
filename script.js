/* this is paperscript (not normal js!!) */

function onMouseDrag(event) {
    //wherever the cursor goes, a circle is created
    var path = new Path.Circle({ 
        center: event.middlePoint,
        radius: Math.round(Math.random() * 35) + 5 //random # btwn 5 + 40
    })
    path.fillColor = {
        /* hue: 360 deg color wheel! 0 deg = red */
        hue: event.count * 5, //color changes by 3deg every frame
        /* hue: Math.round(Math.random() * 360), */ //SUPER DUPER flashy...
        saturation: 0.6,
        brightness: 1
    }
} 