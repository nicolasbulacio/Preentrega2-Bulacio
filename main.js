

//Constructor de Alumnos
function Alumno (nombre,edad,nota1,nota2,nota3) {

    this.nombre=nombre,
    this.edad=edad,
    this.nota1=nota1,
    this.nota2=nota2,
    this.nota3=nota3,
    this.promedio=function(){return((nota1+nota2+nota3)/3)}
}

let alumno1 = new Alumno("Alejandro",25,8,9,9)
let alumno2= new Alumno("Pedro",19,4,3,2)
let alumno3 = new Alumno("Nicolas",32,5,9,10)
let alumno4 = new Alumno("Juan",30,2,5,6)
let alumno5 = new Alumno("Gonzalo",27,5,7,5)

//Array de alumnos

let cursado=[alumno1,alumno2,alumno3,alumno4,alumno5]

//Local storage

if(localStorage.getItem(estudiante)){
    cursado=JSON.parse(localStorage.getItem(estudiante))
}else{
    cursado=cursado
}



//Agregar alumnos al Array
function agregarAlumnos(){
    let nombre=prompt("Ingrese el nombre del alumno")
    let edad=prompt("Ingrese la edad del alumno")
    let nota1=prompt("Ingrese la nota del primer trimestre")
    let nota2=prompt("Ingrese la nota del segundo trimestre")
    let nota3=prompt("Ingrese la nota del tercer trimestre")

    let alumno=new Alumno (nombre,edad,nota1,nota2,nota3)
    cursado.push(alumno)
    localStorage.setItem("estudiante",JSON.stringify(cursado))

}

// filtrar alumnos aprobados

function filtrarAprobados(){
    let aprobado=cursado.filter(alumno=>alumno.promedio()>=6)
    console.log(aprobado)

}
filtrarAprobados()

//Botones

let agregar=document.getElementById("agregar")
agregar.addEventListener("click",agregarAlumnos)

let filtrar=document.getElementById("mostrar")
mostrar.addEventListener("click",filtrarAprobados)

