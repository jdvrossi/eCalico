var myvideo = document.getElementById('video'),
    jumplink = document.getElementById('jump');
	jumplink1 = document.getElementById('jump1');
	jumplink2 = document.getElementById('jump2');
	jumplink3 = document.getElementById('jump3');

	jumplinkB = document.getElementById('jumpB');
	jumplink1B = document.getElementById('jump1B');
	jumplink2B = document.getElementById('jump2B');
	jumplink3B = document.getElementById('jump3B');

	jumplinkV = document.getElementById('jumpV');
	jumplinkV1 = document.getElementById('jumpV1');
	jumplinkV2 = document.getElementById('jumpV2');
	jumplinkV3 = document.getElementById('jumpV3');

    jumplinkM = document.getElementById('btnIE');
	jumplinkM1 = document.getElementById('btnIA');
	jumplinkM2 = document.getElementById('btnIS');
	jumplinkM3 = document.getElementById('btnIC');


    jumplinkM.addEventListener("click", function (event) {
        event.preventDefault();
        myvideo.play();
        myvideo.pause();
        myvideo.currentTime = 25;
        myvideo.play();
    }, false);

    jumplinkM1.addEventListener("click", function (event) {
        event.preventDefault();
        myvideo.play();
        myvideo.pause();
        myvideo.currentTime = 77;
        myvideo.play();
    }, false);

    jumplinkM2.addEventListener("click", function (event) {
        event.preventDefault();
        myvideo.play();
        myvideo.pause();
        myvideo.currentTime = 137;
        myvideo.play();
    }, false);

    jumplinkM3.addEventListener("click", function (event) {
        event.preventDefault();
        myvideo.play();
        myvideo.pause();
        myvideo.currentTime = 188;
        myvideo.play();
    }, false);




jumplink.addEventListener("click", function (event) {
    event.preventDefault();
    myvideo.play();
    myvideo.pause();
    myvideo.currentTime = 58;
    myvideo.play();
}, false);

jumplink1.addEventListener("click", function (event) {
    event.preventDefault();
    myvideo.play();
    myvideo.pause();
    myvideo.currentTime = 118;
    myvideo.play();
}, false);

jumplink2.addEventListener("click", function (event) {
    event.preventDefault();
    myvideo.play();
    myvideo.pause();
    myvideo.currentTime = 162;
    myvideo.play();
}, false);

jumplink3.addEventListener("click", function (event) {
    event.preventDefault();
    myvideo.play();
    myvideo.pause();
    myvideo.currentTime = 229;
    myvideo.play();
}, false);



jumplinkB.addEventListener("click", function (event) {
    event.preventDefault();
    myvideo.play();
    myvideo.pause();
    myvideo.currentTime = 69.8;
    myvideo.play();
}, false);

jumplink1B.addEventListener("click", function (event) {
    event.preventDefault();
    myvideo.play();
    myvideo.pause();
    myvideo.currentTime = 106;
    myvideo.play();
}, false);

jumplink2B.addEventListener("click", function (event) {
    event.preventDefault();
    myvideo.play();
    myvideo.pause();
    myvideo.currentTime = 173;
    myvideo.play();
}, false);

jumplink3B.addEventListener("click", function (event) {
    event.preventDefault();
    myvideo.play();
    myvideo.pause();
    myvideo.currentTime = 212;
    myvideo.play();
}, false);


jumplinkV.addEventListener("click", function (event) {
    event.preventDefault();
    myvideo.play();
    myvideo.pause();
    myvideo.currentTime = 52;
    myvideo.play();
}, false);

jumplinkV1.addEventListener("click", function (event) {
	event.preventDefault();
	myvideo.play();
	myvideo.pause();
	myvideo.currentTime = 97;
	myvideo.play();
}, false);

jumplinkV2.addEventListener("click", function (event) {
	event.preventDefault();
	myvideo.play();
	myvideo.pause();
	myvideo.currentTime = 157;
	myvideo.play();
}, false);

jumplinkV3.addEventListener("click", function (event) {
	event.preventDefault();
	myvideo.play();
	myvideo.pause();
	myvideo.currentTime = 203;
	myvideo.play();
}, false);



function enableButton2() {
	document.getElementById("jump1").disabled = false;
}

function enableButton3() {
	document.getElementById("jump2").disabled = false;
}

function enableButton4() {
	document.getElementById("jump3").disabled = false;
}


function enableButton2B() {
	document.getElementById("jump1B").disabled = false;
}

function enableButton3B() {
	document.getElementById("jump2B").disabled = false;
}

function enableButton4B() {
	document.getElementById("jump3B").disabled = false;
}

function enableButtonP() {
	document.getElementById("jumpV1").disabled = false;
}

function enableButtonP1() {
	document.getElementById("jumpV2").disabled = false;
}

function enableButtonP2() {
	document.getElementById("jumpV3").disabled = false;
}

function showImage() {
    document.getElementById('medalV1').style.display = 'block';

  }
  function showImage2() {
    document.getElementById('medalV2').style.display = 'block';
  }
  function showImage3() {
    document.getElementById('medalV3').style.display = 'block';
  }

  function showImage4() {
    document.getElementById('medalV4').style.display = 'block';
  }

  document.addEventListener("visibilitychange", onchange);
  function onchange (evt) {
     document.getElementById("video").pause();
  }

//Metodo para navegación en el menú hamburguesa

function showMision(){
    document.getElementById("Creditos").style.display = "none";
    document.getElementById("Misiones").style.display = "flex";
}

function showCredito(){
    document.getElementById("Creditos").style.display = "flex";
    document.getElementById("Misiones").style.display = "none";
}
