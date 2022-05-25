//FUNCION PARA RECORRER UN ARREGLO
export function pintarCanciones(canciones){

    let fila=document.getElementById("fila")
    canciones.forEach(function(cancion){
        //onsole.log(cancion)
        console.log(cancion.name)
        console.log(cancion.preview_url)
        console.log(cancion.album.images[0].url)

        //RUTINA PARA LLENADO
        let columna=document.createElement("div")
        columna.classList.add("col")


        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card","h-100","shadow")
        
        let audio=document.createElement("audio")
        audio.classList.add("w-100")
        audio.setAttribute("controls","controls")
        audio.src=cancion.preview_url

        let img=document.createElement("img")
        img.classList.add("w-100", "img-fluid")
        img.src=cancion.album.images[0].url

        //PADRES E HIJOS
        tarjeta.appendChild(img)
        tarjeta.appendChild(audio)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)


    });
}