//EX 5
var codi = '';
document.onkeydown = function(i) {
    codi += i.key;
    if(codi==="Enter"){
        window.open(url="https://www.youtube.com/watch?v=RCA3EfKUJMw")
    }
}