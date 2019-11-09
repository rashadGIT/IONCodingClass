function randomIntFromInterval(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function on(){
    fetch('http://localhost:3000/on');
}

function changeColor(num, brightness, color, sat){
    fetch('http://localhost:3000/on?num='+num+'&bright='+brightness+'&color='+color+'&sat='+sat);
}

function off(){
    fetch('http://localhost:3000/off');
}
