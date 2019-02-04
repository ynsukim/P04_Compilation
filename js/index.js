
// Link List
$('.ln1').attr('href','about.html');
$('.ln2').attr('href','./p01lyrics/index.html');
$('.ln3').attr('href','./p02dedesign/index.html');
$('.ln4').attr('href','./p03arecord/index.html');
$('.ln5').attr('href','index.html');
$('.ln6').attr('href','https://docs.google.com/document/d/1CdiIGnYWyjqv0vz5FMSx1BPO_1rEVQ6Hnjg059rtFZw/edit?usp=sharing');
$('.ln7').attr('href','./e00sevenprinciple/index.html');
$('.ln8').attr('href','./e01mullerbrockmann/index.html');
$('.ln9').attr('href','https://docs.google.com/spreadsheets/d/1pi55Tq7avJC-mmYdkzJB_RocdH6BSAnkr2IK3mOQb2g/edit?usp=sharing');


for (var i = 1; i < 10; i++) {
    $('.ln'+i).append('<span></span>');
}

for (var i = 1; i < 10; i++) {
    $('.ln'+i+' span').append('<img  src="./img/scr0'+i+'.png" />');
}

var tooltips = document.querySelectorAll('.tTp span');

window.onmousemove = function (e) {
    var x = (e.clientX + 20) + 'px',
        y = (e.clientY + 20) + 'px';
    for (var i = 0; i < tooltips.length; i++) {
        tooltips[i].style.top = y;
        tooltips[i].style.left = x;
    }
};

/* iframe
-----------------------*/

$(".popup").hide();

$(".tTp").click(function (e) {
    e.preventDefault();
    $("iframe").attr("src", $(this).attr('href'));
    console.log($(this).attr('href'));
    $(".popup").fadeIn('slow');
    $('.wrapper').addClass('bgblur')
    $('body').addClass('bgblue')
});

$(".close").click(function () {
    $('.wrap').parent().fadeOut("fast");
    $('.wrapper').removeClass('bgblur');
    $('iframe').removeClass('ifrg').addClass('ifr')
    $('body').removeClass('bgblue')
});

$(".ln6").click(function (e) {
    e.preventDefault();
    $('iframe').removeClass('ifr').addClass('ifrg');
});

$(".ln9").click(function (e) {
    e.preventDefault();
    $('iframe').removeClass('ifr').addClass('ifrg');
});
$(".ln1").click(function (e) {
    e.preventDefault();
    $('iframe').removeClass('ifr').addClass('ifrg');
});
