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