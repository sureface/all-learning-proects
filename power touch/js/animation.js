
// for allowing animations after load since they’re initially prevented from firing
document.addEventListener("DOMContentLoaded",function(){
let s = this.getElementsByName("switch");
if (s.length)
s[0].addEventListener("change",function(){
this.removeAttribute("class");
});
});



