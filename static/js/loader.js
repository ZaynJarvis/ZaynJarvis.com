var loaderWrapper = document.getElementById("particles-js");

function wait(num){
    var startTime = new Date().getTime();
    var endTime = new Date().getTime();
    while (endTime - startTime <num){
        endTime = new Date().getTime();
    }
}

window.addEventListener('load', function(){
    wait(500);
    loaderWrapper.style.transition = '1s';
    loaderWrapper.style.visibility = 'hidden';
})
