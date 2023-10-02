var h1Elem = document.getElementById('demo').style;


function changeStyle(){
    h1Elem.color = 'green';
    h1Elem.textTransform = 'uppercase';
}

function hideElement(){
    h1Elem.visibility = 'hidden';
}
function showElement(){
    h1Elem.visibility = 'visible';
}
function controlp(){
    document.getElementById('paragraph').classList.toggle('active');
}