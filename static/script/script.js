let bin = [];
let b = [];

function insert_bin(num){
    bin.push(num);
}

function delete_bin(id){
    bin[id]=null;
}

function list_bin(){
    for(let i = 0; i < bin.length; i++){
        if(bin[i]!==null){
            document.write(`<table>
                    <tr>
                        <td>${bin[i]}</td>
                    </tr>
                </table>`);
        }
    }
}

function hex_as_byte(){
    for(let i = 0; i<bin.length; i++){
        if(bin[i]!==null){
            b.push(parseInt(bin[i].substring(0, 2), 16));
        }
    }
    console.log(b);
}

function click_f(operando){
    let not = document.getElementById('not');
    let nand = document.getElementById('nand');
    let add = document.getElementById('add');
    let lda = document.getElementById('lda');
    let outa = document.getElementById('outa');
    let outb = document.getElementById('outb');
    let ina = document.getElementById('ina');
    let rd = document.getElementById('rd');
    let ra = document.getElementById('ra');
    let ldra = document.getElementById('ldra');
    let jpi = document.getElementById('jpi');
    let pjc = document.getElementById('jpc');
    let jpz = document.getElementById('jpz');
}

function create_bin(){
    let name;
    let a = "";
    for(let i = 0; i<b.length; i++){
        a=a+String.fromCharCode(b[i]);
    }
    console.log(a);
    name = prompt("¿Como desea llamar a su archivo?");
    name = name+'.bin';
    const archivo = new Blob([a], { type: 'text/plain' });
    saveAs(archivo, name);
    alert("Archivo descargado");
}

