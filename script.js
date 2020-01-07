var points = 0;
function start(){
    var colors = ['#799ed2','#07ff8b','#79d27a','#ae79d2','#d28679','#07eaff','#f7ff07','#ff3007','#5107ff','#ff0756','#6cb019','#601cad','#ad1c3e','#3b5eb8','#ad2d1c','#a1b83b']
    setInterval(() => {
        var balloon = document.createElement('div');
        balloon.setAttribute('class', 'balloon');
        
        var num = Math.floor(Math.random() * colors.length);
        var x = Math.floor(Math.random() * ((window.innerWidth * 90) / 100));
        var y = Math.floor(Math.random() * ((window.innerHeight * 70) /100));
        
        balloon.setAttribute('style', 'left:' +x+ 'px; top:' +y+'px;' );
        balloon.setAttribute('style', 'left:' +x+ 'px; top:' +y+'px;' );
        
        balloon.setAttribute('onmouseover', 'remove(this)')
        balloon.style.background = colors[num];
        document.body.appendChild(balloon);
        
    }, 50);
    
}

function remove(balloon){
    points++;
    document.getElementById('points').innerHTML = `POINTS: ${points}`;
    document.body.removeChild(balloon);
}