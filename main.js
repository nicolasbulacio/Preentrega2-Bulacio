

//Constructor de Alumnos
function Alumno (nombre,nota1,nota2,nota3) {

    this.nombre=nombre,
    
    this.nota1=nota1,
    this.nota2=nota2,
    this.nota3=nota3,
    this.promedio=function(){return((nota1+nota2+nota3)/3)}
}

let alumno1 = new Alumno("Alejandro",8,9,9)
let alumno2= new Alumno("Pedro",4,3,2)
let alumno3 = new Alumno("Nicolas",5,9,10)
let alumno4 = new Alumno("Juan",2,5,6)
let alumno5 = new Alumno("Gonzalo",5,7,5)

//Array de alumnos

let cursado=[alumno1,alumno2,alumno3,alumno4,alumno5]

//Local storage



if (localStorage.getItem("alumnos")) {
    cursado = JSON.parse(localStorage.getItem("alumnos")).map(alumnoData => {
        return new Alumno(alumnoData.nombre, alumnoData.nota1, alumnoData.nota2, alumnoData.nota3);
    });
} else {
    cursado = cursado;
}

//Agregar alumnos al Array
function agregarAlumnos(){
    let nombre=prompt("Ingrese el nombre del alumno")
    
    let nota1=prompt("Ingrese la nota del primer trimestre")
    let nota2=prompt("Ingrese la nota del segundo trimestre")
    let nota3=prompt("Ingrese la nota del tercer trimestre")

    let alumno=new Alumno (nombre,nota1,nota2,nota3)
    cursado.push(alumno)
    localStorage.setItem("alumnos",JSON.stringify(cursado))

    Swal.fire({
        title: 'Alumno agregado!',
        text: `El alumno ${nombre} fue agregado con éxito.`,
        icon: 'success',
        confirmButtonText: 'Aceptar'
    });

}

// filtrar alumnos aprobados

function filtrarAprobados(){
    let aprobado=cursado.filter(alumno=>alumno.promedio()>=6)
    //console.log(aprobado)
    if (aprobado.length > 0) {
        let mensaje = aprobado.map(alumno => `${alumno.nombre} (Promedio: ${alumno.promedio()})`).join("\n");
        Swal.fire({
            title: 'Alumnos Aprobados',
            text: mensaje,
            icon: 'info',
            confirmButtonText: 'Aceptar'
        });
    } else {
        Swal.fire({
            title: 'No hay alumnos aprobados',
            text: 'No hay alumnos con promedio mayor o igual a 6.',
            icon: 'warning',
            confirmButtonText: 'Aceptar'
        });}

}
//filtrarAprobados()

//Botones

let agregar=document.getElementById("agregar")
agregar.addEventListener("click",agregarAlumnos)

let filtrar=document.getElementById("mostrar")
filtrar.addEventListener("click",filtrarAprobados)

