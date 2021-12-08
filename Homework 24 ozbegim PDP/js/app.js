// $$$$$$$$$$$$$$$$$$$$$$$$$$$$ MARKER $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

var marker = document.querySelector('#marker')
var item = document.querySelectorAll('.nav .ana')

function indicator(e) {
    marker.style.left = e.offsetLeft+"px";
    marker.style.width = e.offsetWidth+"px";
}

item.forEach(link =>{
    link.addEventListener('click', (e)=>{
        indicator(e.target);
    })
}) ;