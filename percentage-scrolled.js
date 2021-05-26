var percentage = document.getElementById("percent")

window.addEventListener('scroll', function(){
    var p = parseInt(((this.pageYOffset)/(document.documentElement.offsetHeight - this.innerHeight - 1)) * 100);
    percentage.innerText = p;
});