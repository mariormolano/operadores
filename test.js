const primer_objeto = {
  nombre: "mario",
  seg_objeto: {
    nombre2:"molano",
    tercer_obeto:{
      nombre3: "pedro"
    }
  }
};

const {nombre3} = primer_objeto.seg_objeto.tercer_obeto
const {nombre2} = primer_objeto.seg_objeto

let nombre3_api = nombre3 ?? "no existe" //nullish coalescing operator
nombre3_api == "pedro" ? console.log("") : console.log(nombre2); //if ternario

console.log(`<div><p>Nombre de usuario:${nombre3_api}</p></div>

apellido de usuario:${nombre2}

<br>
`);
