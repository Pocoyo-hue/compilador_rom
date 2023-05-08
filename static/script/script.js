let bin = [];
let b = [];

function insert_bin(num){
    bin.push(num);
}

function delete_bin(id){
    bin[id]=null;
}

function list_bin(){
    let y;
    let o; 
    for(let i = 0; i < bin.length; i++){
        y = bin[i].toString();
        o = y;
        y = y.charAt(0);
        console.log(y);
        o = o.charAt(1);
        switch (y){
            case "0":
                y = "NOT";
                break;
            case "1":
                y = "NAND";
                break;
            case "2":
                y = "ADD";
                break;
            case "3":
                y = "LDA";
                break;
            case "4":
                y = "OUTA";
                break;
            case "5":
                y = "OUTB";
                break;
            case "6":
                y = "INA";
                break;
            case "7":
                y = "RD";
                break;
            case "8":
                y = "RA";
                break;
            case "9":
                y = "LDRA";
                break;
            case "C":
                y = "JPI";
                break;
            case "D":
                y = "JPC";
                break;
            case "E":
                y = "JPZ";
                break;
        }
        if(bin[i]!==null){
            document.write(`<table>
                    <tr>
                        <td>Nemónico</td>
                        <td>Operando</td>
                    </tr>
                    <tr>
                        <td>${y}</td>
                        <td>${o}</td>
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

function click_f(f,operando){
    let x;
    switch (f){
        case "0":
            x = 0;
            insert_bin(x);
            break;
        case "1":
            x = 1+""+operando;
            insert_bin(x);
            break;
        case "2":
            x = 2+""+operando;
            insert_bin(x);
            break;
        case "3":
            x = 3+""+operando;
            insert_bin(x);
            break;
        case "4":
            x = 4;
            insert_bin(x);
            break;
        case "5":
            x = 5;
            insert_bin(x);
            break;
        case "6":
            x = 6;
            insert_bin(x);
            break;
        case "7":
            x = 7;
            insert_bin(x);
            break;
        case "8":
            x = 8;
            insert_bin(x);
            break;
        case "9":
            x = 9;
            insert_bin(x);
            break;
        case "C":
            x = "C"+""+operando;
            insert_bin(x);
            break;
        case "D":
            x = "D"+""+operando;
            insert_bin(x);
            break;
        case "E":
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

