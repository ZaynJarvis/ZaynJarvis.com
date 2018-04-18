var feature = document.getElementsByClassName('feature');
var featureItem = document.getElementsByClassName('feature-item');

for (var i = 1;i < featureItem.length;i++){
    featureItem[i].classList.add('None');
}

feature[0].getElementsByTagName('h4')[0].classList.add('activate');

var lastItem = 0;

for (var i = 0;i < feature.length;i++){
    feature[i].onclick = function(){
        for (var i = 0;i< feature.length;i++){
        }
        for (var i = 0;i< feature.length;i++){
            if (feature[i].id == this.id){
                feature[lastItem].getElementsByTagName('h4')[0].classList.remove('activate');
                featureItem[lastItem].classList.toggle('None');
                feature[i].getElementsByTagName('h4')[0].classList.add('activate');
                featureItem[i].classList.toggle('None');
                featureItem[i].classList.add('fadeInAni');
                console.log(featureItem[i]);
                lastItem = i;
                }
            }
        }
}
