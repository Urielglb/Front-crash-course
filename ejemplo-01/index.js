let a = 1;
var b = 2;
const c = 3;

console.log(a);
console.log(b);
console.log(c);

console.log(a==="1");
console.log(a!=="1");

a = 4;
b = 5;

console.log(a);
console.log(b);
console.log(c);

function suma (a,b){
    console.log(a+b);
}

suma(a,b)

function multiplicaPorTresODos(a,esPorDos){
    let x = 0;
    if (esPorDos) {
        x = 2;
    }else{
        x = 3;
    }
    console.log(a*2);
}

multiplicaPorTresODos(4,true);

const funcionYaNoAnonima = ()=>{console.log("Soy una funcion anonima");}

const suma2 = (a,b) => a+b;

console.log(suma2(a,b));

const alumnos = ["Luis", "Roberto"];

console.log(alumnos[1]);

alumnos.push("Javier");

alumnos.push("Veronica")

console.log(alumnos[3]);

alumnos.pop();

console.log(alumnos);

const creaAlumno = (nombre,cuenta)=> {
    return {
    nombre,
    cuenta,
    saluda: function(){console.log(`Hola amigos me llamo, ${this.nombre}`)}
    }
}

const alumno = creaAlumno("Javier", "2121");

console.log(alumno);

class Alumno{
    constructor(nombre, cuenta){
        this.nombre = nombre;
        this.cuenta = cuenta;
    }

    saluda() {
        console.log(`Hola amigos me llamo, ${this.nombre}`);
    }
}

const alumno2 = new Alumno("Canek","14200");

function AlumnoNuevo(nombre,cuenta){
    this.nombre = nombre;
    this.cuenta = cuenta;
    this.saluda = function() {
        console.log(`Hola amigos me llamo, ${this.nombre}`);
    }
}

const alumno3 = new AlumnoNuevo("Uriel","332");

const creaEgresado = (alumno,licenciatura)=>{
    return {
        ...alumno,
        licenciatura
    }
}

const egresado = creaEgresado(alumno,"Ciencias de la Computación");

alumno.saluda();
alumno2.saluda();
alumno3.saluda();

console.log(egresado);
egresado.saluda();

const alumnosObjeto = [];

for (let index = 0; index < alumnos.length; index++) {
    const element = alumnos[index];
    alumnosObjeto.push(creaAlumno(element,index+1));
}

const alumnosObjetosForEach = [];

let index = 0;

for (const alumno of alumnos) {
    alumnosObjetosForEach.push(creaAlumno(alumno, ++index))
}

const alumnosObjetosMap = alumnos.map((alumno,index)=>creaAlumno(alumno,index+1));

console.log(alumnosObjeto);
console.log(alumnosObjetosMap);
console.log(alumnosObjetosForEach);

console.log(alumnosObjetosMap.find((alumno)=>alumno.cuenta == "2"));
console.log(alumnosObjetosForEach.filter((alumno)=>alumno.cuenta >= 1 && alumno.cuenta<3))