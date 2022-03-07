// ? Prototipos con sintaxis de clases
// ! Sirven de molde para nuevos objetos que se crean con la misma estructura

class Alumno {
    constructor({ name, username, points = 0, socialMedia = [], approvedCourses = [], learningPaths = []}) {
        this.name = name;
        this.username = username;
        this.points = points;
        this.socialMedia = socialMedia;
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
    }
}

class SocialMedia {
    constructor({twitter = undefined, instagram = undefined, facebook = undefined}) {
        this.twitter = twitter;
        this.instagram = instagram;
        this.facebook = facebook
    }
}

class LearningPath {
    constructor({name, courses = []}) {
        this.name = name;
        this.curses = courses;
    }
}

// Abstraer el problema en partes mas pequeñas llamadas clases ayuda a un mejor entendimiento del mismo

class Course {
    constructor({name, description, classes = [], duration = undefined}) {
        this.name = name;
        this.description = description;
        this.duration = duration;
        this.classes = classes;
    }
}

class Classe {
    constructor({name, video, duration}) {
        this.name = name;
        this.video = video;
        this.duration = duration;
    }
}

// ? Generar nuevas instancias para rutas de aprendizaje
// ! Escuelas
const escuela_desarrollo_web = new LearningPath({
    name: 'Escuela de Desarrollo Web',
    courses: [
        'Curso definitivo de HTML y CSS',
        'Curso práctico de HTML y CSS',
        'Curso de Responsive Web Design' 
    ]
});
const escuela_de_negocios = new LearningPath({
    name: 'Escuela de Negocios',
    courses: [
        'Negocios en la nube',
        'Criptomonedas'
    ]
});
const escuela_de_javascript = new LearningPath({
    name: 'Escuela de JavaScript',
    courses: [
        'Fundamentos de Programación',
        'Introducción a JavaScript',
        'Programación funcional'
    ]
});



// ? Generar instancias para las clases que se imparten en los cursos
// ! Clases disponibles
const html_css_01 = new Classe({
    name: 'Introducción al curso de HTML y CSS',
    video: 'video 01',
    duration: '34 seg'
});
const html_css_02 = new Classe({
    name: '¿Que es el desarrollo Web',
    video: 'video 02',
    duration: '2 min.'
});
const js_01 = new Classe({
    name: 'Introducción al curso de JS',
    video: 'video 01',
    duration: '2 min'
})
const rwd_01 = new Classe({
    name: 'Introducción al curso de Responsive Web Design',
    duration: '1 min'
})
const html_css_practico_01 = new Classe({
    name: 'Introducción al taller práctico de HTML y CSS',
    video: 'video 01',
    duration: '3 min'
});
const html_css_practico_05 = new Classe({
    name: 'Instalación de software y librerías',
    video: 'video 5',
    duration: '7 min'
})
const crypto_01 = new Classe({
    name: 'Introducción a las criptomonedas',
    video: 'video 1',
    duration: '2 min'
})

// ? Generar nuevas instancias de cursos
// ! Cursos disponibles
const curso_html_css = new Course({
    name: 'Curso definitivo de HTML y CSS',
    description: 'Aprende las bases para desarrollar sitios web estáticos',
    duration: '74 min',
    classes: [
        html_css_01,
        html_css_02
    ]
});
const curso_practico_html_css = new Course({
    name: 'Curso práctico de HTML y CSS',
    description: 'Desarrolla un proyecto desde cero hasta producción con HTML y CSS',
    duration: '90 min',
    classes: [
        html_css_practico_01,
        html_css_02,
        js_01,
        rwd_01,
        html_css_practico_05
    ]
});
const curso_responsive = new Course({
    name: 'Desarrollo de páginas reponsivas',
    description: 'Desarrolla un sitio web que se adapte a multiples dispositivos',
    duration: '45 min',
    classes: [
        rwd_01,
        html_css_02
    ]
});
const curso_javascript_basico = new Course({
    name: 'Introducción a JavaScript',
    description: 'Aprende que es JavaScript y aplica comportamiento dinámico a tus sitios Web',
    duration: '95 min',
    classes: [
        js_01,
        html_css_02
    ]
});
const curso_criptomonedas = new Course({
    name: 'Criptomonedas',
    description: 'Conoce los fundamentos de las criptomonedas',
    duration: '32 min',
    classes: [
        crypto_01
    ]
});

// ? Generar nuevas instancias para alumnos inscritos

const anita_redes = new SocialMedia({twitter: '@anita_fresita'})
const anita_instancia = new Alumno({
    name: 'Anita', 
    username: 'anitafresita',
    socialMedia: anita_redes,
    approvedCourses: [
        curso_html_css,
        curso_practico_html_css,
        curso_responsive
    ],
    learningPaths: [
        escuela_desarrollo_web
    ]
});

const juanita_redes = new SocialMedia({twitter: '@juanita_emoxa', instagram: 'juani'});
const juanita_instanica = new Alumno({
    name: 'Juanita',
    username: 'juanita_carbajal',
    socialMedia: juanita_redes,
    learningPaths: [
        escuela_desarrollo_web,
        escuela_de_negocios,
        escuela_de_javascript
    ],
    approvedCourses: [
        curso_html_css,
        curso_criptomonedas,
        curso_javascript_basico
    ]
})