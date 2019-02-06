
// Link List
$('.ln01').attr('href','about.html');
$('.ln02').attr('href','./p01lyrics/index.html');
$('.ln03').attr('href','./p02dedesign/index.html');
$('.ln04').attr('href','./p03arecord/index.html');
$('.ln05').attr('href','index.html');
$('.ln06').attr('href','https://docs.google.com/document/d/1CdiIGnYWyjqv0vz5FMSx1BPO_1rEVQ6Hnjg059rtFZw/edit?usp=sharing');
$('.ln07').attr('href','./e00sevenprinciple/index.html');
$('.ln08').attr('href','./e01mullerbrockmann/index.html');
$('.ln09').attr('href','https://docs.google.com/spreadsheets/d/1pi55Tq7avJC-mmYdkzJB_RocdH6BSAnkr2IK3mOQb2g/edit?usp=sharing');
$('.ln10').attr('href','./process/index.html');
$('.ln11').attr('href','./githubredirect.html');


for (var i = 1; i < 10; i++) {
    $('.ln0'+i).append('<span></span>');
}

$('.ln10').append('<span><img src="./img/scr10.png"></span>');
$('.ln11').append('<span><img src="./img/scr11.png"></span>');

for (var i = 1; i < 10; i++) {
    $('.ln0'+i+' span').append('<img  src="./img/scr0'+i+'.png" />');
}

var tooltips = document.querySelectorAll('.tTp span');

window.onmousemove = function (e) {
    var difX = window.innerWidth - e.clientX;
    var difY = window.innerHeight - e.clientY;
    var moveX, moveY;

    if (difX > $('span').width()-50) {moveX = 2;}
    else{moveX = 5-$('span').width()}

    if (difY > $('span').height()*0.8) {moveY = 2;}
    else{moveY = 70-$('span').height()}

    var x = (e.clientX + moveX) + 'px',
        y = (e.clientY + moveY) + 'px';

    for (var i = 0; i < tooltips.length; i++) {
        tooltips[i].style.top = y;
        tooltips[i].style.left = x;
    }
};


/* iframe + media size img
-----------------------*/

$(".popup").hide();

$(".tTp").click(function (e) {
    e.preventDefault();

    if (window.matchMedia('(max-width: 480px)').matches){
        $("iframe").hide();
        var iNo = $(this).attr("class").slice(-2);
        var hRef = $(this).attr("href")
        console.log(iNo);
        $('.wrap a').show().attr("href",hRef);
        $('.wrap img').show().attr("src","./img/scr"+iNo+".png");
        $('.ln11').attr('href','https://www.github.com/ynsukim');
    }
    else{
        $(".wrap img").hide();
        $("iframe").show().attr("src", $(this).attr('href'));

    }

    var newWin =  $(this).attr('href');
    $('.bufTxt a').attr('href',this);

    $(".popup").fadeIn('slow');
    $('.wrapper').addClass('bgblur')
    $('body').addClass('bgblue')

});

$(".close").click(function () {
    $('.wrap').parent().fadeOut("fast");
    $('.wrapper').removeClass('bgblur');
    $('iframe').removeClass('ifrg').addClass('ifr')
    $('body').removeClass('bgblue')
    $('.ifr').removeAttr("src");
});

$(".popup").click(function () {
    $('.wrap').parent().fadeOut("fast");
    $('.wrapper').removeClass('bgblur');
    $('iframe').removeClass('ifrg').addClass('ifr')
    $('body').removeClass('bgblue')
    $('.ifr').removeAttr("src");
});


/* iframe manual overide
-----------------------*/

$(".ln1").click(function (e) {
    e.preventDefault();
    $('iframe').removeClass('ifr').addClass('ifrg');
});

$(".ln6").click(function (e) {
    e.preventDefault();
    $('iframe').removeClass('ifr').addClass('ifrg');
});

$(".ln9").click(function (e) {
    e.preventDefault();
    $('iframe').removeClass('ifr').addClass('ifrg');
});
$(".ln10").click(function (e) {
    e.preventDefault();
    $('iframe').removeClass('ifr').addClass('ifrg');
});



/* Hide hover image when Mobile
---------------------*/

(function($) {
	function mediaSize() {
		if (window.matchMedia('(max-width: 480px)').matches) {
            $('.wrapper p a span img').hide()
		} else {
            $('.wrapper p a span img').show()
		}
	};
  mediaSize();
	window.addEventListener('resize', mediaSize, false);
})(jQuery);
