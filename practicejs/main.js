/*
La heladería 4D vende diferentes sabores de helados. Cada vez que se vende un helado, se genera
un registro, esto es: (SP) sabor de helado: 1=fresa, 2=tamarindo, 3=chocolate. (TH) Tamaño del
helado: 1=pequeño, 2=mediano, 3=grande, 4=extra grande. Debemos conocer que el helado pequeño 
pesa 100 gramos, el mediano 200 gramos, el grande 500 gramos y el extra grande 800 gramos y cada
gramo cuesta 45$. Se desea un algoritmo que calcule: 
a. Cantidad de helados vendidos por sabor del helado.
b. Cantidad en peso vendidos por tamaño del helado.
c. Total en dólares vendido por tamaño del helado.
d. Total general.
e. Imprima que porcentaje representa los vendidos del tamaño pequeño con relación a todos los helados.
*/
const btn = document.querySelector("#btn")
const sp = document.querySelector("#sabor")
const th = document.querySelector("#tamaño")
let cantidadVendidosFresa = 0
let cantidadVendidosTamarindo = 0
let cantidadVendidosChocolate = 0
let cantidadVendidosPequeño = 0
let cantidadVendidosMediano = 0
let cantidadVendidosGrande = 0
let cantidadVendidosExtraGrande = 0
let totalDolares = 0
let totalDolaresPequeño = 0
let totalDolaresMediano = 0
let totalDolaresGrande = 0
let totalDolaresExtraGrande = 0
let resultado = document.querySelector("#resultado")
let cantidadHeladosVendidos = 0;

btn.addEventListener("click",()=>{
    cantidadHeladosVendidos++;
    if (sp.value==0 || th.value==0) {
        cantidadHeladosVendidos--;
    }
    if (sp.value == 1){
        cantidadVendidosFresa += 1
    }
    else if (sp.value == 2){
        cantidadVendidosTamarindo += 1
    }
    else if (sp.value == 3){
        cantidadVendidosChocolate += 1
    }
    if (th.value == 1) {
        cantidadVendidosPequeño++;
        totalDolares+=(cantidadVendidosPequeño*100)*45
        totalDolaresPequeño+=(cantidadVendidosPequeño*100)*45
    }
    else if (th.value == 2) {
        cantidadVendidosMediano++;
        totalDolares+=(cantidadVendidosMediano*100)*45
        totalDolaresMediano+=(cantidadVendidosMediano*100)*45
    }
    else if (th.value == 3) {
        cantidadVendidosGrande++;
        totalDolares+=(cantidadVendidosGrande*100)*45
        totalDolaresGrande+=(cantidadVendidosGrande*100)*45
    }
    else if (th.value == 4) {
        cantidadVendidosExtraGrande++;
        totalDolares+=(cantidadVendidosExtraGrande*100)*45
        totalDolaresExtraGrande+=(cantidadVendidosExtraGrande*100)*45
    }
    resultado.innerHTML = `
    <p><b>Cantidad de helados vendidos:</b> ${cantidadHeladosVendidos}</p>

    <p><b>Cantidad de helados vendidos por sabor de helado:</b> <br>
    fresa: ${cantidadVendidosFresa}<br>
    Tamarindo: ${cantidadVendidosTamarindo}<br>
    Chocolate: ${cantidadVendidosChocolate}
    </p>

    <p><b>Cantidad vendidos por tamaño del helado:</b> <br>
    pequeño: ${cantidadVendidosPequeño}<br>
    mediano: ${cantidadVendidosMediano}<br>
    grande: ${cantidadVendidosGrande}<br>
    extra grande: ${cantidadVendidosExtraGrande}<br>
    </p>

    <p><b>Cantidad en peso vendidos por tamaño del helado:</b> <br>
    pequeño: ${cantidadVendidosPequeño*100} gr<br>
    mediano: ${cantidadVendidosMediano*200} gr<br>
    grande: ${cantidadVendidosGrande*500} gr<br>
    extra grande: ${cantidadVendidosExtraGrande*800} gr<br>
    </p>

    <p><b>Total en dólares vendido por tamaño del helado:</b> <br>
    pequeño: US$ ${totalDolaresPequeño}<br>
    mediano: US$ ${totalDolaresMediano}<br>
    grande: US$ ${totalDolaresGrande}<br>
    extra grande: US$ ${totalDolaresExtraGrande}<br>
    </p>

    <p><b>Total general: US$ </b>${totalDolares}</p>
    `
})
