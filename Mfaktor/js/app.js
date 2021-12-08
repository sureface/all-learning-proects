let progress = document.getElementById("progressbar");
let totalHeight =document.body.scrollHeight - window.innerHeight;
window.onscroll = function () {
    let progressheight = (window.pageYOffset / totalHeight) * 100;
    progress.style.height = progressheight + "%";
}

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$ MARKER $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

var marker = document.querySelector('#marker')
var item = document.querySelectorAll('.page2 .ana')

function indicator(e) {
    marker.style.left = e.offsetLeft+"px";
    marker.style.width = e.offsetWidth+"px";
}

item.forEach(link =>{
    link.addEventListener('click', (e)=>{
        indicator(e.target);
    })
}) ;

