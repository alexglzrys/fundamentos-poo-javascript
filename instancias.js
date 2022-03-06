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

// ? Generar nuevas instancias para alumnos inscritos

const anita_redes = new SocialMedia({twitter: '@anita_fresita'})
const anita_instancia = new Alumno({
    name: 'Anita', 
    username: 'anitafresita',
    socialMedia: anita_redes,
    approvedCourses: [
        'Curso definitivo de HTML y CSS',
        'Curso práctico de HTML y CSS',
        'Desarrollo de páginas reponsivas'
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
        'Curso definitivo de HTML y CSS',
        'Criptomonedas',
        'Introducción a JavaScript',
    ]
})