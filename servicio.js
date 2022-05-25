// PASOS PARA CONSUMIR UN API CON JS PURO

//1. DECLARO LA URI (¿A donde voy?)
const URI = "https://api.spotify.com/v1/artists/34EP7KEpOjXcM2TCat1ISk/top-tracks?market=US"

//2. DECLARO LOS PARAMETROS DE LA PETICIÓN (¿QUE VOY HACER?)
const TOKEN = "Bearer BQD3hIuVhaBv3VNNQx530VPAbS7RHized3FqRqjvmITt2upi7ahRDnHElB7QSSAcwFMLh9PR-ztRvAhCl3sB3POTguYE-n26bAU-hiYRHTWAp0e43tFy5LeMUTbRqzH8EuE1bWfuCzd_WFIw-HbwLuGvycnAJbSqdok"

const PETICION = {
    method: "GET",
    headers: {Authorization: TOKEN}
}

//RUTINA PARA CONSUMIR API CON METODO POST
//1. PARA DONDE VOY 
const URIPOST= 'https://accounts.spotify.com/api/token'

//2.almaceno los datos que voy enviar
let dato1='client_id=7983a87990e34c16827faf37539e2e42'
let dato2='client_secret=57398ea24059496db28e90b45bbf42dc'
let dato3='grant_type=client_credentials'

//configuro la peticion
const PETICIONPOST={
    method:"POST",
    headers:{
        "Content-type":"application/x-www-form-urlencoded"
    },
    body:dato1+'&'+dato2+'&'+dato3
}

//4 VOY AL SERVIDOR A CONSUMIR EL SERVICIO
fetch(URIPOST,PETICIONPOST)
.then(function(respuesta){
    return respuesta.json()
})
.then(function(respuesta){
    console.log(respuesta)
    let token=respuesta.token_type+' '+respuesta.access_token
    console.log(token)
})
.catch(function(respuesta){
    console.log(respuesta)
})




//3. DECLARO EL FETCH (VOY AL SERVIDOR)
/*fetch(URI, PETICION)
.then(function(respuesta) {
    return(respuesta.json())
})
.then(function(respuesta) {
    console.log(respuesta) //Respuesta es un objeto con atributos
    console.log(respuesta.tracks) //Arreglo de 10 canciones
    pintarCanciones(respuesta.tracks)
    
    //console.log(respuesta.tracks[0]) //Accedo a los objetos
    //console.log(respuesta.tracks[0].preview_url)
})
.catch(function(respuesta) {
    console.log(respuesta)
})

//FUNCION PARA RECORRER UN ARREGLO
function pintarCanciones(canciones){

    let fila=document.getElementById("fila")
    canciones.forEach(function(cancion){
        //onsole.log(cancion)
        console.log(cancion.name)
        console.log(cancion.preview_url)
        console.log(cancionalbum.images[0].url)

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
}*/