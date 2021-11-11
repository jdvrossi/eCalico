var videoActual;
var createdOptions = false;
function showImage() {
    document.getElementById('loadingImage').style.display = 'block';
  }

var videos = [
    {
        //VIDEO 1
        nombre: 'E1',
        src: 'VIDEO_/video/E1.mp4',
        correct: true,
        canQuestions: 2,
        opciones: [
            {
                nombre: 'E2A'
            },
            {
                nombre: 'E2B'
            }

        ]
    },
    {   //OPCIONES VIDEO1

        //opcion CORRECTA
        
        nombre: 'E2A',
        src: 'VIDEO_/video/E2A.mp4',
        correct: true,
        canQuestions: 2,
        opciones: [
            {
                nombre: 'E3A'
            },
            {
                nombre: 'E3B'
            },
        ]
        
    },
    {
        //INCORRECTA
        nombre: 'E2B',
        src: 'VIDEO_/video/E2B.mp4',
        canQuestions: 2,
        opciones: [
            {
                nombre: 'E2A'
            },
            {
                nombre: 'E2B'
            },

        ]
    },
    ///VIDEO 2///ESTADO 2///CORRECTA
    {
        nombre: 'E3A',
        src: 'VIDEO_/video/E3A.mp4',
        canQuestions: 2,
        correct: true,
        opciones: [
            {
                nombre: 'E3A'
            },
            {
                nombre: 'E3B'
            },
        ]
    },

    ///OPCIONES VIDEO 2//INCORRECTA
    {
        nombre: 'E3B',
        src: 'VIDEO_/video/E3B.mp4',
        canQuestions: 2,
       
        opciones: [
            {
                nombre: 'E4A'
            },
            {
                nombre: 'E4B'
            },

        ]
    },
    {
        ///OPCIONES VIDEO ESTADO5//
        //CORRECTA
        nombre: 'E4A',
        src: 'VIDEO_/video/E4A.mp4',
        canQuestions: 2,
        correct: true,
        opciones: [
            {
                nombre: 'E4A'
            },
            {
                nombre: 'E4B'
            },

        ]

    },
    //OPCION INCORRECTA//
    {
        nombre: 'E4B',
        src: 'VIDEO_/video/E4B.mp4',

        canQuestions: 2,
        opciones: [
            {
                nombre: 'E5A'
            },
            {
                nombre: 'E5B'
            },
        ]
    },

    //OPCIONES ESTADO 6//
    //CORRECTA//
    {
        nombre: 'E5B',
        src: 'VIDEO_/video/E5B.mp4',
        canQuestions: 2,
        correct: true,
        opciones: [
            {
                nombre: 'E6A'
            },
            {
                nombre: 'E6B'
            },

        ]
    },
    //INCORRECTA

    {
        nombre: 'E5A',
        src: 'VIDEO_/video/E5A.mp4',
        canQuestions: 2,

        opciones: [
            {
                nombre: 'E5A'
            },
            {
                nombre: 'E5B'
            },
        ]
    },
          
    {
        nombre: 'E6B',
        src: 'VIDEO_/video/E6B.mp4',
    },
    {
        nombre: 'E6A',
        src: 'VIDEO_/video/E6A.mp4',
        canQuestions: 2,

        opciones: [
            {
                nombre: 'E6A'
            },
            {
                nombre: 'E6B'
            },
        ]
    }

]
//Carga de la página
var carga = false;
window.onload = () => {
    var video = document.getElementById("video");
    videoActual = videos[0];
    video.ontimeupdate = function () {
        if (video.currentTime >= video.duration - 11 && !carga) {
            carga = true;
            var button = document.getElementsByClassName("buttons");
            for (var i = 0; i < videoActual.canQuestions; i++) {
                button[i].style.display = "block";

            }

            if (videoActual.cantQuestions == 3) {
                button[0].style.left = "20%";
                button[1].style.left = "50%";
               
            } else {
                button[0].style.left = "20%";
                button[1].style.left = "65%";
            }
        }

    }
    video.onended = function () {
        video.currentTime = 0;
        var button = document.getElementsByClassName("buttons");
        for (var i = 0; i < button.length; i++) {
            button[i].style.display = "none";

        }
        carga = false;
        video.play();
    }
}


function boton(indice) {
    var video = document.getElementById("video");
    // se actualiza videoActual
    console.log(videoActual.opciones);
    console.log(videoActual.opciones[indice]);
    for (var i = 0; i < videos.length; i++) {
        if (videos[i].nombre == videoActual.opciones[indice].nombre) {
            videoActual = videos[i];

            break;
        }

    }

    //Cargar video

    var sv = document.getElementById("sv");
    video.pause();
    sv.src = videoActual.src;
    video.load();
    video.play();

    var button = document.getElementsByClassName("buttons");
    for (var i = 0; i < button.length; i++) {
        button[i].style.display = "none";

    }
    carga = false;
}