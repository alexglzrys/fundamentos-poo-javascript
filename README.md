## Fundamentos de Programación Orientada a Objetos con JavaScript

#### Paradigmas

La mayoría de los lenguajes de programación permiten a los programadores usar varios paradigmas en el desarrollo de proyecto de software. Los paradigmas de la programación nacen con la intensión de resolver problemáticas que otros paradigmas generan o no pueden solucionar. Debemos entenderlos como una guia de estilo o recomendaciones para desarrollar software

- Estructurado
- Funcional
- Orientado a objetos

#### Objetos literales en JavaScript
```
const students = {
    'Juan': 300,
    'Luisa': 400
}
```
Los objetos literales **son diferentes** a las instancias (POO)
- Los objetos literales tienen por defecto un atributo llamado **__proto__** de **tipo Object**, el cúal contiene otras propiedades o métodos que automáticamente hereda dicho objeto literal, mismas que se pueden acceder directamente si la necesidad de invocar objeto.__proto.propiedad_metodo

```
student.hasOwnProperty('name');
```

#### Instancias en JavaScript
```
function Student() {
    this.name = 'Nombre';
    this.age = 18;
    this.points = 750;
}
const juanita = new Student();
```
Los instancias en JavaScript se crean a partir de funciones, las cuales se les conoce como **Prototipos**

En JavaScript las instancias de objetos nacen a partir de funciones llamadas prototipos, no de clases como en otros lenguajes de programación. 

- Las instancias en JS también contienen un atributo **__proto__** de **tipo Object** por defecto
- **En JavaScript** por defecto todo es un objeto.
- Un arreglo, por defecto es una instancia de un prototipo **(__proto__)** del tipo Array, el cual contiene un listado de propiedades o métodos por defecto todo array por naturaleza debe tener: **length, push(), pop(), etc.**

Objetos literales, Instancias de prototipos, Arreglos, Prototipo Object(), **Todos ellos son Objetos**, ya que heredan del prototipo Object



