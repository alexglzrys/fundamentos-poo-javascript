// ? los modulos en JS permiten encapsular información que debe ser secreta
// ? y solo exportar aquella que puede ser pública desde otros archivos

export class PlatziClass {
    constructor({name, videoID}) {
        this.name = name;
        this.videoID = videoID;
    }

    reproducir() {
        reproducirVideoID(this.videoID)
    }

    pausar() {
        pausarVideoID(this.videoID)
    }
}

// ! Estas funciones serán privadas desde un ambito externo, ya que no se están exportando.
function reproducirVideoID(videoID) {
    const url_secreta = `http://platzi.com/clases/${videoID}`
    console.log('Reproduciendo clase', url_secreta);
}

function pausarVideoID(videoID) {
    const url_secreta = `http://platzi.com/clases/${videoID}`
    console.log('Pausando clase', url_secreta);
}