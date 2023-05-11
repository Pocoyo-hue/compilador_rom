let bin = [];
let b = [];

function insert_bin(num){
    bin.push(num);
    list_bin();
}


function list_bin(){
    let select = document.getElementById("instrucciones");
    select.innerHTML=bin;
}

function hex_as_byte(){
    for(let i = 0; i<bin.length; i++){
        if(bin[i]!==null){
            b.push(parseInt(bin[i].substring(0, 2), 16));
        }
    }
    console.log(b);
}

function hex_as_byte(){
    for(let i = 0; i<bin.length; i++){
        if(bin[i]!==null){
            b.push(parseInt(bin[i].substring(0, 2), 16));
        }
    }
    console.log(b);
}

function click_f(f){
    let x;
    let operando;
    switch (f){
        case "0":
            x = 0;
            insert_bin(x);
            break;
        case "1":
            operando = prompt("Ingrese el operando 0-9");
            x = 1+""+operando;
            parseInt(x);
            insert_bin(x);
            break;
        case "2":
            operando = prompt("Ingrese el operando 0-9");
            x = 2+""+operando;
            parseInt(x);
            insert_bin(x);
            break;
        case "3":
            operando = prompt("Ingrese el operando 0-9");
            x = 3+""+operando;
            parseInt(x);
            insert_bin(x);
            break;
        case "4":
            x = 4+""+0;
            parseInt(x);
            insert_bin(x);
            break;
        case "5":
            x = 5+""+0;
            insert_bin(x);
            break;
        case "6":
            x = 6+""+0;
            insert_bin(x);
            break;
        case "7":
            x = 7+""+0;
            insert_bin(x);
            break;
        case "8":
            x = 8+""+0
            insert_bin(x);
            break;
        case "9":
            x = 9+""+0;
            insert_bin(x);
            break;
        case "C":
            operando = prompt("Ingrese el operando 0-9");
            x = "C"+""+operando;
            insert_bin(x);
            break;
        case "D":
            operando = prompt("Ingrese el operando 0-9");
            x = "D"+""+operando;
            insert_bin(x);
            break;
        case "E":
            operando = prompt("Ingrese el operando 0-9");
            x = "E"+""+operando;
            insert_bin(x);
            break;
    }
}

function create_bin(){
    let name;
    let a = "";
    hex_as_byte();
    for(let i = 0; i<b.length; i++){
        a=a+String.fromCharCode(b[i]);
    }
    console.log(a);
    name = prompt("¿Como desea llamar a su archivo?");
    name = name+'.bin';
    const archivo = new Blob([a], { type: 'text/plain;charset=ANSI' });
    let url = URL.createObjectURL(archivo);
    let link = document.createElement("a");
    link.href = url;
    link.download = name;
    document.body.appendChild(link);
    link.click();
    alert("Archivo descargado");
}

