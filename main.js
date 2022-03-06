// ? Objeto literal
// ! Solo funciona para este objeto en particual, No hay una clase o model para generar más elementos de este tipo
const natalia = {
    name: 'Natalia',
    age: 20,
    approved_courses: [
        'Curso de HTML',
        'Curso de CSS'
    ],
    aprobarCurso(course) {
        this.approved_courses.push(course)
    }
};

// Hacer que el objeto Natalia apruebe un curso
natalia.aprobarCurso('Taller de HTML y CSS')
natalia.aprobarCurso('Fundamentos de RWD')


// ? Generar Prototipo
// ! Esta función actua como molde para generar nuevas instancias a partir de ella
function Student(name, age, cursos_aprobados) {
    this.name = name;
    this.age = age;
    this.cursos_aprobados = cursos_aprobados;
}

// * Agregar método a nuestro prototipo
Student.prototype.aprobarCurso = function (nuevo_curso) {
    this.cursos_aprobados.push(nuevo_curso);
}

/**
 * Para este punto, la instancia juanita es un objeto del tipo Student
 * el cual, es un prototipo que contiene propiedades y métodos definidos por defecto (constructor y el método aprobarCurso).
 * Mismo que hereda a su vez del prototipo padre que es Object
 */

// Crear ina instancia del prototipo Student
const juanita = new Student("Juanita", 28, ['Videojuegos', 'Blender']);
juanita.aprobarCurso('Unreal Engine 4');



// ? Prototipos con la sintáxis de Clases

class Estudiante {
    /*constructor(nombre, edad, cursos_aprobados) { 
        this.nombre = nombre;
        this.edad = edad;
        this.cursos_aprobados = cursos_aprobados;
    }*/

    // ? Existe un patron llamado ROR (recibe un objeto y retorna un objeto), el cual nos permite enviar los parámetros a un metodo o función en desorden
    // ! Esto nos ayuda a no tener que memorizarlos, y solo enviar aquellos que necesitamos, dejado el resto con sus valores por defecto

    constructor({ nombre, edad, cursos_aprobados = [], diplomas = 0}) {
        this.nombre = nombre;
        this.edad = edad;
        this.cursos_aprobados = cursos_aprobados;
        this.diplomas = diplomas
    }

    aprobarCurso(nuevo_curso) {
        this.cursos_aprobados.push(nuevo_curso)
        this.diplomas++;
    }
}

// const miguel = new Estudiante('Miguel', 21, ['Canciones básicas', 'Juegos con Unity']);
const miguel = new Estudiante({edad: 21, nombre: 'Miguel'});
miguel.aprobarCurso('Análisis de datos');

