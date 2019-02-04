/* global Variables
-------------------------------*/
var viewPort = document.querySelector('.viewPort');
var btnBar = document.querySelector('.btnBar');



/* Create HTML Elements
-------------------------------*/
for (var i = 1; i < 7; i++) {
    var bgBox = document.createElement("div");
    bgBox.setAttribute("class", "bgBox bg0"+i)
    viewPort.appendChild(bgBox);
}

for (var i = 1; i < 7; i++) {
    var bgBtn = document.createElement("input");
    bgBtn.setAttribute("class", "bgBtn0"+i,)
    bgBtn.setAttribute("type", "checkbox")
    btnBar.appendChild(bgBtn);
}

/* global Functions
-------------------------------*/
for (var i = 1; i < 7; i++) {
    document.querySelector('.bg0'+i).style.display="none";
    console.log('bg0'+i);
}

/* Button Function
-------------------------------*/
// toggle bg functions
function btnTgle(e) {
    var bgBt = document.querySelector('.bgBtn0'+e);
    var bg = document.querySelector('.bg01'+e);
    bgBt.addEventListener( 'change', function() {
        if(this.checked){
            document.querySelector('.bg0'+e).style.display="";
            $(".intMessage").fadeOut(1500);
            }
        else { document.querySelector('.bg0'+e).style.display="none";}
    });
}
// imply toggles
for (var i = 1; i < 7; i++) {
    btnTgle(i);
}


/*  create draggable elment
-------------------------------*/
for (var i = 1; i < 6; i++) {
    var boxView = document.querySelector('.bg06');
    var miniBox = document.createElement("div");
    miniBox.setAttribute("id", "draggable"+i);
    boxView.appendChild(miniBox);}

/*  Set Style for Draggable element
-------------------------------*/

document.querySelector("#draggable5").setAttribute("class", "miniBox red");
document.querySelector("#draggable4").setAttribute("class", "miniBox blue");
document.querySelector("#draggable3").setAttribute("class", "miniBox green");
document.querySelector("#draggable2").setAttribute("class", "miniBox yellow");
document.querySelector("#draggable1").setAttribute("class", "miniBox purple");

/*  Drag jQuery - http://jqueryui.com/draggable/#default
    CANT GET IT IN FOR LOOP....
-------------------------------*/

$(  function()   {$( "#draggable1").draggable();}   );
$(  function()   {$( "#draggable2").draggable();}   );
$(  function()   {$( "#draggable3").draggable();}   );
$(  function()   {$( "#draggable4").draggable();}   );
$(  function()   {$( "#draggable5").draggable();}   );


/* Alter Functions
-------------------------------*/

var aCount06 = 0;

(function(){
    var alert06 = document.querySelector('.bgBtn06');
    alert06.addEventListener( 'change', function() {
        if(this.checked) {
            if(aCount06==0){
                alert('This is a Draggable element');
                aCount06 += 1;
    }   }   });
    return aCount06;
})();


/* Initial Message
-------------------------------*/
