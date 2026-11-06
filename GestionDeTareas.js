// =====================================
// Sistema de Gestión de Tareas
// =====================================

/*
INSTRUCCIONES GENERALES:

1. Lee cuidadosamente cada sección.
2. Completa únicamente donde se indica con TODO.
3. No borres la estructura base.
4. Agrega comentarios explicando tu lógica.
5. Prueba cada función antes de continuar.
6. NO USAR INTELIGENCIA ARTIFICIAL.
*/


// =====================================
// 1. Arreglo inicial de tareas
// =====================================

/*
Cada tarea tiene:
- nombre: string
- prioridad: number (1 = alta, 2 = media, 3 = baja)
- completada: boolean
*/

const tareas = [
  { nombre: "Ir a la playa", prioridad: 1, completada: false },
  { nombre: "Estudiar JS", prioridad: 2, completada: true },
  { nombre: "Ver películas", prioridad: 3, completada: false }
];


// =====================================
// 2. Funciones
// =====================================

/*
TODO 1:
Crear una función que recorra el arreglo de tareas
y muestre en consola:
- nombre de la tarea
- estado: "Completada" o "Pendiente"
*/
function mostrarTareas(tareas) {
  //Recorremos el arreglo 1 a 1
  tareas.forEach(tarea => {
    //imprimimos el nombre
    console.log(tarea.nombre)
    //por cada tarea en la que vamos vemos si completada es true o false,si es true imprimime que el estado es completado,si es false es que esta pendiente
    if(tarea.completada){
      console.log("Estado: Completada")
    }else{
      console.log("Estado: Pendiente")
    }

  });
}


/*
TODO 2:
Crear una función flecha que retorne
solo las tareas completadas.
Usar filter.
*/

const obtenerCompletadas = (lista) => {
//utilizamos filter y usamos una funcion flecha donde vamos viendo por las cada tarea si su atributo completada es igual a true,si si lo retorna
  return lista.filter(tarea => tarea.completada === true);
};


/*
TODO 3:
Crear una función flecha que retorne
solo las tareas pendientes.
Usar filter.
*/

const obtenerPendientes = (lista) => {
  //utilizamos filter y usamos una funcion flecha donde vamos viendo por las cada tarea si su atributo completada es igual a false,si si lo retorna

      return lista.filter(tarea => tarea.completada === false);

};

/*
TODO 4:
Crear una función flecha que retorne
solo los nombres de las tareas.
Usar map.
*/
const obtenerNombres = (lista) => {
  //Utilizamos .map en el arreglo para que nos de solo los nombres
  const nombres = lista.map(tarea => tarea.nombre)
  //hacemos return a los nombres
  return nombres;
};


/*
TODO 5:
Crear una función que retorne
el total de tareas.
*/
function contarTareas(lista) {
  //utilizamos .length para saber cuantos elementos tiene el arreglo
  return lista.length;
}


// =====================================
// 3. Objeto sistema
// =====================================

/*
TODO 6:
Completar los métodos usando this.tareas

- mostrarTareas: debe llamar a la función mostrarTareas
- mostrarCompletadas: debe usar obtenerCompletadas
- mostrarPendientes: debe usar obtenerPendientes
*/

const sistema = {
  tareas: tareas,

  mostrarTareas: function() {
    //Mandamos a llamar a la funcion de mostrar tareas enviandole el this.tareas que viene agarrando el tareas de la linea 128
    mostrarTareas(this.tareas)

  },

  mostrarCompletadas: function() {
      //Mandamos a llamar a la funcion de obtener completadas enviandole el this.tareas que viene agarrando el tareas de la linea 128

    console.log(obtenerCompletadas(this.tareas))

  },

  mostrarPendientes: function() {
      //Mandamos a llamar a la funcion de obtener pendientes enviandole el this.tareas que viene agarrando el tareas de la linea 128
    console.log(obtenerPendientes(this.tareas))

  }
};


// =====================================
// 4. Condicionales
// =====================================

/*
TODO 7:

- Si el arreglo tareas está vacío:
  mostrar "No hay tareas"

- Si todas las tareas están completadas:
  mostrar "Todas las tareas completadas"
*/
function todasTareasONinguna(lista){
  //utilizamos .length en la lista y si regresa 0 sinifica que no hhay elementos en el arreglo por ende esta vacia
  if(lista.length === 0){
  console.log("No hay tareas")
  return;
}
//utilizamos .every sobre el arreglo para que revise si todos los elementos son true,si si regresa true y entra a la condicion
if(lista.every(tarea =>tarea.completada === true)){
  
  console.log("Todas las tareas completadas")
  return;
}

}


// =====================================
// 5. Switch
// =====================================

/*
TODO 8:

Usar la variable opcion para ejecutar:

1 -> mostrar todas las tareas
2 -> mostrar tareas completadas
3 -> mostrar tareas pendientes
default -> mostrar "Opción inválida"
*/

const opcion = 1;

switch (opcion) {
  case 1:
    //mandamos a llamar mostrar tareas enviadole el arreglo de tareas como parametro
    mostrarTareas(tareas)

    break;

  case 2:
      //mandamos a llamar obtener completadas enviadole el arreglo de tareas como parametro,lo llamamos en un console.log para que imprima 
    console.log(obtenerCompletadas(tareas))

    break;

  case 3:
      //mandamos a llamar obtener pendientes enviadole el arreglo de tareas como parametro,lo llamamos en un console.log para que imprima 
    console.log(obtenerPendientes(tareas))

    break;

  default:
    console.log("Opción inválida");
}


// =====================================
// 6. Pruebas
// =====================================

/*
TODO 9:

Llamar funciones para comprobar que todo funciona correctamente.
Usar console.log donde sea necesario.
*/

console.log("MOSTRAR TAREAS")
mostrarTareas(tareas)

console.log("OBTENER COMPLETADAS")
console.log(obtenerCompletadas(tareas))

console.log("OBTENER PENDIENTES")
console.log(obtenerPendientes(tareas))

console.log("OBTENER NOMBRES");
console.log(obtenerNombres(tareas));

console.log("TOTAL DE TAREAS");
console.log(contarTareas(tareas));

console.log("PRUEBAS DEL SISTEMA");

sistema.mostrarTareas();
sistema.mostrarCompletadas();
sistema.mostrarPendientes();


console.log("Ver si no hay tareas o si todas estan completas en el arreglo tareas")
todasTareasONinguna(tareas)

console.log("Ver si no hay tareas o si todas estan completas con un arreglo vacio")
todasTareasONinguna([])

console.log("Ver si no hay tareas o si todas estan completas con un arreglo con todo completado")
todasTareasONinguna(
  [
  { nombre: "Ir a la playa", prioridad: 1, completada: true },
  { nombre: "Estudiar JS", prioridad: 2, completada: true },
  { nombre: "Ver películas", prioridad: 3, completada: true }
]
)
