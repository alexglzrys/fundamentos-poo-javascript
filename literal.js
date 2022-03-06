// ? Los objetos literales son estructuras de datos rápidas para poder comenzar
// Sin embargo, actuan como estructura de datos para un solo objeto y no como molde para generar nuevos objetos

// ! Si en algún punto de la historia la escuela de Desarrollo Web tiene más cursos, necesitamos actualizar objeto por objeto que contenga en sus rutas de aprendizaje dicha escuela

const anita_literal = {
    name: 'anita',
    username: 'anitamejia',
    points: 200,
    socialMedia: {
        twitter: '@anita',
        instagram: 'anita_mejia',
        facebook: undefined
    },
    approvedCourses: [
        'Curso definitivo de HTML y CSS',
        'Curso práctico de HTML y CSS',
        'Desarrollo de páginas reponsivas'
    ],
    learningPaths: [
        {
            name: 'Escuela de Desarrollo Web',
            courses: [
                'Curso definitivo de HTML y CSS',
                'Curso práctico de HTML y CSS',
                'Curso de Responsive Web Design' 
            ]
        },
        {
            name: 'Escuela de Negocios',
            courses: [
                'Negocios en la nube',
                'Criptomonedas'
            ]
        }
    ]
}

const juanita_literal = {
    name: 'Juanita',
    username: 'juanitalopez',
    points: 200,
    socialMedia: {
        twitter: '@juanita',
        instagram: 'juanita_lopez',
        facebook: undefined
    },
    approvedCourses: [
        'Curso definitivo de HTML y CSS',
        'Curso práctico de HTML y CSS',
    ],
    learningPaths: [
        {
            name: 'Escuela de Desarrollo Web',
            courses: [
                'Curso definitivo de HTML y CSS',
                'Curso práctico de HTML y CSS',
                'Curso de Responsive Web Design' 
            ]
        },
        {
            name: 'Escuela de Programación con JavaScript',
            courses: [
                'Fundamentos de Programación',
                'Introducción a JavaScript',
                'Programación funcional'
            ]
        }
    ]
}