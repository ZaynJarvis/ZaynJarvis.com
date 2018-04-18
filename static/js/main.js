function openSideMenu() {
    document.getElementById('side-menu').style.width = '12rem';
}

function closeSideMenu() {
    document.getElementById('side-menu').style.width = '0.1px';
}
window.sr = ScrollReveal();
sr.reveal('.title > h1', {
    duration: 2000,
    origin: 'top'
});
sr.reveal('.title > p', {
    delay: 2000,
    duration: 1000,
    origin: 'left',
    distance: '300px'
});

function githubNavigate() {
    var win = window.open('https://github.com/ZaynJarvis', '_blank');
    win.focus();
}

$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // $(this).parent().children('a.activate').removeClass('activate');
            var className = $(this).attr("class").split(' ')[1];
            var act = $(this).attr("class").split(' ')[2];
            $('.activate').removeClass('activate');
            console.log('.'+className);
            $('.' + className).addClass('activate');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});
